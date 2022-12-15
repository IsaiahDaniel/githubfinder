import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className='flex-none px-2 mx-2'>
          <AiFillGithub className='inline pr-2 text-4xl' />
          <Link className='align-middle font-bold text-lg'>GithubFinder</Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to="/about" className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;