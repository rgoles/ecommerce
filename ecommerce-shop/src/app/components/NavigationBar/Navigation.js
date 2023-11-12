import Image from "next/image";
import logoMobile from '../../../../public/sgbLogoMobile.svg'
import logoDesktop from '../../../../public/sgbLogoDesktop.svg'
import {Cart, List, Search} from 'react-bootstrap-icons';
import './navbar.css'

export default function Navigation() {
    return (<nav>

        {/* Mobile navigation */}
        <div className='container-fluid mt-4 d-xl-none'>
            <div className='row'>
                <div className='col-3 d-flex justify-content-start align-items-center'>
                    <div><a href="#" className='px-1'><List size={20} color='black'/></a><a href="#" className='px-1'><Search size={16} color='black'/></a></div>
                </div>
                <div className='col-6 d-flex justify-content-center'><a href=""><Image src={logoMobile} alt='Silver gold bull logo' width={70} height={34}/></a></div>

                <div className='col-3 d-flex justify-content-end align-items-center'>
                    <a href="#" className='text-decoration-none'>
                    <span className='position-absolute'>
                    <Cart size={20} color='black'/>
                    </span>
                        <span className='cartCircle'>
                    0
                    </span>
                    </a>
                </div>
            </div>
        </div>

        {/* Desktop navigation */}
        <div className='h-100 d-none d-xl-block container-fluid justify-content-between align-items-center my-4 pb-4 border-bottom border-2'>
            <div className='row'>
                <div className='col-2 d-flex justify-content-start align-items-center'><a href="#"><Image src={logoDesktop} alt='Silver gold bull logo' width={120}
                                                                                                          height={34}/></a></div>
                <div className='col-8 d-flex justify-content-center align-items-center'>
                    <ul className='d-flex flex-row list-unstyled gap-3 my-auto'>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>GOLD</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>SILVER</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>PLATINUM</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>DEAL ZONE</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>OTHER PRODUCTS</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>SERVICES</li>
                        </a>
                        <a href="#" className='text-black navTextFont underlineOffset link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'>
                            <li>LEARN</li>
                        </a>
                    </ul>
                </div>
                <div className='col-2 d-flex justify-content-end align-items-center'>
                    <a href="#">
                    <span className='position-absolute'>
                    <Cart size={24} color='black'/>
                    </span>
                        <span className='cartCircle'>
                    0
                    </span>
                    </a>
                </div>
            </div>
        </div>
    </nav>)
}
