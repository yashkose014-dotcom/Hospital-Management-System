CREATE DATABASE IF NOT EXISTS medicare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE medicare_db;

CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('ADMIN','DOCTOR','RECEPTIONIST','PATIENT') NOT NULL,
  phone VARCHAR(30),
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE departments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE doctors (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL UNIQUE,
  department_id BIGINT,
  specialization VARCHAR(120) NOT NULL,
  license_number VARCHAR(80) NOT NULL UNIQUE,
  consultation_fee DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE patients (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT UNIQUE,
  patient_code VARCHAR(30) NOT NULL UNIQUE,
  date_of_birth DATE,
  gender VARCHAR(20),
  blood_group VARCHAR(8),
  address TEXT,
  emergency_contact_name VARCHAR(120),
  emergency_contact_phone VARCHAR(30),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE appointments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  patient_id BIGINT NOT NULL,
  doctor_id BIGINT NOT NULL,
  appointment_at DATETIME NOT NULL,
  status ENUM('PENDING','CONFIRMED','COMPLETED','CANCELLED','NO_SHOW') NOT NULL DEFAULT 'PENDING',
  reason VARCHAR(500),
  notes TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id),
  INDEX idx_appointment_doctor_time (doctor_id, appointment_at),
  INDEX idx_appointment_patient_time (patient_id, appointment_at)
);

CREATE TABLE medical_records (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  patient_id BIGINT NOT NULL,
  doctor_id BIGINT NOT NULL,
  appointment_id BIGINT,
  diagnosis TEXT,
  treatment TEXT,
  record_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id),
  FOREIGN KEY (appointment_id) REFERENCES appointments(id)
);

CREATE TABLE prescriptions (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  medical_record_id BIGINT NOT NULL,
  medicine_name VARCHAR(180) NOT NULL,
  dosage VARCHAR(120),
  frequency VARCHAR(120),
  duration VARCHAR(120),
  instructions TEXT,
  FOREIGN KEY (medical_record_id) REFERENCES medical_records(id)
);

CREATE TABLE rooms (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  room_number VARCHAR(30) NOT NULL UNIQUE,
  room_type VARCHAR(60) NOT NULL,
  status ENUM('AVAILABLE','OCCUPIED','CLEANING','MAINTENANCE') NOT NULL DEFAULT 'AVAILABLE',
  daily_rate DECIMAL(10,2)
);

CREATE TABLE invoices (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  patient_id BIGINT NOT NULL,
  invoice_number VARCHAR(40) NOT NULL UNIQUE,
  total_amount DECIMAL(12,2) NOT NULL,
  amount_paid DECIMAL(12,2) NOT NULL DEFAULT 0,
  status ENUM('DRAFT','ISSUED','PARTIALLY_PAID','PAID','VOID') NOT NULL DEFAULT 'DRAFT',
  issued_at DATETIME,
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);

