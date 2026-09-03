import { HeartPulse, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Doctors', '/doctors'], ['Contact', '/contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur"><nav className="container-page flex h-[72px] items-center justify-between py-3">
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-brand-900"><span className="rounded-lg bg-brand-600 p-2 text-white"><HeartPulse size={20}/></span>MediCare</Link>
    <div className="hidden items-center gap-5 md:flex">{links.map(([label, url]) => <NavLink key={url} to={url} className={({isActive}) => `text-sm font-medium ${isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}>{label}</NavLink>)}<ThemeToggle/><Link to="/login" className="text-sm font-semibold text-brand-600">Login</Link><Link to="/appointments" className="btn-primary px-4 py-2 text-sm">Book appointment</Link></div>
    <div className="flex items-center gap-2 md:hidden"><ThemeToggle/><button onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div>
  </nav>{open && <div className="border-t bg-white px-6 py-4 md:hidden">{links.map(([label,url]) => <Link onClick={() => setOpen(false)} className="block py-2 font-medium" key={url} to={url}>{label}</Link>)}<Link className="block py-2 font-medium text-brand-600" to="/login">Login</Link></div>}</header>
}
