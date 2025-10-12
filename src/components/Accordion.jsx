import React, { useState } from 'react'

export default function Accordion({ items = [], defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const open = idx === openIndex
        return (
          <div key={idx} className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="w-full text-left px-4 py-3 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-500">{it.subtitle}</div>
              </div>
              <div className="text-gray-400">{open ? '▲' : '▼'}</div>
            </button>

            {open && (
              <div className="px-4 pb-4 text-gray-700">
                <ul className="list-disc pl-5 space-y-2">
                  {it.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
