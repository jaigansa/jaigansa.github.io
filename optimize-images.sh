#!/bin/bash

# ------------------------------------------------------------------
# Hugo Image Optimizer
# Converts JPG/PNG to WebP and updates Markdown references
# ------------------------------------------------------------------

# Directories to scan
CONTENT_DIR="content"
ASSETS_DIR="assets"

# Check for cwebp
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed."
    echo "Please run: sudo apt update && sudo apt install webp"
    exit 1
fi

echo "🚀 Starting image optimization..."

# Find all jpg, jpeg, png in content and assets
find "$CONTENT_DIR" "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r img; do
    
    # Skip if it's already optimized or doesn't exist
    [ -e "$img" ] || continue
    
    filename=$(basename "$img")
    webp_path="${img%.*}.webp"
    webp_filename=$(basename "$webp_path")

    echo "📦 Processing: $filename"

    # Convert to WebP (Quality 75 is the sweet spot for web)
    if cwebp -q 75 "$img" -o "$webp_path" -quiet; then
        
        # 1. Update references in all .md files
        # We search specifically for the filename string and replace it with the webp version
        find "$CONTENT_DIR" -name "*.md" -exec sed -i "s/$filename/$webp_filename/g" {} +
        
        # 2. Update references in hugo.toml (for avatar etc)
        sed -i "s/$filename/$webp_filename/g" hugo.toml

        # 3. Remove original file to save space
        rm "$img"
        
        echo "   ✅ Converted & Updated references"
    else
        echo "   ❌ Failed to convert $filename"
    fi
done

echo "✨ Optimization complete! Your repository size is now reduced."
echo "   You can now run: git add . && git commit -m 'Optimize images' && git push"
