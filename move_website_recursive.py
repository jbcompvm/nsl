#!/usr/bin/env python3
"""Move website files from subdirectory to base FTP directory - recursive version"""
import ftplib
import sys

# FTP credentials
FTP_HOST = "ftp.jbcomp.com"
FTP_USER = "hermes@jbcomp.com"
FTP_PASS = "T*XCaX{9+.35ZNs?"
SOURCE_DIR = "website_240c3762"

def ensure_dir(ftp, path):
    """Ensure a directory exists on the FTP server"""
    if not path or path == '.':
        return

    parts = path.split('/')
    current = ftp.pwd()

    for part in parts:
        if not part:
            continue
        try:
            ftp.cwd(part)
        except:
            try:
                ftp.mkd(part)
                ftp.cwd(part)
                print(f"  Created directory: {part}")
            except Exception as e:
                print(f"  Error creating directory {part}: {e}")

    # Go back to where we started
    ftp.cwd(current)

def get_all_items(ftp, path=""):
    """Recursively get all files and directories"""
    items = {'files': [], 'dirs': []}

    try:
        listing = []
        ftp.retrlines('LIST', listing.append)

        for line in listing:
            parts = line.split()
            if len(parts) < 9:
                continue

            name = ' '.join(parts[8:])
            if name in ['.', '..']:
                continue

            is_dir = line.startswith('d')
            item_path = f"{path}/{name}" if path else name

            if is_dir:
                items['dirs'].append(item_path)
                # Recursively get items from subdirectory
                ftp.cwd(name)
                sub_items = get_all_items(ftp, item_path)
                items['files'].extend(sub_items['files'])
                items['dirs'].extend(sub_items['dirs'])
                ftp.cwd('..')
            else:
                items['files'].append(item_path)

    except Exception as e:
        print(f"Error listing {path}: {e}")

    return items

def move_all_files(ftp, source_dir):
    """Move all files from source_dir to base directory, preserving structure"""
    print(f"Moving files from {source_dir}/ to base directory...\n")

    # Change to source directory
    try:
        ftp.cwd(f"/{source_dir}")
    except Exception as e:
        print(f"Error: Could not access {source_dir}: {e}")
        return False

    print(f"Scanning {source_dir} for all files...")

    # Get all items recursively
    items = get_all_items(ftp)

    print(f"Found {len(items['files'])} files in {len(items['dirs'])} directories\n")

    # Go back to base
    ftp.cwd('/')

    # Create all necessary directories in base
    for dir_path in sorted(items['dirs']):
        try:
            ensure_dir(ftp, dir_path)
        except Exception as e:
            print(f"Error creating {dir_path}: {e}")

    moved_count = 0
    failed_count = 0

    # Move all files
    for file_path in items['files']:
        try:
            old_path = f"{source_dir}/{file_path}"
            new_path = file_path

            print(f"Moving: {old_path} -> {new_path}")
            ftp.rename(old_path, new_path)
            moved_count += 1

        except Exception as e:
            print(f"  Error moving {file_path}: {e}")
            failed_count += 1

    print(f"\n{'='*50}")
    print(f"Move Summary:")
    print(f"  Files moved: {moved_count}")
    print(f"  Files failed: {failed_count}")
    print(f"{'='*50}\n")

    return failed_count == 0

def remove_directory_tree(ftp, path):
    """Recursively remove a directory and all its contents"""
    try:
        ftp.cwd(path)

        # Get all items
        items = []
        ftp.retrlines('LIST', items.append)

        for item in items:
            parts = item.split()
            if len(parts) < 9:
                continue

            name = ' '.join(parts[8:])
            if name in ['.', '..']:
                continue

            if item.startswith('d'):
                # Recursively remove subdirectory
                remove_directory_tree(ftp, name)
            else:
                # Delete file
                ftp.delete(name)

        # Go back up and remove this directory
        ftp.cwd('..')
        ftp.rmd(path)
        print(f"Removed directory: {path}")
        return True

    except Exception as e:
        print(f"Error removing {path}: {e}")
        return False

def main():
    print(f"Connecting to {FTP_HOST}...\n")

    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"Connected successfully!\n")

        success = move_all_files(ftp, SOURCE_DIR)

        # Remove the now-empty source directory tree
        if success:
            ftp.cwd('/')
            if remove_directory_tree(ftp, SOURCE_DIR):
                print(f"\nSuccessfully removed {SOURCE_DIR} directory")

        ftp.quit()

        if not success:
            sys.exit(1)

        print("\nWebsite files successfully moved to base directory!")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()
