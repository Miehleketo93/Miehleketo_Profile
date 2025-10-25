import React from 'react'
import { PRIMARY, PRIMARY_DARK, SECONDARY, SECONDARY_DARK } from '../constants/Colors'

function Footer({ darkMode }) {
const accent = darkMode ? SECONDARY_DARK : SECONDARY

return (
<footer
className={`text-center text-sm mt-12 pb-8 transition-colors ${
        darkMode ? 'text-gray-400 bg-gray-900' : 'text-gray-600 bg-gray-50'
      }`}
> <p>
© {new Date().getFullYear()} <span style={{ color: accent }}>Miehleketo Mathebula</span> · Based in Pretoria, South Africa </p> </footer>
)
}

export default Footer
