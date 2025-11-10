import React from 'react'
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
        <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p className="mb-2">Follow us on</p>
        <div className='x'>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-3">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-3">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white mx-3">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
        <p className="mt-3 mb-0">&copy; 2025 pedrotechpizza.com</p>
      </Container>
    </footer>
     
    </div>
  )
}
