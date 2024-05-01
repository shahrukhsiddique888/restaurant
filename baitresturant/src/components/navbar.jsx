import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from './assets/image.png';


const navigation = [
  { name: 'Home', href: '#', current:false },
  { name: 'A-LA-CARTE-MENU', href: '#', current: false },
  { name: 'Reservation', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Contact Us', href:'#' ,current:false},
  { name:'Location', href:'https://maps.app.goo.gl/TginycqzTjUsC3G58', current:false}
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-green-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className='sm:mt-12  sm:mx-auto '>
                <img
                  className="h-12  sm:float-left sm:ml-20  md:h-24 lg:h-18 lg:rounded-full lg:w-28 lg:h-28 lg:bg-[#43865c] w-auto"
                  // src={logo}
                  src='https://images.sirved.com/ChIJee8jpOhX54YRrJNkJ6Y9p1k/OwdRiCgqv1.png'
                  // src='https://res.cloudinary.com/practicaldev/image/fetch/s--i3JOwpme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-ba8488d21cd8ee1fee097b8410db9deaa41d0ca30b004c0c63de0a479114156f.svg'
                  // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Bait logo"
                />
                
                </div>
                
              </div>
              
   

            
              {/* Navigation button */}
              <div className="absolute inset-y-0 mx-28 flex items-center sm:hidden">
                {/* Mobile menu button */}
                
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#060606] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="absolute -inset-1"></span>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div className='mx-2'>
                  <a href='https://maps.app.goo.gl/TginycqzTjUsC3G58'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-6">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  </a>
                </div>
              </div>

              {/* Desktop navigation */}
              <div className="hidden flex-shrink-0 sm:flex sm:items-center sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* sm:hidden  bg-green-500 w-full h-screen justify-between items-top  */}
          {/* Mobile navigation panel */}
          <Disclosure.Panel className="sm:hidden  bg-green-500 w-full h-screen justify-betweenitems-top ">
            <div className="space-y-1  px-5  sm: justify-between pb-3 pt-2  overflow-y-auto overflow-x-auto">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
