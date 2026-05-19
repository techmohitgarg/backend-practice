# Phase 0 — Setup notes

# What We Installed

| Tool | Purpose |
|---|---|
| Homebrew | macOS package manager |
| Node.js | Run JavaScript backend |
| npm | Install packages/libraries |
| VS Code | Code editor |
| Git | Version control |
| MongoDB Server | Database engine |
| MongoDB Compass | MongoDB GUI |
| Postman | API testing tool |

---

# 1. Homebrew

## Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Check Homebrew Version

```bash
brew --version
```

---

# 2. Node.js

## Install Node.js

```bash
brew install node
```

---

## Check Node.js Version

```bash
node -v
```

---

## Check npm Version

```bash
npm -v
```

---

# 3. VS Code

## Install VS Code

Download:
https://code.visualstudio.com/

Move:
```txt
VS Code → Applications
```

---

## Enable `code` Command

Open VS Code

Press:
```txt
Command + Shift + P
```

Search:
```txt
Shell Command: Install 'code' command in PATH
```

---

## Verify VS Code

```bash
code --version
```

---

# 4. VS Code Extensions

Install these:

- ES7+ React/JS Snippets
- Prettier
- ESLint
- Material Icon Theme
- Error Lens
- Thunder Client

---

# 5. Git

## Check Git

```bash
git --version
```

---

## Install Git (if not installed)

```bash
brew install git
```

---

# 6. MongoDB Server

## Install MongoDB

```bash
brew tap mongodb/brew
```

```bash
brew install mongodb-community
```

---

# MongoDB Commands

## Start MongoDB

```bash
brew services start mongodb/brew/mongodb-community
```

---

## Stop MongoDB

```bash
brew services stop mongodb/brew/mongodb-community
```

---

## Restart MongoDB

```bash
brew services restart mongodb/brew/mongodb-community
```

---

## Check MongoDB Status

```bash
brew services list
```

---

# MongoDB Shell

## Open MongoDB Shell

```bash
mongosh
```

---

## Exit MongoDB Shell

```bash
exit
```

---

# 7. MongoDB Compass

## Install MongoDB Compass

Download:
https://www.mongodb.com/products/tools/compass

Move:
```txt
MongoDB Compass → Applications
```

---

## Check if Compass Installed

### Method 1

```txt
Applications → MongoDB Compass
```

---

### Method 2

Press:
```txt
Command + Space
```

Search:
```txt
MongoDB Compass
```

---

# MongoDB Compass Connection

## Connection String

```txt
mongodb://127.0.0.1:27017
```

---

## Steps

1. Open MongoDB Compass
2. Paste connection string
3. Click Connect

---

# 8. Postman

## Install Postman

Download:
https://www.postman.com/downloads/

Move:
```txt
Postman → Applications
```

---

# 9. Backend Workspace Setup

## Create Main Folder

```bash
mkdir MERN-BACKEND
cd MERN-BACKEND
```

---

## Create Folders

```bash
mkdir practice projects notes resources
```

---

# Final Folder Structure

```txt
MERN-BACKEND/
 ├── practice/
 ├── projects/
 ├── notes/
 └── resources/
```

---

# 10. Open Workspace in VS Code

```bash
code .
```

---

# 11. First Node.js Project

## Create Project

```bash
mkdir first-node-app
cd first-node-app
```

---

## Initialize Project

```bash
npm init -y
```

Creates:
```txt
package.json
```

---

# 12. First JavaScript File

## Create File

```txt
index.js
```

---

## Add Code

```javascript
console.log("Hello Backend");
```

---

## Run File

```bash
node index.js
```

---

# Expected Output

```txt
Hello Backend
```

---

# Important MongoDB Error Faced

## Error

```txt
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
```

---

# Meaning

MongoDB server was not running.

---

# Fix Steps

## Start MongoDB

```bash
brew services start mongodb/brew/mongodb-community
```

---

## Restart MongoDB

```bash
brew services restart mongodb/brew/mongodb-community
```

---

## Check MongoDB Status

```bash
brew services list
```

---

## Test MongoDB

```bash
mongosh
```

---

# Check MongoDB Port

```bash
lsof -i :27017
```

---

# Check MongoDB Logs

```bash
tail -50 /opt/homebrew/var/log/mongodb/mongo.log
```

---

# Important Concepts Learned

## Node.js

Runs JavaScript outside browser.

---

## npm

Installs backend libraries.

---

## MongoDB

NoSQL database.

Stores data as documents.

---

## MongoDB Compass

GUI to manage MongoDB visually.

---

## mongosh

MongoDB terminal shell.

---

## MongoDB Service

Runs in background on macOS.

---

# Important Commands Summary

## Node.js

```bash
node -v
npm -v
```

---

## Git

```bash
git --version
```

---

## MongoDB

### Start

```bash
brew services start mongodb/brew/mongodb-community
```

---

### Stop

```bash
brew services stop mongodb/brew/mongodb-community
```

---

### Restart

```bash
brew services restart mongodb/brew/mongodb-community
```

---

### Check Status

```bash
brew services list
```

---

### Open MongoDB Shell

```bash
mongosh
```

---

# Current Progress

- MERN environment setup completed
- MongoDB installed
- MongoDB Compass connected
- Node.js working
- First backend file executed
- Backend workspace created

---

# Next Phase

## JavaScript Backend Fundamentals

Topics:
- variables
- functions
- arrays
- objects
- loops
- async/await
- promises
- modules
