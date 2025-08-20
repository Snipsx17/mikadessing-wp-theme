import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-amber-800 shadow-lg sticky top-0 z-50">
      <button
        className=" bg-amber-400 text-amber-950 text-2xl"
        onClick={toggleMenu}
      >
        click me!
      </button>

      {isOpen && (
        <ul className="flex flex-col items-center justify-center">
          <li className="text-amber-300 text-2xl">Homeee</li>
          <li className="text-amber-300 text-2xl">About</li>
          <li className="text-amber-300 text-2xl">Contact</li>
        </ul>
      )}
    </nav>
  );
};