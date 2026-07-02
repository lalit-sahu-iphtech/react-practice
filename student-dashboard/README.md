# Student Management Dashboard

A simple **React-based Student Management Dashboard** project built to practice core React concepts like **State Management, Props, Event Handling, Forms, Conditional Rendering, Array/Object State Updates, and Component-based Architecture**.

---

## 📌 Project Overview

This project allows users to manage student records dynamically.

Users can:

- Add new students
- Delete existing students
- Search students by name
- View active/inactive student status
- Display student skills and hobbies
- View total number of students
- Preview form data live while typing
- Use the project on desktop and mobile devices (Responsive Design)

---

## 🚀 Features

### 1. Add Student

Users can add a new student by filling out the form.

Fields:

- Name
- Roll Number
- College
- City
- Skills
- Hobbies

---

### 2. Delete Student

Each student card contains a delete button.

- Removes student from the list
- Updates UI instantly

---

### 3. Search Student

Users can search students by name.

- Filters student list dynamically
- Uses real-time search while typing

---

### 4. Active / Inactive Status

Each student has a status.

```js
active: true
```

- true → Active
- false → Inactive

Displayed using conditional rendering.

---

### 5. Display Skills

Each student stores skills in an array.

Example:

```js
skills: ["React", "JavaScript", "HTML"]
```

Displayed using:

```js
map()
```

---

### 6. Display Hobbies

Each student stores hobbies in an array.

Example:

```js
hobbies: ["Cricket", "Music"]
```

Displayed dynamically using:

```js
map()
```

---

### 7. Total Students Count

Displays total number of students.

Example:

```js
students.length
```

---

### 8. Live Preview

While entering form data, live preview updates instantly.

Example:

- Name Preview
- College Preview

Uses:

```js
Two-Way Data Binding
```

---

### 9. Responsive Design

Project works on:

- Desktop
- Tablet
- Mobile

Using:

- CSS
- Media Queries

---

## 🛠 React Concepts Used

### State Management

- useState()
- Creating State
- Updating State
- Object State
- Array State

### Event Handling

- onClick
- onChange
- onSubmit

### Forms

- Controlled Components
- Form Submission
- Reset Form

### State Updates

- Updating Arrays in State
- Updating Objects in State

### Array Methods

- map()
- filter()

### Operators

- Spread Operator (...)

### UI Concepts

- Conditional Rendering
- Two-Way Data Binding
- Dynamic Rendering

### Architecture

- Component-Based Architecture
- Props (Parent → Child)

---

## 📂 Project Structure

```bash
src/
│── App.jsx
│── App.css
│── Header.jsx
│── Sidebar.jsx
│── StudentForm.jsx
│── StudentList.jsx
│── StudentCard.jsx
│── Footer.jsx
```

---

## 📦 Components Used

### Header Component

Displays dashboard heading.

```jsx
<Student Management Dashboard />
```

---

### Sidebar Component

Displays navigation links.

Example:

- Home
- Students
- Dashboard

---

### StudentForm Component

Handles form input.

Functions:

- handleChange()
- handleSubmit()

Responsible for:

- Adding student
- Live preview

---

### StudentList Component

Responsible for rendering all students.

Uses:

```js
map()
```

Passes data to:

```jsx
<StudentCard />
```

---

### StudentCard Component

Displays individual student information.

Shows:

- Name
- Roll Number
- College
- City
- Skills
- Hobbies
- Status

Contains:

- Delete Button

---

### Footer Component

Displays footer information.

Example:

```text
Created By Lalit
```

---

## 📊 Student Object Structure

```js
{
  id: 1,
  name: "Rahul",
  rollNo: "101",
  college: "ABC College",
  city: "Delhi",
  skills: ["React", "JavaScript", "HTML"],
  hobbies: ["Cricket", "Music"],
  active: true
}
```

---

## ⚙ Core Logic Used

### Add Student

```js
setStudents([
  ...students,
  newStudent
]);
```

Uses:

- Spread Operator
- Array State Update

---

### Delete Student

```js
setStudents(
  students.filter(
    (student) => student.id !== id
  )
);
```

Uses:

- filter()

---

### Search Student

```js
students.filter((student) =>
  student.name
    .toLowerCase()
    .includes(search.toLowerCase())
);
```

Uses:

- filter()
- onChange()

---

### Display Skills

```js
student.skills.map((skill) => (
  <li>{skill}</li>
))
```

Uses:

- map()

---

### Conditional Status

```js
student.active
 ? "Active"
 : "Inactive"
```

Uses:

- Conditional Rendering

---

## 💻 Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Vite

---

## 🎯 Learning Outcomes

Through this project, practiced:

- React State Management
- Props
- Forms Handling
- Event Handling
- Conditional Rendering
- Two-Way Data Binding
- Updating Arrays and Objects in State
- Component Reusability
- Dynamic UI Rendering
- Responsive Design

---

## 🔗 GitHub Repository

Add your repository link here:

```text
https://github.com/your-github-link
```

---

## 👨‍💻 Author

Lalit Kumar Sahu

Built for React practice and understanding core React fundamentals.
