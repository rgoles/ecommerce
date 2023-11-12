import Image from "next/image";
import logoMobile from '../../../public/sgbLogoMobile.svg'
import logoDesktop from '../../../public/sgbLogoDesktop.svg'
import {Cart, List, Search} from 'react-bootstrap-icons';

export default function Navigation() {
    return (<nav>

        {/* Mobile navigation */}
        <div className='d-flex justify-content-between mx-4 my-4 d-xl-none'>
            <div><a href="#"><List size={25} color='black'/></a><a href="#"><Search size={25} color='black'/></a></div>
            <div><a href=""><Image src={logoMobile} alt='Silver gold bull logo'/></a></div>
            <div>
                <a href="#">
                    <span className='position-absolute'>
                    <Cart size={25} color='black'/>
                    </span>
                    <span className='bg-warning position-relative ms-3 mt-5'>
                    0
                    </span>
                </a>
            </div>
        </div>

        {/* Desktop navigation */}
        <div className='d-none d-xl-flex justify-content-between align-items-center mx-4 my-4'>
            <div><a href="#"><Image src={logoDesktop} alt='Silver gold bull logo'/></a></div>
            <div>
                <ul className='d-flex flex-row my-auto h-100 gap-5 list-unstyled'>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>GOLD</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>SILVER</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>PLATINUM</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>DEAL ZONE</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>OTHER PRODUCTS</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>SERVICES</li>
                    </a>
                    <a href="#" className='text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                        <li>LEARN</li>
                    </a>
                </ul>
            </div>
            <div><a href="#"><Cart size={25} color='black'/></a></div>
        </div>
    </nav>)
}
