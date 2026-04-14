import os
import pandas as pd
import re

# Load CSV
df = pd.read_csv("cuisines.csv")

# Image folder path
image_folder = "image_for_cuisines/data"

print("Current Folder:", os.getcwd())
print("Image Folder Exists:", os.path.exists(image_folder))


# Clean and normalize text
def normalize(text):
    text = str(text).lower()
    text = text.replace("-", " ").replace("_", " ")
    text = re.sub(r"[^\w\s]", "", text)  # remove special characters
    return text


# Convert to word list
def get_words(text):
    return normalize(text).split()


# STRONG matching function
def find_image(recipe_name, image_url=None):
    recipe_words = get_words(recipe_name)

    best_match = None
    highest_score = 0

    for file in os.listdir(image_folder):
        filename_without_ext = os.path.splitext(file)[0]
        file_words = get_words(filename_without_ext)

        # Count how many words match
        score = len(set(recipe_words) & set(file_words))

        # Prefer highest matching score
        if score > highest_score:
            highest_score = score
            best_match = file

    # If strong match found
    if best_match and highest_score > 0:
        return f"{image_folder}/{best_match}"

    # Fallback to CSV image_url if exists
    if image_url and isinstance(image_url, str) and image_url.strip() != "":
        return image_url

    # No image
    return ""


# Apply to all rows
df["image"] = df.apply(lambda row: find_image(row["name"], row.get("image_url")), axis=1)

# Save JSON
df.to_json("recipes.json", orient="records", indent=4)


print("✅ JSON Updated Successfully!")
