import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTag, 
    faCog, 
    faCartShopping, 
    faChartLine,
    faMessage, 
    faArrowRightArrowLeft, 
    faFileInvoice, 
    faUserGroup, 
    faPeopleGroup, 
    faArrowRightFromBracket,
    faBars
} from  '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

const NavData = [
    {
        label: 'Analytics',
        url: '/',
        icon: faChartLine,
        active: true,
    },
    {
        label: 'Products',
        url: '/products',
        icon: faTag,
        active: false,   
    },
    {
        label: 'Orders',
        url: '/orders',
        icon: faCartShopping,
        active: false,   
    },
    {
        label: 'Messages',
        url: '/messages',
        icon: faMessage,
        active: false,   
    },
    {
        label: 'Refund',
        url: '/refund',
        icon: faArrowRightArrowLeft,
        active: false,   
    },
    {
        label: 'Invoice',
        url: '/invoice',
        icon: faFileInvoice,
        active: false,   
    },
    {
        label: 'Customers',
        url: '/customers',
        icon: faPeopleGroup,
        active: false,   
    },

    {
        label: 'Suppliers',
        url: '/suppliers',
        icon: faUserGroup,
        active: false,   
    },

    {
        label: 'Settings',
        url: '/settings',
        icon: faCog,
        active: false,   
    },

]

function Sidebar({open, setOpen}) {
    const router = useRouter();
    


  return (
    <>

    <aside className={` bg-aside-color dark:bg-black  shadow-gray-100 fixed h-full w-16 lg:w-60 ${open ? 'sidebar active' : 'sidebar'}`}>
   
        
        <div className="pt-10 lg:pl-5 mt-3 lg:mt-0">
        <Image src="/assets/Logo.png" alt="Grabby-Logo" width="183" height="64" className='cursor-pointer'/>
        </div>


        <nav className="z-10">
        <ul className='p-5'>
            {NavData.map((item,index) => {
                return (
                    <Link href={item.url} key={index}>
                        <li className={`cursor-pointer text-blue-light dark:text-gray-100 hover:text-blue-card mb-5 p-2 lg:mb-0 lg:p-4 text-xl tracking-wide font-normal ${router.asPath === item.url ? "text-white bg-blue-card rounded-full hover:text-slate-300" : "text-blue-light"}`}>
                            <FontAwesomeIcon icon={item.icon} className="w-5 mr-4"/>
                            <span>{item.label}</span>
                        </li>
                    </Link>
                )
            })}
            <li className='cursor-pointer text-blue-light dark:text-gray-100 text-xl tracking-wide pt-8 lg:pt-16 lg:pl-4 lg:pr-4'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 mr-4"/>
                <Link href='/'>
                    <a>Sign-out</a>
                </Link>
            </li>
        </ul>
        </nav>
 
    </aside>
    </>
  )
}

export default Sidebar;

