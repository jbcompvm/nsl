#!/usr/bin/env python3
"""Move website files from subdirectory to base FTP directory"""
import ftplib
import sys

# FTP credentials
FTP_HOST = "ftp.jbcomp.com"
FTP_USER = "hermes@jbcomp.com"
FTP_PASS = "T*XCaX{9+.35ZNs?"
SOURCE_DIR = "website_240c3762"

def get_all_files(ftp, path="."):
    """Recursively get all files in a directory"""
    files = []
    dirs = []

    try:
        items = []
        ftp.retrlines('LIST', items.append)

        for item in items:
            parts = item.split()
            if len(parts) < 9:
                continue

            name = ' '.join(parts[8:])
            if name in ['.', '..']:
                continue

            # Check if it's a directory (first char is 'd')
            if item.startswith('d'):
                dirs.append(name)
            else:
                files.append(name)

        # Process files in current directory
        current_path = ftp.pwd()
        for f in files:
            if current_path == "/":
                rel_path = f
            else:
                rel_path = current_path.lstrip('/') + '/' + f if current_path != "/" else f
            files.append((rel_path, f))

        # Recursively process subdirectories
        for d in dirs:
            ftp.cwd(d)
            subfiles = get_all_files(ftp, d)
            files.extend(subfiles)
            ftp.cwd('..')

    except Exception as e:
        print(f"Error listing directory {path}: {e}")

    return files

def move_files(ftp, source_dir):
    """Move all files from source_dir to base directory"""
    print(f"Moving files from {source_dir}/ to base directory...\n")

    # Change to source directory
    try:
        ftp.cwd(source_dir)
    except Exception as e:
        print(f"Error: Could not access {source_dir}: {e}")
        return False

    source_path = ftp.pwd()
    print(f"Source directory: {source_path}")

    # Get list of all files
    files = []
    try:
        ftp.retrlines('LIST', files.append)
    except Exception as e:
        print(f"Error listing files: {e}")
        return False

    print(f"Found {len(files)} items to move\n")

    # Go back to base directory
    ftp.cwd('/')
    base_path = ftp.pwd()
    print(f"Base directory: {base_path}\n")

    moved_count = 0
    failed_count = 0

    # Move each file
    for file_info in files:
        parts = file_info.split()
        if len(parts) < 9:
            continue

        filename = ' '.join(parts[8:])
        if filename in ['.', '..']:
            continue

        is_dir = file_info.startswith('d')

        try:
            old_path = f"{source_dir}/{filename}"
            new_path = filename

            if is_dir:
                print(f"Skipping directory: {filename}")
                continue

            print(f"Moving: {old_path} -> {new_path}")
            ftp.rename(old_path, new_path)
            moved_count += 1

        except Exception as e:
            print(f"  Error moving {filename}: {e}")
            failed_count += 1

    print(f"\n{'='*50}")
    print(f"Move Summary:")
    print(f"  Files moved: {moved_count}")
    print(f"  Files failed: {failed_count}")
    print(f"{'='*50}\n")

    return failed_count == 0

def main():
    print(f"Connecting to {FTP_HOST}...\n")

    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"Connected successfully!\n")

        success = move_files(ftp, SOURCE_DIR)

        # Try to remove the now-empty source directory
        if success:
            try:
                ftp.rmd(SOURCE_DIR)
                print(f"Removed empty directory: {SOURCE_DIR}")
            except Exception as e:
                print(f"Note: Could not remove {SOURCE_DIR}: {e}")

        ftp.quit()

        if not success:
            sys.exit(1)

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()
