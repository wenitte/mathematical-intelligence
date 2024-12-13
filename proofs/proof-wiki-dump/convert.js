const fs = require('fs').promises;
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const STATE_FILE = 'conversion_state.json';
let processedCount = 0;

const NATURAL_LANGUAGE_DIR = path.join(process.cwd(), 'natural-language');
const OUTPUT_DIR = process.cwd();

const prompt = `You are tasked with converting mathematical proofs from natural language to FuturLang Mathematical notation (FL-Math). FL-Math requires explicit logical connections and formal structure.

Key requirements:
1. Use explicit logical connectives (→, ∧, ↔)
2. Structure as theorem and proof blocks
3. Include proper variable binding
4. Maintain mathematical notation
5. Make logical steps explicit

Example FL-Math format:

theorem Example_Name() {
  assert(
    ∀x ∈ ℝ ⇒ [condition]
  )
} ↔

proof Example_Name() {
  setVar(x: ℝ) →
  assert([step1]) →
  lemma Lemma_Name() {
    assert([lemma_statement])
  } →
  apply(Lemma_Name()) →
  assert([conclusion])
}

Convert the following proof to FL-Math while maintaining mathematical rigor and explicit logical connections:

{proofContent}

Ensure all logical steps are connected with appropriate connectives and maintain proper theorem/proof structure. Convert this mathematical proof to FuturLang Mathematical notation (FL-Math). Only output the conversion, no explanations or extra text. Use this exact format:`;


async function loadState() {
    try {
        const data = await fs.readFile(STATE_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return { processedFiles: [] };
    }
}

async function saveState(state) {
    await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2));
}

async function convertToFLMath(content) {
    try {
        const response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 4096,
            messages: [{
                role: "user",
                content: prompt.replace('{proofContent}', content)
            }]
        });

        return response.content[0].text;
    } catch (error) {
        console.error('Error in conversion:', error);
        throw error;
    }
}

async function processFiles() {
    console.log('Looking for proofs in:', NATURAL_LANGUAGE_DIR);
    console.log('Output directory:', OUTPUT_DIR);

    const state = await loadState();

    try {
        const files = await fs.readdir(NATURAL_LANGUAGE_DIR);
        console.log(`Found ${files.length} files to process`);

        for (const file of files) {
            if (state.processedFiles.includes(file)) {
                console.log(`Skipping already processed file: ${file}`);
                continue;
            }

            try {
                console.log(`\nProcessing ${file}...`);

                // Read input file
                const inputPath = path.join(NATURAL_LANGUAGE_DIR, file);
                const content = await fs.readFile(inputPath, 'utf8');

                // Convert to FL-Math
                const flMathContent = await convertToFLMath(content);

                // Save converted file in parent directory
                const outputPath = path.join(OUTPUT_DIR, file);
                await fs.writeFile(outputPath, flMathContent);

                // Update state
                state.processedFiles.push(file);
                await saveState(state);

                processedCount++;
                console.log(`Successfully converted ${file}`);
                console.log(`Total converted: ${processedCount}`);

                // Add delay to respect API limits
                await new Promise(resolve => setTimeout(resolve, 1000));

            } catch (error) {
                console.error(`Error processing ${file}:`, error);
                // Continue with next file
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error);
        throw error;
    }
}

async function main() {
    if (!process.env.ANTHROPIC_API_KEY) {
        console.error('Please set ANTHROPIC_API_KEY environment variable');
        process.exit(1);
    }

    try {
        await processFiles();
        console.log('\nConversion complete!');
        console.log(`Total files converted: ${processedCount}`);
    } catch (error) {
        console.error('Fatal error:', error);
        process.exit(1);
    }
}

main();
