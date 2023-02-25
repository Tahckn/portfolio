import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            {' '}
            <h1 className="logom font-bold font-secondary uppercase -mb-3 text-5xl">
              Taha
            </h1>{' '}
            <span className="text-white font-secondary font-bold text-5xl">
              ÇEKEN
            </span>{' '}
          </a>

          <Link
            to="contact"
            smooth={true}
            spy={true}
            className="btn btn-sm cursor-pointer justify-center items-center flex"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
