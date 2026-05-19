# GitHub SSH Setup on MacBook

This guide explains how to create and configure SSH keys on macOS and connect them with GitHub.

---

# Step 1: Check Existing SSH Keys

Open Terminal and run:

```bash
ls -al ~/.ssh
```

If you already see files like:

```bash
id_ed25519
id_ed25519.pub
```

then SSH keys already exist.

---

# Step 2: Generate a New SSH Key

Run:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Example:

```bash
ssh-keygen -t ed25519 -C "john@example.com"
```

Press `Enter` to save in the default location.

---

# Step 3: Start SSH Agent

```bash
eval "$(ssh-agent -s)"
```

---

# Step 4: Add SSH Key to macOS Keychain

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

If the above command does not work:

```bash
ssh-add -K ~/.ssh/id_ed25519
```

---

# Step 5: Copy SSH Public Key

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

---

# Step 6: Add SSH Key to GitHub

Open GitHub SSH settings:

https://github.com/settings/keys

Steps:

1. Click **New SSH key**
2. Add title:
   ```text
   MacBook
   ```
3. Paste copied SSH key
4. Click **Add SSH key**

---

# Step 7: Test SSH Connection

```bash
ssh -T git@github.com
```

Expected output:

```bash
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

This means SSH setup is successful.

---

# Step 8: Configure Git Remote URL

Check current remote:

```bash
git remote -v
```

Update remote to SSH:

```bash
git remote set-url origin git@github.com:username/repository-name.git
```

Example:

```bash
git remote set-url origin git@github.com:john/backend-project.git
```

Verify:

```bash
git remote -v
```

Expected:

```bash
origin  git@github.com:username/repository-name.git (fetch)
origin  git@github.com:username/repository-name.git (push)
```

---

# Step 9: Push Code to GitHub

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

If branch is `master`:

```bash
git push -u origin master
```

---

# Step 10: Configure Git User

Set username:

```bash
git config --global user.name "Your Name"
```

Set email:

```bash
git config --global user.email "your_email@example.com"
```

Verify:

```bash
git config --list
```

---

# Useful Commands

## View SSH Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

## Open SSH Folder

```bash
open ~/.ssh
```

## Remove SSH Key from Agent

```bash
ssh-add -d ~/.ssh/id_ed25519
```

---

# Sample Repository SSH URL

```bash
git@github.com:username/repository-name.git
```

---

# Verify Everything

```bash
ssh -T git@github.com
git remote -v
git status
```

Everything should now work without username or password.