# **Role-Based Access Control (RBAC) with Secure Authentication**

## **Overview**
This project is a Node.js application that demonstrates a secure authentication system with **Role-Based Access Control (RBAC)**. Users can register, log in, and access resources based on their assigned roles (e.g., Admin, User, Moderator). The system uses **JWT (JSON Web Token)** for secure session management and enforces permissions for different roles.

---

## **Features**
- **User Authentication**:
  - Register new users with unique email addresses.
  - Secure login using hashed passwords.
  - Session management using JWT tokens.
- **Role-Based Access Control (RBAC)**:
  - Admin, Moderator, and User roles with specific access permissions.
  - Protect API endpoints based on user roles.
- **Security Best Practices**:
  - Passwords hashed using **bcrypt**.
  - Secure HTTP headers using **helmet**.
  - CORS policy enabled for controlled cross-origin requests.
- **Extensible Design**:
  - Easily add new roles and permissions as needed.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt, helmet, CORS
- **Frontend (Minimal)**: HTML, CSS, JavaScript (Fetch API for integration)

---

