import React from 'react'

import teacher from './../../core/teacherDatas';
import { Link } from 'react-router-dom';

export default function Team() {
    return (
        <div className="min-h-screen flex flex-col py-10">
            <p className="text-center text-lg sm:text-3xl py-10  font-medium">
                تیم ما
            </p>
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">

 
            {
                teacher.map((tea)=>(
                  <Link key={tea.id}  to={`/teacher-info/${tea.id}`}>
                    <div className="flex flex-col bg-white max-w-sm shadow-lg py-8 px-10 md:px-8 rounded-xl  hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div class="flex flex-col text-center md:text-left"> 
                                <div class="font-medium text-lg text-gray-800">{tea.name}</div>
                                <div class="text-gray-500 mb-3 whitespace-nowrap">{tea.expertise}</div>
                                <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                    <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
                                    <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-facebook-square"></i></a>
                                    <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-github-square"></i></a>
                                </div>
                            </div>
                            <img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={tea.avatar} alt="" />
                            
                        </div>
                    </div>
                  </Link>
                ))
            }





            </div>
        </div>
    )
}
