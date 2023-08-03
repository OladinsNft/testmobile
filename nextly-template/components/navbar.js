import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState } from 'react';

const Navbar = () => {
  const navigation = [
    
    "Twitter",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };
  const buttons = [
    { name: 'About', href: '/about' },
    
    { name: 'Mint', href: 'https://injective.talis.art/' },
    { name: 'Game', href: '/' },
  ];
  const [isHovered, setIsHovered] = useState(false);

  
  
  const mintMouseEnter = () => {
    setIsHovered(true);
  };

  const mintMouseLeave = () => {
    setIsHovered(false);
  };
  const mints = [
    { name: 'About', href: '/' },
    
  ];
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      
                    </span>
                    <Image src="/img/logo-export (1).png" width={250} height={50}/>
                    
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                  {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className='text-white  py-2 px-4 rounded-full">'
          style={{
            margin: '0 8px',
            padding: '10px 30px',
            background: `linear-gradient(135deg, ${hoveredIndex === index ?'#e79b6b' : '#e79b6b' }, ${hoveredIndex === index ? '#e79b6b' : '#ffb975'})`,
            color: hoveredIndex === index ? 'black' : 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '25px',
            lineHeight: '0.75',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            
            
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {button.name}
        </a>
        
      ))}
                    
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center ">
          
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
        {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className='class=" text-white  py-2 px-4 rounded-full">'
          style={{
            margin: '0 8px',
            padding: '10px 30px',
            background: `linear-gradient(135deg, ${hoveredIndex === index ?'#e79b6b' : '#e79b6b' }, ${hoveredIndex === index ? '#e79b6b' : '#ffb975'})`,
            color: hoveredIndex === index ? 'black' : 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '25px',
            lineHeight: '0.75',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            
            
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {button.name}
        </a>
        
      ))}
          </ul>
          

         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
