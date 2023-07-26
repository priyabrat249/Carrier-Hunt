
const NavBar = () => {
    
  return (
    <div className='navBar flex justify-between items-center pt-[0] p-[3rem]'>
        <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor"><a href="/"><strong>Carrier</strong>Hunt</a></h1>
          </div>
          <div className="menu flex gap-8 p-[3rem]">
              <li className="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/Job">Job</a></li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
              <li className="menuList text-[#6f6f6f] hover:text-blueColor" >Register</li>
          </div>
      </div>
      
  )
}

export default NavBar