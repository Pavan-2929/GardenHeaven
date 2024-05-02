import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between px-24 items-center h-[10vh] ">
      <div className="w-auto">
        <p className="font-bold text-3xl">
          <span className="text-green">GARDEN</span>
          <span className="text-slate">HEAVEN</span>
        </p>
        <p className="text-green font-semibold text-right">Your Green Home</p>
      </div>
      <div>
        <ul className="flex gap-10 items-center font-bold text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallary</li>
          <li>FAQ</li>
          <li>Shortcodes</li>
          <li>shop</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header
