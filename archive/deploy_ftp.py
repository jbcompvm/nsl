#!/usr/bin/env python3
"""Deploy website to FTP server"""
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

def upload_directory(ftp, local_path, remote_path):
    """Recursively upload a directory to FTP"""
    local_path = Path(local_path)

    for item in local_path.rglob('*'):
        if item.is_file():
            # Calculate relative path
            rel_path = item.relative_to(local_path)
            remote_file = str(rel_path).replace('\\', '/')

            # Create remote directories if needed
            remote_dir = '/'.join(remote_file.split('/')[:-1])
            if remote_dir:
                try:
                    ftp.cwd(remote_path)
                    for dir_part in remote_dir.split('/'):
                        try:
                            ftp.cwd(dir_part)
                        except:
                            ftp.mkd(dir_part)
                            ftp.cwd(dir_part)
                except Exception as e:
                    print(f"Error creating directory {remote_dir}: {e}")

            # Upload file
            ftp.cwd(remote_path)
            if remote_dir:
                for dir_part in remote_dir.split('/'):
                    ftp.cwd(dir_part)

            try:
                with open(item, 'rb') as f:
                    filename = item.name
                    print(f"Uploading: {rel_path}")
                    ftp.storbinary(f'STOR {filename}', f)
            except Exception as e:
                print(f"Error uploading {item}: {e}")

            # Go back to base directory
            ftp.cwd(remote_path)

def main():
    print(f"Connecting to {FTP_HOST}...")
    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"Connected successfully!")

        # Check current directory
        print(f"Current directory: {ftp.pwd()}")

        # Try to change to target directory
        try:
            ftp.cwd(FTP_DIR)
            print(f"Changed to: {FTP_DIR}")
        except Exception as e:
            print(f"Error changing to {FTP_DIR}: {e}")
            print("Listing root directory:")
            ftp.retrlines('LIST')
            sys.exit(1)

        # List current files
        print("\nCurrent files in target directory:")
        ftp.retrlines('LIST')

        # Upload files
        print(f"\nUploading files from {LOCAL_DIR}...")
        upload_directory(ftp, LOCAL_DIR, FTP_DIR)

        print("\nDeployment complete!")
        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
