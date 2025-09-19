import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { scroller, animateScroll as scroll } from 'react-scroll'
import Logo from '../assets/Logo.webp'

export const Navbar = () => {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'contact']
        const scrollPosition = window.scrollY + 100
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element && scrollPosition >= element.offsetTop) {
            setActive(sections[i])
            break
          }
        }
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      if (path.startsWith('/projects')) setActive('projects')
      else if (path.startsWith('/blogs')) setActive('blogs')
      else if (path.startsWith('/services')) setActive('services')
      else if (path.startsWith('/about')) setActive('about')
    }
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, { duration: 800, smooth: 'easeInOutQuart' })
      navigate(location.pathname, { replace: true, state: {} })
    }
    if (location.pathname === '/' && location.state?.scrollToTop) {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' })
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  const menuItems = [
    { name: 'Home', type: 'route', path: '/' },
    { name: 'Services', type: 'route', path: '/services' },
    { name: 'About', type: 'route', path: '/about' },
    { name: 'Blogs', type: 'route', path: '/blogs' },
    { name: 'Contact', type: 'scroll', id: 'contact' }
  ]

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scroller.scrollTo(id, { duration: 800, smooth: 'easeInOutQuart' })
    }
  }

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } })
    } else {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' })
    }
  }

  const handleItemClick = (item) => {
    setActive(item.name)
    if (item.type === 'route') navigate(item.path)
    else if (item.type === 'scroll') handleScroll(item.id)
  }

  return (
<nav className="fixed top-0 left-0 right-0 z-50 font-[Inter]">
  {/* Desktop Navbar */}
  <div className="hidden md:flex w-full h-20 lg:h-24 items-center justify-between px-10 lg:px-14 shadow-md bg-[#5a2d4b] rounded-b-3xl">
    <RouterLink to="/" onClick={handleScrollTop} className="flex-shrink-0">
      <img src={Logo} alt="Logo" className="w-14 h-14 lg:w-16 lg:h-16 object-contain cursor-pointer" />
    </RouterLink>
    <ul className="flex items-center gap-x-6 lg:gap-x-10">
      {menuItems.map((item) => (
        <li key={item.name} onClick={() => handleItemClick(item)}>
          {item.type === 'route' ? (
            <RouterLink
              to={item.path}
              className={`px-5 py-2 rounded-full text-base lg:text-lg font-semibold transition-all duration-200 ${
                active === item.name ? 'bg-white/10 text-[#f0c417]' : 'text-white hover:bg-[#4f4e4e]'
              }`}
            >
              {item.name}
            </RouterLink>
          ) : (
            <span
              className={`px-5 py-2 rounded-full text-base lg:text-lg font-semibold transition-all duration-200 ${
                active === item.name ? 'bg-white/10 text-[#f0c417]' : 'text-white hover:bg-[#4f4e4e]'
              }`}
            >
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ul>
    <button
      className="mr-5 bg-[#f0c417] text-[#5a2d4b] px-8 py-3 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-base lg:text-lg"
      onClick={() => navigate('/enroll')}
    >
      Enroll Now
    </button>
  </div>

  {/* Mobile Navbar */}
  <div className="flex md:hidden items-center justify-between px-5 h-16 bg-[#5a2d4b] rounded-b-2xl shadow-md">
    <button className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
    <RouterLink to="/" onClick={handleScrollTop} className="flex-1 flex justify-center">
      <img src={Logo} alt="Logo" className="w-12 h-12 object-contain cursor-pointer" />
    </RouterLink>
    <div style={{ width: '2.5rem' }}></div>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden absolute top-16 left-0 w-full border-t border-[#444] bg-[#5a2d4b] rounded-b-2xl shadow-md">
      <ul className="flex flex-col items-center gap-4 py-4">
        {menuItems.map((item) => (
          <li key={item.name} onClick={() => handleItemClick(item)}>
            {item.type === 'route' ? (
              <RouterLink
                to={item.path}
                className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                  active === item.name ? 'bg-white/10 text-[#f0c417]' : 'text-white hover:bg-[#4f4e4e]'
                }`}
              >
                {item.name}
              </RouterLink>
            ) : (
              <span
                className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                  active === item.name ? 'bg-white/10 text-[#f0c417]' : 'text-white hover:bg-[#4f4e4e]'
                }`}
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
        <li>
          <button
            className="bg-[#f0c417] text-[#5a2d4b] px-10 py-3 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-base"
            onClick={() => {
              setMenuOpen(false)
              navigate('/enroll')
            }}
          >
            Enroll Now
          </button>
        </li>
      </ul>
    </div>
  )}
</nav>

  )
}

export default Navbar
