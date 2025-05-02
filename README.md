# 🐛 Bug Tracker App

A simple and intuitive bug tracking application built using **React**, **Vite**, **Tailwind CSS**, and **JSON Server** as a fake REST API. The app allows users to manage software bugs with basic CRUD functionality.
Live Preview - https://bug-tracker-app-git-master-invincible-adis-projects.vercel.app/
---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/invincible-adi/Bug-tracker-app.git
cd Bug-tracker-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 🌐 API Setup

You can use a hosted JSON server API:

```bash
https://json-server-bug-tracker.onrender.com/api/bugs
```

## 📁 Folder Structure

```
BUGTRACKERAPP/
├── node_modules/
├── src/
│   ├── Components/
│   │   ├── App.jsx
│   │   ├── BugList.jsx
│   │   ├── AddBug.jsx
│   │   ├── EditBug.jsx
│   │   ├── ViewBug.jsx
│   │   ├── SearchFilter.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🧠 Approach

### Objective:

To develop a clean and functional **bug tracking system** that supports viewing, creating, editing, and deleting bugs with modern frontend practices.

### Tools Used:

* **React (Vite)** for performance and modular development.
* **Tailwind CSS** for utility-first styling and responsiveness.
* **React Hook Form** for form management and validation.
* **Axios** for communicating with the backend.
* **React Toastify** for user feedback via notifications.
* **SweetAlert2** for confirmation dialogs.

### Highlights:

* CRUD operations are performed via Axios against a JSON Server API.
* `AddBug` and `EditBug` forms include validation using `react-hook-form`.
* Bug list is searchable and filterable based on `status` and `priority`.
* Project structure is minimal and scalable under `src/Components`.
* Clean UI with focus on usability and performance.

---

## ✅ Features

* View bug list
* Add new bug with validation
* Edit existing bugs
* Delete bugs with confirmation
* Search and filter functionality
* Toast notifications for feedback
* Fully responsive design

---

## 📦 Sample Bug Object

```json
{
  "id": 1,
  "title": "Login not working",
  "description": "User can't log in with correct credentials.",
  "status": "Open",
  "priority": "High",
  "assignedTo": "Dev1"
}
```

---

## 👨‍💻 Author

Crafted with dedication by Aditya Kumar GAutam.

