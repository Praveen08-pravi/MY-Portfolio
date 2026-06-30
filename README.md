
# Praveen U - Portfolio

A modern, full-stack portfolio website built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Responsive Design**: Mobile-friendly portfolio with smooth animations
- **Contact Form**: Integrated contact form with email notifications
- **Smooth Scrolling**: React-scroll navigation between sections
- **Progress Bar**: Scroll progress indicator
- **Scroll-to-Top**: Floating button for quick navigation
- **Dark Theme**: Modern dark mode UI with CSS variables
- **Project Showcase**: Display of featured projects
- **Skills & Experience**: Detailed sections for skills and professional experience
- **Education Timeline**: Educational background visualization

## 📁 Project Structure

```
praveen-portfolio/
│
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── data/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Node.js backend
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **React Type Animation** - Text animation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Server framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **CORS** - Cross-origin handling

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb://localhost:27017/praveen-portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORTFOLIO_EMAIL=your-email@gmail.com
PORT=5000
NODE_ENV=development
```

```bash
npm run dev
```

## 🚀 Running the Project

### Development

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

### Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm start
```

## 📬 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contact/:id` - Get specific contact

## 🎨 Customization

### CSS Variables
Edit `frontend/src/styles/variables.css` to customize colors:

```css
:root {
  --primary: #8b5cf6;
  --bg: #050816;
  --section: #0f172a;
  --card: rgba(255,255,255,0.05);
  --text: white;
  --secondary: #cbd5e1;
  --border: 1px solid rgba(255,255,255,0.08);
  --shadow: 0 10px 25px rgba(139,92,246,0.4);
}
```

## 📝 Content Updates

### Update Portfolio Data
Edit files in `frontend/src/data/`:
- `portfolioData.js` - Main portfolio info
- `projects.js` - Project details
- `skills.js` - Skills list
- `education.js` - Education history
- `certificates.js` - Certificates

## 🔐 Environment Variables

### Backend (.env)
- `MONGO_URI` - MongoDB connection string
- `EMAIL_SERVICE` - Email service provider
- `EMAIL_USER` - Email account for sending
- `EMAIL_PASSWORD` - Email account password
- `PORTFOLIO_EMAIL` - Your portfolio email
- `PORT` - Server port
- `NODE_ENV` - Environment (development/production)

## 🤝 Contact

- **Email**: praveenupraveenu98@gmail.com
- **GitHub**: https://github.com/Praveen08-pravi
- **LinkedIn**: https://www.linkedin.com/in/praveen-u-110820352

## 📄 License

This project is open source and available under the ISC License.

---

**Made with ❤️ by Praveen U**
