// component/NavBar.js

import { NavLink } from "react-router-dom";
import {ReactComponent as YourSvg2} from './blankerrounded1.svg'

const initApp =()=>{
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = ()=>{
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
      hamburgerBtn.classList.toggle('toggle-btn')
  }
  hamburgerBtn.addEventListener('click',toggleMenu)
  mobileMenu.addEventListener('click',toggleMenu)
}


const NavBar = () => {
  return (
    <header class="bg-slate-800 text-white sticky top-0 z-10">
      <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
<div class="flex lg:flex-1">
<YourSvg2 className=" mt-1 mr-2 h-8 w-auto"></YourSvg2>
<h1 class="text-3xl font-medium"> Blanker</h1>
</div>

        <div>
          <button id="hamburger-button"
            class="text-3xl md:hidden cursor-pointer relative w-8 h-8">
            <div class="bg-white w-8 h-1 rounded absolute top-4 mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500" onClick={() => initApp()}>

            </div>
          </button>
          <nav class="hidden md:block space-x-8 text-xl" aria-label="main">
      
          <NavLink to="/" ><span class="hover:opacity-90 !text-white ">Home</span></NavLink>
         
          <NavLink  to="/Passwordmaker"><span class="hover:opacity-90 !text-white ">Password maker</span></NavLink>
       
          <NavLink  to="/Contact"><span class="hover:opacity-90 !text-white ">Contact</span></NavLink>
       
    </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        class="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
       
        <nav
          class="flex flex-col min-h-screen items-center py-8"
          area-label="'mobile"
        >
           <span class="w-full text-center py-6 hover:opacity-90" >
         <NavLink to='/'><span >Home</span></NavLink>

         </span>
         
           <span class="w-full text-center py-6 hover:opacity-90" >
         <NavLink to='/Passwordmaker'><span >Password</span></NavLink>

         </span>

         <span class="w-full text-center py-6 hover:opacity-90" >
         <NavLink to='/Contact'><span >Contact</span></NavLink>

         </span>
        
         
        </nav>
      </section>

    </header>
    
  );
 
};

export default NavBar;