import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/Logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo image" style={{ width: '50px' }} />
            </div>

            {/* menu items in navbar */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="register" smooth={true} duration={500} >
                        Register
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger`*/}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile-Menu `*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons `*/}
            <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[47px] flex justify-between items-center'>
                        <a href="https://www.linkedin.com/in/saurav-gupta-97840a232/" className='flex justify-between items-center w-full text-gray-300 ml-[-95px] hover:ml-[-10px] duration-300 bg-blue-600'>
                            Linkedin
                            <FaLinkedin size={50} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[47px] flex justify-between items-center'>
                        <a href="https://github.com/Saurav-Gupta-13" className='flex justify-between items-center w-full text-gray-300 ml-[-95px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            Github
                            <FaGithub size={50} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[47px] flex justify-between items-center'>
                        <a href="https://mail.google.com/" className='flex justify-between items-center w-full text-gray-300 ml-[-95px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            Email
                            <HiOutlineMail size={50} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[47px] flex justify-between items-center'>
                        <a href="https://drive.google.com/file/d/1qgfOoKhNv53qPpb_KqMvJ7x3aac_SMhk/view" className='flex justify-between items-center w-full text-gray-300 ml-[-95px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            Resume
                            <BsFillPersonLinesFill size={50} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar