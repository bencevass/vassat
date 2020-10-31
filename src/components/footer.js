import React from "react"

export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">© {new Date().getFullYear()}</div>
    </footer>
  )
}


