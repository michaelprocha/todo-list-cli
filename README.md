# todo-list-cli

A command-line To-Do List App built with Node.js, designed for managing daily tasks directly from the terminal.
The application provides an intuitive and colorful interface powered by popular npm packages, allowing users to create, remove, rename, and complete/uncomplete tasks effortlessly.

All task data is stored persistently in a separate JSON file, managed through Node’s core modules fs and path, ensuring reliable file handling and portability.

---

## ✨ Features

### Task Management:
- Create new tasks.
- Remove existing tasks.
- Rename tasks.
- Mark tasks as completed or uncompleted.

### Interactive Terminal Experience:
- Built with Enquirer for interactive prompts.
- Enhanced visuals using Chalk for colored output.
- Structured display of tasks using cli-table3.
- Clears the console with clear for a clean user interface.

### Data Handling:
- Tasks are stored in a dedicated JSON file.
- fs module handles reading and writing task data.
- path module manages the correct file directory path.

## 📌 Requirements
[NodeJS](https://nodejs.org/pt/download)

---
## 📦 How to compile and run

### Linux / Mac / Git Bash:
```bash
npm start
```

## 👨‍💻 Author
Made by Michael Rocha

---

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.