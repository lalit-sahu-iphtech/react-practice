# Conditional UI with State in React

A React practice project focused on understanding **Conditional UI Rendering using State**.  
This project demonstrates how UI changes dynamically based on different conditions using React state.

---

## 📌 Project Overview

Conditional UI means changing what is displayed on the screen based on a condition.

In React, when state changes, UI updates automatically.

Example:

- Show Loading when data is fetching
- Show Login / Logout based on user status
- Show Dark Mode / Light Mode
- Show More / Show Less content

---

## 🚀 Topics Covered

- Loading State
- Login / Logout
- Toggle Components
- Conditional Rendering
- Ternary Operator
- Boolean State Management
- Dynamic UI Updates

---

## 1. Loading State

### Concept

Loading state is used when some process takes time to complete.

Examples:

- API fetching
- Form submission
- Page loading

UI changes based on loading state.

Example:

```js
loading = true
```

Show:

```text
Loading...
```

When complete:

```js
loading = false
```

Show:

```text
Data Loaded
```

### Logic Used

```js
let [loading, setLoading] = useState(false);
```

Update state:

```js
setLoading(true);
```

Conditional UI:

```js
loading ? "Loading..." : "Data Loaded"
```

---

## 2. Login / Logout

### Concept

Used to check whether user is logged in or not.

State stores:

```js
true = Logged In
false = Not Logged In
```

UI changes automatically.

Example:

```text
Login → Logout
Logout → Login
```

### Logic Used

```js
let [isLogin, setIsLogin] = useState(false);
```

Toggle state:

```js
setIsLogin(!isLogin);
```

Conditional Rendering:

```js
isLogin ? "Logout" : "Login"
```

Message:

```js
isLogin ? "Welcome User" : "Please Login"
```

---

## 3. Toggle Components

### Concept

Toggle means switching between two states.

Examples:

- Show / Hide Sidebar
- Show / Hide Password
- Open / Close Modal

State stores boolean values.

```js
true = Show
false = Hide
```

### Logic Used

```js
let [show, setShow] = useState(false);
```

Toggle:

```js
setShow(!show);
```

Conditional UI:

```js
show ? "Show Less" : "Show More"
```

---

## 4. Dark / Light Mode

### Concept

Used to change website theme dynamically.

State:

```js
true = Dark Mode
false = Light Mode
```

Changes:

- Background Color
- Text Color
- Button Text

### Logic Used

```js
let [dark, setDark] = useState(false);
```

Toggle:

```js
setDark(!dark);
```

Dynamic Styling:

```js
backgroundColor: dark ? "black" : "white"
```

Button:

```js
dark ? "Light Mode" : "Dark Mode"
```

---

## 🛠 React Concepts Used

### State Management

- useState()
- Boolean State

### Event Handling

- onClick()

### Conditional Rendering

- Ternary Operator

```js
condition ? trueValue : falseValue
```

### Dynamic UI Update

UI changes automatically when state updates.

---

## 📂 Practice Projects Built

### 1. Loading Button

Features:

- Click button
- Show Loading...
- After delay show Data Loaded

---

### 2. Login Button

Features:

- Login Button
- Logout Button
- Welcome Message
- Toggle Login State

---

### 3. Show More / Show Less

Features:

- Short Text
- Full Text
- Toggle Content Visibility

---

### 4. Dark / Light Mode

Features:

- Change Theme
- Toggle Background Color
- Toggle Text Color
- Switch Button Text

---

## ⚙ Core Logic Examples

### Toggle Boolean State

```js
setState(!state);
```

---

### Conditional Rendering

```js
state ? "True UI" : "False UI"
```

---

### Show Element Conditionally

```js
state && <Component />
```

---

## 💻 Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Vite

---

## 🎯 Learning Outcomes

Practiced:

- Conditional Rendering in React
- Dynamic UI Updates using State
- Boolean State Management
- Theme Switching
- Loading State Handling
- Login / Logout Logic
- Toggle UI Components

---

## 🔗 GitHub Repository

Add your project link here:

```text
https://github.com/lalit-sahu-iphtech/react-practice/tree/main/Conditional-UI
```

---

## 👨‍💻 Author

Lalit Kumar Sahu

Built for practicing React State and Conditional UI concepts.
