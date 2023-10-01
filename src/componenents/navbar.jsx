import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes que vous souhaitez utiliser
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const Menus = [
    { icon: faHome },
    { icon: faUser },
    { icon: faEnvelope },
  ];

  const [active, setActive] = useState(0);

  return (
    <nav className="bg-blue-400 text-white w-full h-[9%] fixed top-0 left-0 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo1} alt="Logo" className="h-[20%] w-[20%] mt-4" />
        <span className="text-lg font-semibold">.Dev</span>
      </div>

      <ul className="flex relative space-x-8 items-center">
        {Menus.map((menu, i) => (
          <li key={i}>
            <a
              className={`relative text-center pt-4 ${
                i === active ? 'text-yellow-300 ' : 'text-white'
              } mr-4`}
              onClick={() => setActive(i)}
            >
              <FontAwesomeIcon
                icon={menu.icon}
                size="lg"
                className={`icon-transition ${i === active ? 'icon-active' : ''}`}
              />
            </a>
          </li>
        ))}
      </ul>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transform transition-transform hover:scale-105">
        Télécharger CV
      </button>
    </nav>
  );
};

export default Navbar;
