import os
import openai

# Set up OpenAI API key
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("OPENAI_API_KEY environment variable is not set.")

openai.api_key = api_key

# Path to the proofs directory
proofs_dir = "./proofs"

def create_natural_language_subfolder(folder_path):
    """Ensure the natural-language subdirectory exists."""
    natural_language_path = os.path.join(folder_path, "natural-language")
    if not os.path.exists(natural_language_path):
        os.makedirs(natural_language_path)
    return natural_language_path

def generate_natural_language_explanation(proof_content):
    """Generate a natural language explanation for the given proof content."""
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4-0613",  # Use your fine-tuned model or the base model
            messages=[
                {"role": "system", "content": "You are a mathematician converting formal proofs into natural language explanations."},
                {"role": "user", "content": f"Explain this proof in natural language:\n{proof_content}"}
            ]
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        print(f"Error generating explanation: {e}")
        return None

def process_proof_file(proof_path, natural_language_path):
    """Process a single proof file to generate a natural language explanation."""
    try:
        # Read the proof content
        with open(proof_path, "r") as proof_file:
            proof_content = proof_file.read()

        # Generate the natural language explanation
        explanation = generate_natural_language_explanation(proof_content)
        if explanation:
            # Write the explanation to the natural-language subfolder
            filename = os.path.basename(proof_path)
            output_path = os.path.join(natural_language_path, filename)
            with open(output_path, "w") as output_file:
                output_file.write(explanation)
            print(f"Generated explanation for: {proof_path}")
        else:
            print(f"Failed to generate explanation for: {proof_path}")
    except Exception as e:
        print(f"Error processing file {proof_path}: {e}")

def process_proofs_directory(base_dir):
    """Go through every folder in the proofs directory and process all proofs."""
    for root, dirs, files in os.walk(base_dir):
        if root.endswith("natural-language"):
            # Skip existing natural-language subdirectories
            continue
        natural_language_path = create_natural_language_subfolder(root)
        for file in files:
            if file.endswith(".md"):
                proof_path = os.path.join(root, file)
                process_proof_file(proof_path, natural_language_path)

if __name__ == "__main__":
    process_proofs_directory(proofs_dir)
