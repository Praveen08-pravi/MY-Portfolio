🌐 Personal Portfolio Website (Full Stack)

A full-stack personal portfolio website built using React (Vite) for the frontend and Node.js + Express for the backend. It includes a contact form with MongoDB storage and Email notification support.

🚀 Features
🎨 Frontend
Built with React (Vite)
Responsive portfolio design
Smooth scrolling navigation
Sections:
Home
About
Education
Skills
Projects
Contact
Mobile-friendly navbar with toggle menu
Active section highlight on scroll
Resume download button
⚙️ Backend
Node.js + Express server
REST API for contact form
MongoDB integration (stores messages)
Email notifications using Nodemailer
CORS enabled for frontend communication
Environment-based configuration (.env)
🛠️ Tech Stack
Frontend
React (Vite)
JavaScript (ES6+)
HTML5
CSS3
React Scroll
React Icons
Backend
Node.js
Express.js
MongoDB
Mongoose
Nodemailer
CORS
dotenv
📁 Project Structure
portfolio/
│
├── frontend/
│   ├── public/
│   │   └── resume/
│   │       └── Praveen_U_Resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
⚙️ Backend Setup
1. Install dependencies
cd backend
npm install
2. Create .env file
MONGO_URI=your_mongodb_uri

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORTFOLIO_EMAIL=receiver_email@gmail.com

PORT=5000
NODE_ENV=development
3. Run backend (development)
npm run dev

Server runs at:

http://localhost:5000
🌐 Frontend Setup (Vite)
1. Install dependencies
cd frontend
npm install
2. Run frontend
npm run dev

Frontend runs at:

http://localhost:5173
📩 Contact Form (API)
Endpoint
POST /api/contact
Example Request
{
  "name": "Praveen",
  "email": "example@gmail.com",
  "message": "Hello!"
}
What happens:
Message is saved in MongoDB
Email notification is sent using Nodemailer
📄 Resume Feature

Place resume here:

frontend/public/resume/Praveen_U_Resume.pdf

Download button:

<a
  href="/resume/Praveen_U_Resume.pdf"
  download
  className="btn"
>
  Download Resume
</a>
🔐 Environment Variables
Variable	Purpose
MONGO_URI	MongoDB database connection
EMAIL_USER	Sender email
EMAIL_PASS	Email app password
PORTFOLIO_EMAIL	Receiver email
PORT	Backend port
NODE_ENV	Development/Production
📬 Contact
Email: your-email@example.com
LinkedIn: https://linkedin.com/in/your-profile
GitHub: https://github.com/your-username
⭐ Project Summary

This is a full-stack portfolio project with:

Modern React frontend (Vite)
Node + Express backend
MongoDB database integration
Email notification system
Contact form API
Resume download feature
Responsive UI design
