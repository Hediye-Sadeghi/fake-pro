import React from 'react'
import Navbar from './../Navbar';
import Footer from './../Footer';

export default function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-right">

                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>

                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">درباره ما</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            داستان بحر در اردیبهشت ۱۳۹۴ شکل گرفت است و تا به امروز که در اینجا هستیم تمام تلاش خود را کرده‌ایم تا بتوانیم به کاربران ایرانی و علاقمند کمک کنیم تا بتوانند زبان‌ها و ابزارهای به‌روز جهانی را فرابگیرند و خود را آماده شروع کسب‌ و کار یا استخدام در شرکت‌های مختلف کنند.
                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12 text-right">
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"> هدف ما در بحر </h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">

                            ما به عنوان یک وبسایت آموزشی سعی داریم به همه شما عزیزان فارسی زبان کمک کنیم که در این دنیای بی کران از زبان ها و فریمورک‌ها و ابزارهای مختلف برنامه نویسی مسیر فعالیت خود را پیدا کنید و همچنین سعی داریم در این مسیر همراه شما باشیم تا این قابلیت را بدست بیاورید که از دانش کسب شد در کسب و کار خود یا برای استخدام در شرکتی که قصد فعالیت در آن را دارید استفاده کنید . هدف ما پیروزی شماست .
                            
                            از این رو تصمیم ما ایجاد کردن یک فضای دوستانه است، که هم برای آموزش و هم برای ایجاد ارتباط و حل مشکل برنامه نویسان مختلف در فضای وب فارسی مورد استفاده قرار بگیرد تا در کنار یادگیری ابزارهای جدید، به عنوان یک برنامه نویس بتوانید مشکلاتتان را در راکت حل کنید یا حتی قادر باشید شغل آینده خود را پیدا کنید.
                            
                       </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
