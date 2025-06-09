'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check local storage or system preference
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="py-2 md:mt-0 mt-4 rounded-full outline-none transition-opacity duration-100  hover:opacity-70 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="h-4 w-4 text-zinc-900 dark:text-zinc-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
      </svg>
    </button>
  )
}
