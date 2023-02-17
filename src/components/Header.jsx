import React from 'react'
import { Outlet, Link } from "react-router-dom";

//IonIcon
import { IonIcon } from '@ionic/react'
import { search } from 'ionicons/icons'

function Header() {
  return (
    <>
      <header className='flex justify-center h-[80px] w-[100%]'>
        <nav className='flex justify-between items-center w-[90%] border-b-[1px]'>
          <div className="flex h-full w-1/2 items-center">
            <Link to='/'>
              <img src="/src/images/logo/short_logo.png" alt="GTAWIKI" className='lg:hidden h-[60px]' />
              <img src="/src/images/logo/horizontal_logo.png" alt="GTAWIKI" className='hidden lg:block h-[60px]' />
            </Link>
          </div>
          <div className="flex items-center justify-end h-full w-1/2 ">
            <form action="" className='w-full lg:w-5/6'>
              <IonIcon icon={search} className='text-black ml-3 translate-y-[9px] absolute' />
              <input type="text" className='w-full h-[35px] pl-9 rounded-full focus:outline-none' />
            </form>
          </div>
        </nav>
      </header>

      <Outlet />
    </>

  )
}

export default Header