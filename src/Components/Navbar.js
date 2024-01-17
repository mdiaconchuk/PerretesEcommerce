import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    let ToggleFunction = () => {
        let Navlinks = document.getElementById("Navlinks");

        Navlinks.classList.toggle('hidden');
    }

    const [darkMode, setDarkMode] = useState(false);

    let ToggleTheme = () => {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add('dark');
            localStorage.setItem('Theme', 'dark')
        }
        else if (darkMode === false) {
            document.body.classList.remove('dark');
            localStorage.setItem('Theme', 'light')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('Theme') === 'dark') { document.body.classList.add('dark') }
        else if (localStorage.getItem('Theme') == 'light') { document.body.classList.remove('dark') }

    }, []);

    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap p-6 lg:flow-root py-2 lg:pt-0 lg:py-4 relative bg-slate-100 dark:bg-darkBg dark:text-slate-100 align-center">
                {/* LOGO */}
                <div class="flex items-center flex-shrink-0 relative h-10 lg:h-14 w-full">
                    <img class="fill-current size-12 md:size-16 lg:size-16" src="../specificimg/navbarlight.png" />

                    <Link to="/"><span class="font-semibold text-xl block dark:text-slate-200 ml-3">Perretes</span></Link>

                    <div class="container">
                        <input type="text" id="search-navbar" class="hidden lg:block lg:relative mx-auto w-7/12 h-10 ps-4 bg-slate-100 text-black text-base border border-slate-500 focus:outline focus:outline-offset-0 outline-gray-950 rounded-sm dark:text-slate-100 dark:bg-darkBg dark:border-1" placeholder="Busca algo..."></input>
                    </div>
                    {/* <button class="mr-0 text-2xl text-sky-700 hidden lg:flex" onClick={() => ToggleTheme()}><i class="fa-solid fa-moon"></i></button> */}


                    {/* LOGO */}

                    {/* TOGGLER */}
                    <div class="flex lg:hidden">
                        <button id='TogglerButton' onClick={() => ToggleFunction()} class="flex">
                            <i class="fa-solid fa-bars text-lg mt-2"></i>
                        </button>
                    </div>
                </div>
                {/* TOGGLER */}

                {/* NAVLINKS */}
                <div class="w-full flex justify-center lg:flex lg:items-center lg:h-6 pt-1 dark:text-slate-300 text-gray-600">
                    <div class="hidden lg:block md:block md:w-auto lg:pl-2" id='Navlinks'>
                        <div class="lg:text-xl lg:flex-grow font-medium md:text-2xl text-xl">
                            <Link to="/" class="transition duration-300 ease-in-out  hover:text-blue-600 dark:hover:text-blue-200 block pt-4 pb-0 lg:inline-block lg:mt-0 mr-4 lg:hover:border-b-2 hover:border-indigo-300">
                                Inicio
                            </Link>
                            <Link to="/contacto" class="transition duration-300 ease-in-out  hover:text-blue-600 dark:hover:text-blue-200 block pt-4 pb-3 lg:pb-0 lg:inline-block lg:mt-0 mr-4 lg:hover:border-b-2 hover:border-indigo-300">
                                Contacto
                            </Link>
                            <Link to="/carrito" class="hidden transition duration-300 ease-in-out  hover:text-teal-600 dark:hover:text-teal-600 pt-4 pb-0 lg:inline-block lg:mt-0 mr-4 mb-2">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Link>

                            {darkMode === true ? <button class="transition duration-300 ease-in-out hover:text-amber-500 mr-0 text-2xl  hidden lg:inline-flex" onClick={() => ToggleTheme()}><i class="fa-solid fa-moon"></i></button> :
                                <button class="transition duration-300 ease-in-out hover:text-yellow-400  mr-0 text-2xl hidden lg:inline-flex" onClick={() => ToggleTheme()}><i class="fa-solid fa-lightbulb"></i></button>}

                        </div>
                    </div>
                </div>
                {/* NAVLINKS */}

                {/* RESPONSIVE MENU */}
                <div class="container flex justify-evenly text-gray-500 dark:text-slate-200 items-center">
                    {darkMode === true ?
                        <button class="lg:hidden pt-2 mx-auto pb-0 text-2xl mr-4" onClick={() => ToggleTheme()}><i class="fa-solid fa-moon"></i></button>
                        :
                        <button class="lg:hidden pt-2 mx-auto pb-0 text-2xl mr-4" onClick={() => ToggleTheme()}><i class="fa-solid fa-lightbulb"></i></button>
                    }
                    <input type="text" id="search-navbar" class="mt-1 mx-auto w-10/12 lg:hidden h-10 flex ps-4 text-black text-base border border-slate-500 focus:outline focus:outline-offset-0 outline-gray-950 rounded-md dark:bg-darkBg dark:text-slate-100 bg-slate-100" placeholder="Busca algo..."></input>
                    <Link to="/carrito">
                        <button class="lg:hidden pt-2 mx-4 pb-0 text-2xl mr-0 transition duration-300 ease-in-out  focus:text-teal-600 dark:focus:text-teal-200"><i class="fa-solid fa-cart-shopping"></i></button>
                    </Link>
                </div>
                {/* RESPONSIVE MENU */}
            </nav>
        </div>
    )
}

export default Navbar