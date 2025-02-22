import React from 'react'
import { FaFacebook, FaLine, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div className="w-full h-[376px] bg-footercolor py-6">
                <div className="px-[72px] grid grid-cols-5">
                    <div className="col-span-2 flex justify-center ">
                        <h1 className='text-white text-[36px] font-bold font-inter italic cursor-pointer'>Makinnumgun</h1>
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className='text-white text-[28px] font-bold font-inter italic cursor-pointer'>Help Center</h1>
                            <ul className='text-gray-600 text-[28px] font-bold font-inter italic'>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Facebook</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Line</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Instagram</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>X</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Github</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className='text-white text-[28px] font-bold font-inter italic cursor-pointer'>LEGEL</h1>
                            <ul className='text-gray-600 text-[28px] font-bold font-inter italic'>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Privacy Policy</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Licensing</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Terms & Conditions</li>

                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className='text-white text-[28px] font-bold font-inter italic cursor-pointer'>Catagory</h1>
                            <ul className='text-gray-600 text-[28px] font-bold font-inter italic'>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>General Food</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Dessert Food</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Healthy Food</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Fast Food</li>
                                <li className='cursor-pointer hover:text-amber-500 w-fit'>Beverages</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <div className="w-5/6 ">
                        <hr className='border-t-1 my-5' />
                        <div className="flex justify-between items-start">
                            <h6 className='text-white font-bold italic text-[20px]'>@ 2025 Makinnumgan . All Rights Reserved.</h6>
                            <div className="flex space-x-8">
                                <FaFacebook className="text-white text-4xl cursor-pointer hover:text-amber-500" />
                                <FaLine className="text-white text-4xl cursor-pointer hover:text-amber-500" />
                                <FaInstagram className="text-white text-4xl cursor-pointer hover:text-amber-500" />
                                <FaTwitter className="text-white text-4xl cursor-pointer hover:text-amber-500" />
                                <FaGithub className="text-white text-4xl cursor-pointer hover:text-amber-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
