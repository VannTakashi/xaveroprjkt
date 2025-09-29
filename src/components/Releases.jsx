import React from 'react'

export default function Releases() {
  return (
    <section id="releases" className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-blue-400">Releases</h3>
      <div className="space-y-4">
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold mb-2">ROM Release v1.0</h4>
          <p className="text-gray-400">First stable release for device XYZ.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold mb-2">ROM Release v1.1</h4>
          <p className="text-gray-400">Bug fixes and improvements.</p>
        </div>
      </div>
    </section>
  )
}
