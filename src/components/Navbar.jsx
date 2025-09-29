import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-400">My Custom ROMs</h1>
      <ul className="flex gap-4">
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#releases" className="hover:text-blue-400">Releases</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
      </ul>
    </nav>
  )
}
