## 🧑‍💻 User Management App

**React + Vite + Tailwind CSS**

A simple user management application built with **React**, **Vite**, and **Tailwind CSS**.
This project demonstrates core frontend skills including **data fetching**, **routing**, **error handling**, **custom hooks**, and **responsive UI design**.

---

## 🚀 Features

- 👥 Display users list
- 🔍 Search users by name or email
- 🔎 View user detail page
- 🗑️ Delete user with confirmation
- ⚡ Optimistic UI updates with rollback on failure
- 📍 Client-side routing using React Router
- 📱 Responsive layout using Tailwind CSS
- 🪝 Custom hooks for data fetching (e.g. `useUsers`)
- ⏳ Loading & error states handling

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Custom React Hooks**
- **Fetch API**

---

## 📂 Project Structure

```
src/
├── api/
│   └── users.js          # API functions
├── hooks/
│   └── useUsers.js       # Custom React hooks
├── pages/
│   ├── Home.jsx
│   ├── UserPage.jsx
│   ├── UserDetailPage.jsx
│   └── About.jsx
├── components/
│   ├── Sidebar.jsx
│   ├── UserCard.jsx
│   ├── LoadingState.jsx
│   └── ErrorState.jsx
├── layouts/
│   └── Layout.jsx        # App layout (Sidebar, content)
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Key Concepts Demonstrated

- Separation of concerns (API / hooks / pages / components)
- Reusable UI components
- Centralized layout management
- Proper loading & error handling
- Clean and readable code structure

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

Then open:
👉 [http://localhost:5173]

---

## 📌 Notes

This project is intended for **learning purposes** and as a **frontend portfolio example**.

---

```md
## 🔮 Future Improvements

- Authentication (Login / Logout)
- Pagination
- API error retry
- Unit testing with Jest / Vitest
```
