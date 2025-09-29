import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-blue-400">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold mb-2">Custom ROM Project 1</h4>
          <p className="text-gray-400">Description of the first ROM project.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold mb-2">Custom ROM Project 2</h4>
          <p className="text-gray-400">Description of the second ROM project.</p>
        </div>
      </div>
    </section>
  )
}
