# 🏥 Hospital Management System

A modern, full-stack **Hospital Management System (HMS)** designed to digitize and simplify hospital operations. The platform provides dedicated functionality for administrators, doctors, nurses, receptionists, and patients to efficiently manage healthcare services, appointments, medical records, billing, and hospital resources.

---

## 📌 Overview

The **Hospital Management System** is a web-based application that helps hospitals manage their daily activities through a centralized digital platform.

The system is designed to provide:

- 👨‍⚕️ Doctor Management
- 🧑‍⚕️ Patient Management
- 📅 Appointment Scheduling
- 🏥 Department Management
- 💊 Prescription Management
- 📋 Medical Records
- 💰 Billing & Payments
- 🛏️ Bed & Room Management
- 🧪 Laboratory Management
- 📦 Pharmacy Management
- 👩‍⚕️ Staff Management
- 📊 Hospital Dashboard & Analytics
- 🔐 Role-Based Authentication
- 🌓 Dark & Light Mode
- 📱 Responsive Design

---

# ✨ Features

## 🔐 Authentication & Authorization

- Secure user registration and login
- JWT-based authentication
- Role-based access control
- Password encryption
- Forgot/reset password
- Protected routes
- Session management

### Supported Roles

| Role | Access |
|------|--------|
| 👑 Admin | Complete system management |
| 👨‍⚕️ Doctor | Patients, appointments & medical records |
| 👩‍⚕️ Nurse | Patient care & assigned tasks |
| 🧑‍💼 Receptionist | Registration & appointments |
| 🧪 Lab Staff | Laboratory tests & reports |
| 💊 Pharmacist | Medicines & prescriptions |
| 🧑 Patient | Appointments & medical information |

---

# 👑 Admin Dashboard

Administrators can manage the entire hospital through a centralized dashboard.

### Admin Features

- Dashboard statistics
- Manage doctors
- Manage patients
- Manage nurses
- Manage staff
- Manage departments
- Manage rooms
- Manage beds
- Manage appointments
- Manage medicines
- Manage laboratory tests
- Manage billing
- Manage hospital settings
- View reports and analytics

---

# 👨‍⚕️ Doctor Module

Doctors can manage their patients and clinical activities.

### Features

- Doctor dashboard
- View appointments
- Accept/reject appointments
- View patient profiles
- View medical history
- Add diagnosis
- Add treatment plans
- Create prescriptions
- Upload medical documents
- View laboratory reports
- Manage availability
- Patient follow-up

---

# 🧑 Patient Module

Patients can access their healthcare information from their personal dashboard.

### Features

- Patient registration
- Patient dashboard
- Search doctors
- View doctor profiles
- Book appointments
- Cancel appointments
- View appointment history
- View prescriptions
- View medical records
- View laboratory reports
- View bills
- Download invoices
- Manage profile

---

# 📅 Appointment Management

The appointment module allows hospital staff, doctors, and patients to efficiently manage appointments.

### Features

- Book appointment
- Reschedule appointment
- Cancel appointment
- Doctor availability
- Appointment status
- Appointment history
- Daily appointment schedule
- Automated appointment notifications

### Appointment Status

```text
Pending
Confirmed
Completed
Cancelled
Rescheduled
```

---

# 🏥 Department Management

Hospital departments can be created and managed through the admin panel.

Example departments:

- Cardiology
- Neurology
- Orthopedics
- Pediatrics
- Dermatology
- Gynecology
- General Medicine
- Emergency
- Radiology
- Pathology
- Dentistry

---

# 🛏️ Bed & Room Management

Manage hospital rooms and beds digitally.

### Features

- Add rooms
- Add beds
- Assign beds to patients
- Track available beds
- Track occupied beds
- Room categories
- ICU management
- Emergency beds
- Bed transfer management

### Bed Status

```text
Available
Occupied
Reserved
Under Maintenance
```

---

# 💊 Pharmacy Management

The pharmacy module manages medicines and prescriptions.

### Features

- Medicine inventory
- Add/update medicines
- Medicine categories
- Stock management
- Expiry tracking
- Prescription processing
- Low-stock alerts
- Medicine search
- Supplier management

---

# 🧪 Laboratory Management

Manage laboratory tests and medical reports.

### Features

- Create laboratory tests
- Assign tests to patients
- Track test status
- Upload test reports
- View test history
- Doctor report access
- Patient report access

### Test Status

```text
Requested
Sample Collected
Processing
Completed
Cancelled
```

---

# 💰 Billing & Payment

The billing system manages patient invoices and hospital payments.

### Features

- Generate invoices
- Consultation charges
- Room charges
- Laboratory charges
- Pharmacy charges
- Treatment charges
- Payment tracking
- Invoice history
- Printable invoices

### Payment Status

