import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Icon as Iconify } from '@iconify-icon/react';

const Navbar = ({ title, btnBg, menuBg, menuBgTxt, menuTxtInactive, btnTxt, menuItem, padding, iconMargin }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className="w-56 text-right">
                    <Menu as="div" className="relative inline-block text-left">
                    <div>
                    <Menu.Button className={`${btnBg} ${btnTxt} ${padding} inline-flex w-full items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                        {title}
                        <Iconify icon="heroicons-solid:chevron-down" className={`ml-2 -mr-1 ${btnTxt}`} aria-hidden="true" />
                    </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className={`${menuBg} absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        {
                        menuItem.map((list, index) => {
                            return (
                            <div className={padding}>
                                <Menu.Item>
                                {({ active }) => (
                                    <button
                                    className={`${active ? menuBgTxt : menuTxtInactive} ${padding} group flex w-full items-center rounded-md`}>
                                    {active ? (
                                        <Iconify icon={list.iconActive} className={iconMargin} aria-hidden="true" />
                                    ) : (
                                        <Iconify icon={list.iconInactive} className={iconMargin} aria-hidden="true" />
                                    )}
                                    {list.title}
                                    </button>
                                )}
                                </Menu.Item>
                            </div>
                            )
                        })
                        }
                    </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
            </nav>
        </div>
    );
 }
 
 export default Navbar;