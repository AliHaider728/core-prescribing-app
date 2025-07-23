 
import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { SiGlassdoor, SiTiktok } from "react-icons/si"
import { ChevronDown, Menu, X, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navItemsRef = useRef([])
  const topBarRef = useRef(null)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const fadeIn = (element, delay = 0, duration = 0.6) => {
    if (!element) return
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`
    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, delay * 1000)
  }

  useEffect(() => {
    if (topBarRef.current) fadeIn(topBarRef.current, 0, 0.5)
    if (logoRef.current) fadeIn(logoRef.current, 0.2, 0.6)
    navItemsRef.current.forEach((item, index) => {
      if (item) fadeIn(item, 0.1 * index + 0.4, 0.5)
    })

    const handleScroll = () => setIsScrolled(window.pageYOffset > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const servicesSubMenu = [
    { name: "Services & Support Overview", path: "/services" },
    { name: "Clinical Pharmacist Support Service", path: "/services/clinical-pharmacist" },
    { name: "Primary Care Network Management and Support", path: "/services/pcn-management" },
    { name: "Medicines Optimisation Service", path: "/services/medicines-optimisation" },
    { name: "Pharmacy Technician Support", path: "/services/pharmacy-technician" },
    { name: "GP Practice Pharmacist Support", path: "/services/gp-practice-pharmacist" },
    { name: "Enhanced Access and Extended Access Service", path: "/services/enhanced-access" },
    { name: "Additional Roles Reimbursement Scheme (ARRS)", path: "/services/arrs" },
    { name: "GP ARRS", path: "/services/gp-arrs" },
    { name: "Remote Prescribing", path: "/services/remote-prescribing" },
  ]

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
      ref={headerRef}
    >
      {/* Top Info Bar */}
      <div
        ref={topBarRef}
        className={`bg-blue-900 text-white transition-all duration-300 ${isScrolled ? "py-2" : "py-3"} px-4`}
      >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm px-4 sm:px-0 py-2">
  {/* Contact Info */}
  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
    <a
      href="mailto:info@coreprescribingsolutions.co.uk"
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm"
    >
      <Mail className="w-5 h-5" />
      <span>info@coreprescribingsolutions.co.uk</span>
    </a>
    <a
      href="tel:01274442076"
      className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm"
    >
      <Phone className="w-5 h-5" />
      <span>01274 442076</span>
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex items-center space-x-5 mt-4 sm:mt-0">
    {[
      {
        href: "https://www.facebook.com/CorePrescribingSolutions/",
        Icon: Facebook,
        label: "Facebook",
      },
      {
        href: "https://x.com/coreprescribing?lang=en",
        Icon: Twitter,
        label: "Twitter",
      },
      {
        href: "https://www.linkedin.com/company/core-prescribing-solutions/",
        Icon: Linkedin,
        label: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/coreprescribingsolutions/",
        Icon: Instagram,
        label: "Instagram",
      },
      {
        href: "https://www.tiktok.com/@coreprescribingsolutions",
        Icon: SiTiktok,
        label: "TikTok",
      },
      {
        href: "https://www.glassdoor.co.uk/Overview/Working-at-Core-Prescribing-Solutions-EI_IE5334889.11,37.htm",
        Icon:  SiGlassdoor,
        label: "glassdoor",
      },
      
    ].map(({ href, Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-white hover:text-blue-400 cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
      >
        <Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
</div>

      </div>

      {/* Main Header */}
      <div
        className={`bg-white shadow-md border-b-2 border-blue-600 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer group" ref={logoRef}>
              <img
                src="https://pbs.twimg.com/profile_images/1328374019284983808/5ZwSRzyw_400x400.jpg"
                alt="Core Prescribing Solutions Logo"
                className="w-20 h-20 sm:w-16 sm:h-16 object-contain"
              />
              <span className="ml-3 text-blue-900 font-semibold md:text-base text-[17px] sm:text-[20px] leading-tight transition-colors group-hover:text-blue-600">
                Core Prescribing Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Meet the Team", path: "/meet-the-team" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === item.path ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  ref={(el) => (navItemsRef.current[3] = el)}
                  className={`flex items-center font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname.startsWith("/services") ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services & Support
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 backdrop-blur-sm"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {servicesSubMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: "Tools", path: "/tools" },
                { name: "Training & Development", path: "/training" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index + 4] = el)}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === item.path ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-blue-900 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4 max-h-96 overflow-y-auto">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Meet the Team", path: "/meet-the-team" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-medium transition-all duration-300 hover:translate-x-2 py-2 ${
                    location.pathname === item.path ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div>
                <button
                  className={`flex items-center justify-between w-full font-medium transition-all duration-300 hover:translate-x-2 py-2 ${
                    location.pathname.startsWith("/services") ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services & Support
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto">
                    {servicesSubMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 py-1 hover:translate-x-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: "Tools", path: "/tools" },
                { name: "Training & Development", path: "/training" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-medium transition-all duration-300 hover:translate-x-2 py-2 ${
                    location.pathname === item.path ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
