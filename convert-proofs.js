const fs = require('fs').promises;
const path = require('path');
const { Anthropic } = require('@anthropic-ai/sdk');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const PROOFS_DIR = './proofs';
const PROGRAMS_DIR = './programs';

const prompt = `You are converting mathematical proofs into FuturLang programs. FuturLang is a programming language where every program is a single truth-evaluable statement, with statements connected by logical connectives that represent their true relationship. Analyze each connection to determine the appropriate logical connective.

Key requirements:
1. Maintain exact logical dependencies between statements using appropriate connectives (→, ∧, ↔)
2. Preserve all variable bindings and type annotations
3. Keep Unicode mathematical symbols
4. Output should have .fl extension
5. Each statement must be analyzed for how it logically connects to the next

Here is an example of a correctly formatted FuturLang program:

// Prelude: Abstract Algebra and Field Theory
level u, v → // Universe levels are required for following type definitions

// Type definitions with explicit universe levels - each provides structure needed for next
struct Field@{u} {
  carrier: Set@{u}
} → // Field structure needed for Extension

struct Extension@{u v} {
  base: Field@{u};
  extended: Field@{v}
} → // Extension needed for algebraic elements

struct Algebraic@{u v} {
  field: Field@{u};
  element: Field@{v}
} → // These structures enable our main theorem

// Definitions establish core concepts needed for later proofs
definition ConstructibleAngles(): Set[ℝ] {
  return {
    θ: ℝ |
      ∃(E: Extension(ℚ)) ⇒
        (
          θ Algebraic(ℚ, E) ∧
          ∃(n: ℕ) ⇒
            Degree(E, ℚ) = 2^n
        )
  }
} → // Definition required for following algebraic properties

definition Algebraic(x: Element, F: Field, E: Extension): 𝔹 {
  return ∃(p: F[poly]) ⇒
    (
      p(x) = 0 ∧
      p irreducible
    )
} ∧ // Works together with next definition

definition Degree(E: Extension, F: Field): ℕ {
  return |E.carrier : F.carrier|
} → // These definitions enable our first lemma

lemma Constructible_Properties() {
  assert(
    ∀(θ: ℝ) ⇒
      (
        cos(θ) ∈ ConstructibleAngles ∧
        sin(θ) ∈ ConstructibleAngles
      )
  )
} → // Properties needed for trisection proof

proof Constructible_Properties() {
  setVar(θ: ℝ) →
  setVar(r: ℝ, cos(θ)) →
  assert(r Algebraic(ℚ, Extension(ℚ, θ)))
} → // This proof enables next lemma

lemma Impossibility_Of_Trisection() {
  assert(
    ∀(θ: ConstructibleAngles) ⇒
      ¬(cos(θ/3) ∈ ConstructibleAngles)
  )
} → // Core part of impossibility result

proof Impossibility_Of_Trisection() {
  setVar(θ: ConstructibleAngles) →
  setVar(c: ℝ, cos(θ/3)) →
  setVar(p: Polynomial, MinimalPolynomial(c)) →
  assert(
    (
      Degree(p) = 3 ∧
      p irreducible ∧
      ¬(c ∈ ConstructibleAngles)
    )
  )
} ∧ // Works in parallel with cube roots result

lemma Impossibility_Of_Cube_Roots() {
  assert(
    ∀(x: ℚ) ⇒
      ¬(³√x ∈ ConstructibleAngles)
  )
} → // Final piece needed for main theorem

proof Impossibility_Of_Cube_Roots() {
  setVar(x: ℚ) →
  setVar(r: ℝ, ³√x) →
  setVar(p: Polynomial, MinimalPolynomial(r)) →
  assert(
    (
      Degree(Extension(ℚ, r), ℚ) = 3 ∧
      ¬(r ∈ ConstructibleAngles)
    )
  )
} → // All components now ready for main proof

theorem Impossibility_Of_Trisection_And_Doubling() {
  assert(
    ∀(θ: ConstructibleAngles) ⇒
      ∀(x: ℚ) ⇒
        (
          (Degree(Extension(ℚ, ³√x)) = 3 ∧
          cos(θ/3) Algebraic) →
          ¬(cos(θ/3) ∈ ConstructibleAngles)
        )
  )
} ↔ // Equivalent to its proof

proof Impossibility_Of_Trisection_And_Doubling() {
  setVar(θ: ConstructibleAngles) →
  setVar(x: ℚ) →
  apply(Constructible_Properties()) →
  apply(Impossibility_Of_Trisection()) →
  apply(Impossibility_Of_Cube_Roots()) →
  assert("Trisection and doubling are impossible")
}

Please convert the following proof into a FuturLang program following the same structure and principles:

{proofContent}

Analyze each connection between statements and use the appropriate logical connective (→, ∧, ↔) based on the true logical relationship between the statements.`;

async function convertProofToProgram(proofContent) {
  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4096,
      messages: [{
        role: "user",
        content: prompt.replace('{proofContent}', proofContent)
      }]
    });

    const program = response.content[0].text;
    return program.replace(/```[\w]*\n|```/g, '').trim();
  } catch (error) {
    console.error('Error generating program:', error);
    throw error;
  }
}

async function processDirectory(currentPath, relativePath = '') {
  try {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const currentEntryPath = path.join(currentPath, entry.name);
      const relativeEntryPath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        const programDirPath = path.join(PROGRAMS_DIR, relativeEntryPath);
        await fs.mkdir(programDirPath, { recursive: true });
        await processDirectory(currentEntryPath, relativeEntryPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        console.log(`Processing ${relativeEntryPath}...`);

        const proofContent = await fs.readFile(currentEntryPath, 'utf8');
        const program = await convertProofToProgram(proofContent);

        const programPath = path.join(
          PROGRAMS_DIR,
          relativeEntryPath.replace(/\.md$/, '.fl')
        );

        await fs.writeFile(programPath, program);
        console.log(`Created ${programPath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${currentPath}:`, error);
    throw error;
  }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY not found in environment variables');
    process.exit(1);
  }

  try {
    await fs.mkdir(PROGRAMS_DIR, { recursive: true });
    await processDirectory(PROOFS_DIR);
    console.log('All proofs processed successfully!');
  } catch (error) {
    console.error('Error in main execution:', error);
    process.exit(1);
  }
}

main();
