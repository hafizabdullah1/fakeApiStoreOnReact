import React, { Component } from 'react'

export default class Header extends Component {

   
    toggle=()=>{
        const side = document.getElementById('side');
        side.classList.toggle('side')
    }

  render() {
    return (
      <>
      <nav className='px-10 sm:px-24 py-2 flex justify-between items-center sticky top-0 bg-blue-400 z-50 '>
        <img src="/img/mainlogo.png" alt="" className='h-16 cursor-pointer '  />
        <ul className=' gap-6 hidden sm:flex'>
            <li className='cursor-pointer text-white  text-lg hover:text-blue-700 hover:shadow'>Home</li>
            <li className='cursor-pointer text-white  text-lg hover:text-blue-700 hover:shadow'>About</li>
            <li className='cursor-pointer text-white  text-lg hover:text-blue-700 hover:shadow'>Contact</li>
            <li className='cursor-pointer text-white  text-lg hover:text-blue-700 hover:shadow'>Services</li>
        </ul>
        <i class="fa-solid fa-bars text-white text-2xl cursor-pointer block sm:hidden" onClick={this.toggle}></i>
      </nav>
      <aside className='fixed z-10 -right-64 bottom-0 h-[87vh] w-52' id='side'>
            <div className="user">
                <div className="round">
                </div>
            </div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>            
                <li>services</li>            
                </ul>
            <footer>
                <h4>© 2023 AbdullahThemes</h4>
            </footer>
           </aside>
             </>
    )
  }
}
