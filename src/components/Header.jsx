import React from 'react'

//IonIcon
import { IonIcon } from '@ionic/react'
import { search } from 'ionicons/icons'

function Header() {
  return (
    <header className='flex justify-center h-[80px] w-[100%]'>
      <nav className='flex justify-between items-center w-[90%] border-b-[1px]'>
        <div className="flex h-full w-1/2 items-center border-[1px]">
          <img src="/src/images/logo/short_logo.png" alt="GTAWIKI" className='lg:hidden h-[60px]'/>
          <img src="/src/images/logo/horizontal_logo.png" alt="GTAWIKI" className='hidden lg:block h-[60px]'/>
        </div>
        <div className="flex items-center justify-end border-[1px] h-full w-1/2">
          <form action="">
            <IonIcon icon={search} className='text-white mx-2 translate-y-[2px]'/>
            <input type="text" />
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header