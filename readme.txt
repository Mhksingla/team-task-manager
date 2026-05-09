TEAM TASK MANAGER - FULL STACK PROJECT

Project Description:
This is a full-stack Team Task Manager web application where users can create projects, assign tasks, and track project progress with role-based access control.

Features:

* User Authentication (Signup/Login)
* Role-Based Access Control (Admin/Member)
* Project Management
* Task Creation & Assignment
* Task Status Tracking
* Dashboard with Task Statistics
* Overdue Task Tracking

Tech Stack:

Frontend:

* React.js
* Axios

Backend:

* Node.js
* Express.js

Database:

* MongoDB Atlas

Authentication:

* JWT Authentication

Deployment:

* Backend: Railway
* Frontend: Vercel

Project Structure:

team-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── services/
│   └── App.jsx

Installation Steps:

1. Clone Repository
   git clone YOUR_GITHUB_REPOSITORY_LINK

2. Install Backend Dependencies
   cd backend
   npm install

3. Install Frontend Dependencies
   cd frontend
   npm install

4. Setup Environment Variables

Backend .env:
MONGO_URI=your_mongodb_uri
JWT_SECRET=mysecretkey
PORT=5000

5. Run Backend
   npm run dev

6. Run Frontend
   npm run dev

API Endpoints:

Authentication:
POST /api/auth/signup
POST /api/auth/login

Projects:
POST /api/projects
GET /api/projects

Tasks:
POST /api/tasks
GET /api/tasks
PUT /api/tasks/:id

Dashboard:
GET /api/dashboard

Roles:
Admin:

* Create Projects
* Create Tasks
* Assign Tasks

Member:

* View Tasks
* Update Task Status

Live Application:
https://team-task-manager-neon-beta.vercel.app/

GitHub Repository:
https://github.com/Mhksingla/team-task-manager

Author:
Mehak
