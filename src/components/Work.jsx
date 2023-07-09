import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import airLine from '../assets/airline.png'
import futureDoc from '../assets/futureDoc.png'
import riyasaka from '../assets/Riyasaka.jpeg'
import slHerbals from '../assets/lanka_herbals.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className=' py-6'>// Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${airLine})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            HTML, CSS, JS, PHP
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/IT21064418/IWT_Airline_Management.git'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${futureDoc})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            Java Servlets
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/IT21064418/E_Channeling_System.git'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${riyasaka})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            Java Mobile Application
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/IT21064418/MAD_Titans_Riyasaka.git'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${slHerbals})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/IT21064418/Y3.S1.WE.SE.01.01_CSSE_21.git'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${WorkImg})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                    style={{backgroundImage: `url(${realEstate})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*  Hover effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Work