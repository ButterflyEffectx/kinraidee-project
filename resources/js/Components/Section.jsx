import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import food1 from './images/Group1.png'
import food2 from './images/Group2.png'
import food3 from './images/Group3.png'
import food4 from './images/Group4.png'
import food5 from './images/Group6.png'
import minifood1 from './images/minifood1.png'
import minifood2 from './images/minifood2.png'
import minifood3 from './images/minifood3.png'
import minifood4 from './images/minifood4.png'
import minifood5 from './images/minifood5.png'
import minifood6 from './images/minifood6.png'
import minifood7 from './images/minifood7.png'
import minifood8 from './images/minifood8.png'
import minifood9 from './images/minifood9.png'
import minifood10 from './images/minifood10.png'
import minifood11 from './images/minifood11.png'
import minifood12 from './images/minifood12.png'
import minifood13 from './images/minifood13.png'
import minifood14 from './images/minifood14.png'
import minifood15 from './images/minifood15.png'

function Section() {
    return (
        <>
            <div className="">
                {/* GENERAL FOOD */}
                <div className="w-full h-[733px]"
                    style={{
                        background: 'radial-gradient(circle, #FDF400 0%, #929C00 70%)'
                    }}>
                    <div className="container mx-auto w-full h-full">
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="flex flex-col justify-center items-start ">
                                <h1 className='text-[96px] font-inter italic font-bold text-white '>
                                    GENERAL <br /> FOOD
                                </h1>
                                <p className='text-[20px] font-inter italic font-bold text-white'>General food refers to meals that are commonly consumed in daily life, either home-cooked or easily available at restaurants. These foods are familiar, nutritionally balanced</p>
                                <div className="py-3">
                                    <button className='bg-btncolor text-[20px] text-white font-inter font-bold italic flex justify-center items-center gap-x-1 py-2 px-4 rounded-lg'>
                                        View menu
                                        <div className="relative w-[32px] h-[27px]">
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                        </div>

                                    </button>
                                </div>
                                <div className="w-full">
                                    <h2 className='text-[24px] font-inter font-bold italic text-center text-white'>
                                        Recommended menu
                                    </h2>
                                    <div className="flex justify-evenly items-center  ">
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood1} alt="present-food" className='w-[150px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood2} alt="present-food" className='w-[150px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood3} alt="present-food" className='w-[150px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <img src={food1} alt="general-food" className='w-[644px] h-[609px] drop-shadow-xl' />
                            </div>


                        </div>
                    </div>
                </div>



                {/* DESSERT FOOD */}
                <div className="w-full h-[733px]" style={{
                    background: 'radial-gradient(circle, #F200DA 0%, #8C007E 70%)'
                }}>
                    <div className="container mx-auto w-full h-full">
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="flex justify-center items-center ">
                                <img src={food2} alt="general-food" className='w-[644px] h-[609px] drop-shadow-xl' />
                            </div>
                            <div className="flex flex-col justify-center items-end ">
                                <h1 className='text-[96px] font-inter italic font-bold text-white text-end'>
                                    DESSERT <br /> FOOD
                                </h1>
                                <p className='text-[20px] font-inter italic font-bold text-white text-end'>General food refers to meals that are commonly consumed in daily life, either home-cooked or easily available at restaurants. These foods are familiar, nutritionally balanced</p>
                                <div className="py-3">
                                    <button className='bg-btncolor text-[20px] text-white font-inter font-bold italic flex justify-center items-center gap-x-1 py-2 px-4 rounded-lg'>
                                        <div className="relative w-[32px] h-[27px]">
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                        </div>
                                        View menu

                                    </button>
                                </div>
                                <div className="w-full">
                                    <h2 className='text-[24px] font-inter font-bold italic text-center text-white'>
                                        Recommended menu
                                    </h2>
                                    <div className="flex justify-evenly items-center">
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood4} alt="present-food" className='w-[170px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood5} alt="present-food" className='w-[100px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood6} alt="present-food" className='w-[110px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HEALTHY FOOD */}
                <div className="w-full h-[733px]" style={{
                    background: 'radial-gradient(circle, #2EDF4E 0%, #19792A 70%)'
                }}>
                    <div className="container mx-auto w-full h-full">
                        <div className="grid grid-cols-2 w-full h-full">

                            <div className="flex flex-col justify-center items-start ">
                                <h1 className='text-[96px] font-inter italic font-bold text-white text-start'>
                                    HEALTHY <br /> FOOD
                                </h1>
                                <p className='text-[20px] font-inter italic font-bold text-white'>General food refers to meals that are commonly consumed in daily life, either home-cooked or easily available at restaurants. These foods are familiar, nutritionally balanced</p>
                                <div className="py-3">
                                    <button className='bg-btncolor text-[20px] text-white font-inter font-bold italic flex justify-center items-center gap-x-1 py-2 px-4 rounded-lg'>
                                        View menu
                                        <div className="relative w-[32px] h-[27px]">
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                        </div>


                                    </button>
                                </div>
                                <div className="w-full">
                                    <h2 className='text-[24px] font-inter font-bold italic text-center text-white'>
                                        Recommended menu
                                    </h2>
                                    <div className="flex justify-evenly items-center">
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood7} alt="present-food" className='w-[200px]' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood8} alt="present-food" className='w-[170px] ' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood9} alt="present-food" className='w-[155px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <img src={food3} alt="general-food" className='w-[623px] h-[655px] drop-shadow-xl' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* JUNK FOOD */}
                <div className="w-full h-[733px]" style={{
                    background: 'radial-gradient(circle, #FF4D00 0%, #992E00 70%)'
                }}>
                    <div className="container mx-auto w-full h-full">
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="flex justify-center items-center ">
                                <img src={food4} alt="general-food" className='w-[616px] h-[484px] drop-shadow-xl' />
                            </div>
                            <div className="flex flex-col justify-center items-end ">
                                <h1 className='text-[96px] font-inter italic font-bold text-white text-end '>
                                    <span className='tracking-wider'>F A S T</span> <br /> FOOD
                                </h1>
                                <p className='text-[20px] font-inter italic font-bold text-white text-end'>General food refers to meals that are commonly consumed in daily life, either home-cooked or easily available at restaurants. These foods are familiar, nutritionally balanced</p>
                                <div className="py-3">
                                    <button className='bg-btncolor text-[20px] text-white font-inter font-bold italic flex justify-center items-center gap-x-1 py-2 px-4 rounded-lg'>
                                        <div className="relative w-[32px] h-[27px]">
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowLeftIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                        </div>
                                        View menu

                                    </button>
                                </div>
                                <div className="w-full">
                                    <h2 className='text-[24px] font-inter font-bold italic text-center text-white'>
                                        Recommended menu
                                    </h2>
                                    <div className="flex justify-evenly items-center">
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood10} alt="present-food" className='w-[130px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood11} alt="present-food" className='w-[130px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood12} alt="present-food" className='w-[130px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BEVERAGES FOOD */}
                <div className="w-full h-[733px]" style={{
                    background: 'radial-gradient(circle, #34BED7 0%, #175661 70%)'
                }}>
                    <div className="container mx-auto w-full h-full">
                        <div className="grid grid-cols-2 w-full h-full">

                            <div className="flex flex-col justify-center items-start ">
                                <h1 className='text-[96px] font-inter italic font-bold text-white text-start'>
                                    BEVERAGES <br />
                                </h1>
                                <p className='pt-12 text-[20px] font-inter italic font-bold text-white'>General food refers to meals that are commonly consumed in daily life, either home-cooked or easily available at restaurants. These foods are familiar, nutritionally balanced</p>
                                <div className="py-3">
                                    <button className='bg-btncolor text-[20px] text-white font-inter font-bold italic flex justify-center items-center gap-x-1 py-2 px-4 rounded-lg'>
                                        View menu
                                        <div className="relative w-[32px] h-[27px]">
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                            <ArrowRightIcon className="absolute w-[32px] h-[27px] text-white blur-[1px]" />
                                        </div>


                                    </button>
                                </div>
                                <div className="w-full">
                                    <h2 className='text-[24px] font-inter font-bold italic text-center text-white'>
                                        Recommended menu
                                    </h2>
                                    <div className="flex justify-evenly items-center">
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood13} alt="present-food" className='w-[150px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood14} alt="present-food" className='w-[95px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-[24px] font-bold italic font-inter text-white">
                                            <div className="flex justify-center items-center w-[200px] h-[160px] ">
                                                <img src={minifood15} alt="present-food" className='w-[65px] mt-auto' />
                                            </div>
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <img src={food5} alt="general-food" className='w-[584px] h-[620px] drop-shadow-xl' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* FOOTER */}

            </div>
        </>
    )
}

export default Section
