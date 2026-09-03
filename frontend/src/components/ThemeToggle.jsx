import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('medicare-theme') === 'dark')
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('medicare-theme', dark ? 'dark' : 'light') }, [dark])
  return <button type="button" onClick={() => setDark(!dark)} className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800" aria-label="Toggle colour theme">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
}
