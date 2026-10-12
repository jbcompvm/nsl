#!/usr/bin/env python3
"""Deploy website to FTP server - improved version"""
import ftplib
import os
import sys
from pathlib import Path

# FTP credentials
FTP_HOST = "ftp.jbcomp.com"
FTP_USER = "hermes@jbcomp.com"
FTP_PASS = "T*XCaX{9+.35ZNs?"
FTP_DIR = "website_240c3762"

# Local directory
LOCAL_DIR = "/home/paperclip/.paperclip/instances/default/projects/843b739a-76a9-4fbd-bfb3-35f8ebd332e3/9a793438-25de-4bb4-a6a5-df415832c98e/_default/web"

def ensure_dir(ftp, path):
    """Ensure a directory path exists on the FTP server"""
    dirs = path.split('/')
    for dir_name in dirs:
        if not dir_name:
            continue
        try:
            ftp.cwd(dir_name)
        except:
            try:
                ftp.mkd(dir_name)
                ftp.cwd(dir_name)
                print(f"  Created directory: {dir_name}")
            except Exception as e:
                print(f"  Error creating {dir_name}: {e}")

def upload_file(ftp, local_file, remote_file):
    """Upload a single file"""
    try:
        with open(local_file, 'rb') as f:
            ftp.storbinary(f'STOR {remote_file}', f)
        return True
    except Exception as e:
        print(f"  Error uploading {local_file}: {e}")
        return False

def main():
    print(f"Connecting to {FTP_HOST}...")
    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"Connected successfully!\n")

        # Go to base directory
        base_dir = ftp.pwd()
        print(f"FTP base directory: {base_dir}")

        # Change to target directory
        ftp.cwd(FTP_DIR)
        target_dir = ftp.pwd()
        print(f"Target directory: {target_dir}\n")

        # Collect all files to upload
        local_path = Path(LOCAL_DIR)
        files_uploaded = 0
        files_failed = 0

        for item in sorted(local_path.rglob('*')):
            if item.is_file():
                # Calculate relative path
                rel_path = item.relative_to(local_path)
                rel_dir = str(rel_path.parent).replace('\\', '/')
                filename = item.name

                # Navigate to base target directory
                ftp.cwd(target_dir)

                # Create and navigate to subdirectories if needed
                if rel_dir != '.':
                    ensure_dir(ftp, rel_dir)

                # Upload the file
                print(f"Uploading: {rel_path}")
                if upload_file(ftp, str(item), filename):
                    files_uploaded += 1
                else:
                    files_failed += 1

        print(f"\n{'='*50}")
        print(f"Deployment Summary:")
        print(f"  Files uploaded: {files_uploaded}")
        print(f"  Files failed: {files_failed}")
        print(f"{'='*50}\n")

        ftp.quit()

        if files_failed > 0:
            sys.exit(1)

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()
