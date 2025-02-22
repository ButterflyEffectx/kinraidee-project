import React from 'react'
import bg from './images/bg.jpg'

function Hero() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    width: '100%',
                    height: '978px'
                }}
                className='bg-cover bg-center'
            >
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-white text-[64px] font-inter font-bold italic text-center ">
                                <h1>WELCOME TO <br /> WEBSITE MAKINNUMGUN</h1>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <hr className='w-1/2 border-t-4 border-gray-500 pt-4' />
                            </div>
                            <div className="text-white text-[24px] font-inter font-bold italic text-center  w-1/2">
                                <h3>Welcome to a website that lets you freely choose delicious meals with an automatic calorie calculator, helping you track your intake, plan your meals.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 flex gap-x-16 text-[26px] text-white">
                        <button className="bg-amber-500 py-2 px-6 rounded-3xl w-[180px] h-[60px] text-center font-semibold transition-colors duration-300 hover:bg-black hover:text-amber-500">
                            JOIN US
                        </button>
                        <button className="bg-amber-500 py-2 px-6 rounded-3xl w-[180px] h-[60px] text-center font-semibold transition-colors duration-300 hover:bg-black hover:text-amber-500">
                            TDEE CAL
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero
