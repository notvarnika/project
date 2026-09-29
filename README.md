# OngoingFullStack

A full-stack enterprise web application featuring a **Spring Boot** REST API backend and a dynamic **React (Vite)** single-page frontend.

---

## 🏗️ Project Architecture & Structure

project/
├── frontend/ # React SPA (Vite, JS/JSX)
│ ├── src/ # React components, hooks, and UI assets
│ ├── public/ # Static public assets
│ ├── package.json # NPM dependencies and scripts
│ └── vite.config.js # Vite bundling and dev-server configuration
│
└── backend/ # Spring Boot REST API
├── src/
│ ├── main/java/com/newco2/newcon2/
│ │ ├── Controller/ # REST API endpoint handlers
│ │ ├── Service/ # Business logic layer
│ │ ├── Repo/ # Data access repositories
│ │ ├── Model/ # JPA entities / database models
│ │ └── DTO/ # Data transfer objects (OneDTO, UserDTO, etc.)
│ └── main/resources/ # Application properties & static assets
└── pom.xml # Maven project configuration

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following tools installed locally:

- **Java Development Kit (JDK)**: 17 or higher
- **Apache Maven**: 3.8+ (or use the included `./mvnw` wrapper)
- **Node.js**: v18.x or higher
- **NPM**: v9.x or higher

---

### 🔧 1. Backend Setup (Spring Boot)

1. **Navigate to the backend directory:**
   ```bash
   cd project/backend
   Configure Database & Environment:
   Update your database credentials and configurations in src/main/resources/application.properties.
   ```

Build the Application:

Bash
./mvnw clean install
Run the Application:

Bash
./mvnw spring-boot:run
The backend server will launch by default at http://localhost:8083.

💻 2. Frontend Setup (React / Vite)
Navigate to the frontend directory:

Bash
cd project/frontend
Install Dependencies:

Bash
npm install
Start Development Server:

Bash
npm run dev
The development frontend server will start (typically at http://localhost:5173).

Build for Production:

Bash
npm run build
🌐 Tech Stack
Frontend:

React.js

Vite

ESLint

react-cookie

Backend:

Java / Spring Boot

Spring Data JPA

Apache Maven
