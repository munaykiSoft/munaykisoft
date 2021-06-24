import React, { createRef, useState } from 'react'
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { NavLink } from './NavLink';
import cuy from '../../assets/images/cuy.png';


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = createRef();

    return (
        <nav className="bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {/* <img
                                className="h-8 w-8"
                                src="/assets/images/ico01.png"
                                alt="Cuy"
                            /> */}
                            {/* <Image
                                src="/assets/images/ico01.png"
                                width={45}
                                height={45}
                                alt="Cuy"
                            /> */}
                            <Image
                                src={cuy}
                                width={45}
                                height={45}
                                alt="Cuy"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink href="/" exact className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                                    Inicio
                                </NavLink>
                                <NavLink href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                                    Nosotros
                                </NavLink>
                                <NavLink href="/service" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                                    Servicios
                                </NavLink>
                                <NavLink href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                                    Contactanos
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                                </svg>
                                // <svg
                                //     className="block h-6 w-6"
                                //     xmlns="http://www.w3.org/2000/svg"
                                //     fill="none"
                                //     viewBox="0 0 24 24"
                                //     stroke="currentColor"
                                //     aria-hidden="true"
                                // >
                                //     <path
                                //         strokeLinecap="round"
                                //         strokeLinejoin="round"
                                //         strokeWidth="2"
                                //         d="M4 6h16M4 12h16M4 18h16"
                                //     />
                                // </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Team
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Projects
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Calendar
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Reports
                            </a>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

