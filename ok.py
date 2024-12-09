import os

# Define the source (proofs) and target (programs) directories
source_dir = "proofs"
target_dir = "programs"

def replicate_folders(source, target):
    # Traverse the source directory
    for root, dirs, files in os.walk(source):
        # Calculate the relative path from the source directory
        relative_path = os.path.relpath(root, source)
        # Determine the corresponding target path
        target_path = os.path.join(target, relative_path)

        # Create the target directory if it doesn't exist
        if not os.path.exists(target_path):
            os.makedirs(target_path)
            print(f"Created folder: {target_path}")

# Call the function
replicate_folders(source_dir, target_dir)