```text
Pending
Paid
Partially Paid
Refunded
```

---

# 📊 Dashboard & Analytics

The system provides real-time hospital statistics.

### Dashboard Metrics

- Total patients
- Total doctors
- Today's appointments
- Available beds
- Occupied beds
- Pending appointments
- Monthly revenue
- Pharmacy stock
- Laboratory tests
- Emergency cases

---

# 🔔 Notifications

The system can provide notifications for:

- New appointments
- Appointment confirmations
- Appointment cancellations
- Prescription updates
- Laboratory reports
- Payment reminders
- Low medicine stock
- Bed availability

---

# 🌓 Dark & Light Theme

The application supports both:

- ☀️ Light Mode
- 🌙 Dark Mode

Users can switch between themes according to their preference.

---

# 🛠️ Technology Stack

## Frontend

```text
React.js
JavaScript / TypeScript
HTML5
CSS3
Tailwind CSS / Bootstrap
React Router
Axios
Chart.js / Recharts
```

## Backend

```text
Node.js
Express.js
REST API
JWT Authentication
bcrypt
Multer
```

## Database

```text
MongoDB
Mongoose
```

## Development Tools

```text
Git
GitHub
VS Code
Postman
npm
```

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Frontend       │
                    │      React.js       │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Backend       │
                    │   Node + Express    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Database       │
                    │      MongoDB        │
                    └─────────────────────┘
```

---

# 📁 Project Structure

```text
Hospital-Management-System/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── services/
│       ├── hooks/
│       ├── context/
│       ├── utils/
│       ├── routes/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── database/
│   ├── schemas/
│   ├── seed/
│   └── README.md
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# 🗄️ Database Collections

The system can contain the following collections:

```text
users
patients
doctors
nurses
staff
departments
appointments
medical_records
prescriptions
medicines
laboratory_tests
laboratory_reports
rooms
beds
admissions
discharges
invoices
payments
notifications
```

---

# 🔗 API Modules

Example REST API structure:

```text
/api/auth
/api/users
/api/patients
/api/doctors
/api/nurses
/api/staff
/api/departments
/api/appointments
/api/medical-records
/api/prescriptions
/api/medicines
/api/laboratory
/api/rooms
/api/beds
/api/admissions
/api/billing
/api/payments
/api/notifications
```

---

# 🚀 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/hospital-management-system.git
```

## 2. Navigate to the Project

```bash
cd hospital-management-system
```

---

## 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run the Application

### Start Backend

```bash
cd backend
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🧪 Testing

API testing can be performed using:

- Postman
- Thunder Client
- REST Client

Example:

```text
GET     /api/patients
POST    /api/patients
GET     /api/patients/:id
PUT     /api/patients/:id
DELETE  /api/patients/:id
```

---

# 🔒 Security

The system follows common security practices including:

- JWT authentication
- Password hashing
- Role-based authorization
- Protected API routes
- Input validation
- Secure environment variables
- CORS configuration
- Error handling
- File upload validation

> **Important:** This project is intended for software-development/educational purposes. A production healthcare deployment requires appropriate security, privacy, regulatory, audit, backup, and access-control measures.

---

# 📱 Responsive Design

The application is designed to work across:

```text
💻 Desktop
💻 Laptop
📱 Tablet
📱 Mobile
```

---

# 🌐 Deployment

Possible deployment platforms include:

### Frontend

```text
Vercel
Netlify
GitHub Pages
```

### Backend

```text
Render
Railway
AWS
Azure
```

### Database

```text
MongoDB Atlas
```

---

# 🔮 Future Improvements

Planned features may include:

- 🤖 AI healthcare assistant
- 📹 Telemedicine / video consultation
- 📧 Email notifications
- 📱 SMS notifications
- 💳 Online payment gateway
- 📄 Digital prescriptions
- 📊 Advanced analytics
- 🧠 AI-assisted medical insights
- 🩺 IoT device integration
- 🏥 Multi-hospital support
- 🌍 Multi-language support
- 📲 Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions are welcome!

### Steps

```bash
# Fork the repository

# Clone your fork
git clone <your-repository-url>

# Create a new branch
git checkout -b feature/new-feature

# Make your changes

# Commit
git add .
git commit -m "Add new feature"

# Push
git push origin feature/new-feature
```

Then create a Pull Request.

---

# 👨‍💻 Developer

**Hospital Management System**

Built as a full-stack web application for managing modern hospital operations.

---

# ⭐ Support

If you find this project useful:

⭐ Star the repository  
🍴 Fork the repository  
🐛 Report issues  
💡 Suggest improvements  
🤝 Contribute to the project

---

## 📌 Project Status

```text
🚧 Development
```

The project is actively being developed with additional hospital-management modules and improvements planned.
