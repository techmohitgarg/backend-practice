# Phase 0 — First Node.js Project

# Recommended Project Location

Create all backend learning projects inside:

```txt
MERN-BACKEND/projects/
```

---

# Recommended Structure

```txt
MERN-BACKEND/
 ├── practice/
 ├── projects/
 ├── notes/
 └── resources/
```

---

# First Project Location

```txt
MERN-BACKEND/projects/first-node-app
```

---

# Step 1 — Open Terminal

Move to your MERN workspace:

```bash
cd ~/MERN-BACKEND/projects
```

---

# Step 2 — Create Project Folder

```bash
mkdir first-node-app
```

---

# Step 3 — Open Project Folder

```bash
cd first-node-app
```

---

# Step 4 — Initialize Node.js Project

```bash
npm init -y
```

---

# What This Creates

```txt
package.json
```

---

# Step 5 — Open Project in VS Code

```bash
code .
```

---

# Step 6 — Create Main File

Create:

```txt
index.js
```

---

# Step 7 — Add First Backend Code

```javascript
console.log("Hello Backend");
```

---

# Step 8 — Run Project

```bash
node index.js
```

---

# Expected Output

```txt
Hello Backend
```

---

# Step 9 — Add npm Start Script

Open:
```txt
package.json
```

Update scripts:

```json
"scripts": {
  "start": "node index.js"
}
```

---

# Run Using npm

```bash
npm start
```

---

# Final Folder Structure

```txt
MERN-BACKEND/
 ├── practice/
 ├── projects/
 │    └── first-node-app/
 │         ├── package.json
 │         └── index.js
 │
 ├── notes/
 └── resources/
```

---

# What Learned

| Topic | Understanding |
|---|---|
| Node.js | Runs JavaScript outside browser |
| npm init | Creates Node project |
| package.json | Stores project config |
| node index.js | Runs backend file |
| npm start | Runs npm script |

---

# Important Commands

| Purpose | Command |
|---|---|
| Open Projects Folder | `cd ~/MERN-BACKEND/projects` |
| Create Project | `mkdir first-node-app` |
| Open Project | `cd first-node-app` |
| Initialize Node Project | `npm init -y` |
| Open VS Code | `code .` |
| Run File | `node index.js` |
| Run npm Script | `npm start` |

---

# Current Progress

- Backend workspace setup completed
- First Node.js project created
- package.json understood
- First backend file executed
- npm scripts learned
