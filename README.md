# React Task Manager

A simple task manager application built with React and using JSON Server as a mock backend.

## Demo

![](https://github.com/ap0calypse8/react-task-manager/blob/main/Screenshot%202024-05-19%20005223.png)

## Features

- Add, update, and delete tasks
- Set reminder fro your tasks
- Persistent storage with JSON Server
- Fast and responsive UI

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ap0calypse8/react-task-manager.git
    cd react-task-manager
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start JSON Server:**

    ```bash
    npx json-server --watch db.json --port 5000
    ```

4. **Start the React app:**

    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5137` to see the application running.
2. Use the interface to add, edit, and delete tasks.
3. Tasks are persisted using JSON Server, running at `http://localhost:5000`.

## Folder Structure

Here is a brief overview of the project's folder structure:

react-task-manager/
│
├── public/ # Public assets
│
├── src/ # Source files
│ ├── components/ # React components
│ ├── App.jsx # Main App component
│ ├── index.jsx # Entry point
│ └── ... # Other files
│
├── db.json # JSON Server database
├── .gitignore # Git ignore file
├── package.json # NPM dependencies and scripts
├── vite.config.js # Vite configuration
└── README.md # Project README file

