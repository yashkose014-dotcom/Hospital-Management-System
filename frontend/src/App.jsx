import { Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AboutPage, AppointmentPage, ContactPage, DoctorsPage, NotFoundPage, ServicesPage } from './pages/public/InfoPages'
import { DashboardHome, DashboardSection } from './pages/dashboards/DashboardPages'
export default function App(){return <Routes><Route element={<PublicLayout/>}><Route path="/" element={<HomePage/>}/><Route path="about" element={<AboutPage/>}/><Route path="services" element={<ServicesPage/>}/><Route path="doctors" element={<DoctorsPage/>}/><Route path="appointments" element={<AppointmentPage/>}/><Route path="contact" element={<ContactPage/>}/></Route><Route path="login" element={<LoginPage/>}/><Route path="register" element={<RegisterPage/>}/><Route path="dashboard/:role" element={<DashboardLayout/>}><Route index element={<DashboardHome/>}/><Route path=":section" element={<DashboardSection/>}/></Route><Route path="*" element={<NotFoundPage/>}/></Routes>}
