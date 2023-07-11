'use client';
import { useState } from 'react'
import Image from 'next/image'


const NavBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()    
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className='w-8 h-8 rounded-full overflow-hidden'>
        <Image
          src="/images/Profile Image.jpg"
          alt="Company logo"
          width={50}
          height={50}
        />
        </div>
        <span className="ml-2 text-lg text-black font-bold">Odaplace</span>
      </div>

      <div className="relative w-full ml-5 mr-10">
        <select className="absolute top-2 left-2 pointer-events-none">
          <option value="us">New York</option>
          <option value="ca">CA</option>
        </select>

        <form onSubmit={handleSearch} className="flex w-full">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-2 pl-28 w-full rounded-2xl bg-slate-100"
            placeholder="Search"
          />
          <button type="submit" className="absolute top-0 right-0 px-4 py-2 bg-orange-400 rounded-2xl text-white">🔍 Search</button>
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/images/usa.png"
              alt="Country flag"
              layout="relative"
              width={50}
              height={50}
              objectFit="cover"
            />
          </div>
          <select className="ml-2 rounded">
            <option value="us">US</option>
            <option value="ca">CA</option>
          </select>
        </div>
        <span role="img" aria-label="cart">🛒</span>
        <span role="img" aria-label="notification">🔔</span>
        <span role="img" aria-label="message">💬</span>
        <div className="border-l border-gray-600 h-6 mx-4"></div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/images/Profile Image.jpg"
            alt="User profile"
            width={50}
            height={50}
            layout="relative"
            objectFit="cover"
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
