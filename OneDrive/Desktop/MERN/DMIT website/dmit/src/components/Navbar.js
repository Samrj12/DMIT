import { Fragment, useRef, useState } from "react";
import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "About"},
  { name: "Enquiry"},
  { name: "Reviews"},
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar({refs}) {
  const [selectedNav, setSelectedNav] = useState(0);
  return (
    <>
      <Disclosure as="nav" className="sticky top-0 transition-all delay-300 bg-gray-900 z-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 justify-between items-center sm:items-stretch">
                  <div className="text-2xl font-bold leading-7 relative text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
                    Shruti's DMIT
                  </div>
                  <div className="hidden sm:flex">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                         <button
                        id= {`${index}`}
                          onClick={() => {setSelectedNav(index);refs[index].current.scrollIntoView({behavior : 'smooth'})}}
                          className = {`${selectedNav === index ? "bg-gray-900 rounded-none border-b-2 border-gray-300 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} rounded-md px-3 py-2 text-base font-normal`}

      
                          aria-current={selectedNav === index ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                as="button"
                id= {`${index}`}
                onClick={() => {setSelectedNav(index);console.log(refs[index]);setTimeout(() =>{refs[index].current.scrollIntoView({behavior : 'smooth'})}, 200)}}
                         
                  className={`${selectedNav === index? 'bg-gray-900 text-white border-b-2 border-gray-300' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-1 py-2 text-base font-medium`}
                  aria-current={selectedNav === index ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
