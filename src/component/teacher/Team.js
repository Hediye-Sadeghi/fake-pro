import React from 'react'

import teacher from './../../core/teacherDatas';
import { Link } from 'react-router-dom';

export default function Team({ name, expertise, avatar }) {
    return (

        <div className="flex flex-col bg-white max-w-sm shadow-lg py-8 px-10 md:px-8 rounded-xl  hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="flex flex-col text-center md:text-left">
                    <div class="font-medium text-lg text-gray-800">
                        {name}
                    </div>
                    <div class="text-gray-500 mb-3 whitespace-nowrap">
                        {expertise}
                    </div>
                    <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                        <a class="hover:cursor-pointer hover:text-blue-500">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a class="hover:cursor-pointer hover:text-blue-500">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a class="hover:cursor-pointer hover:text-blue-500">
                            <i class="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
                <img
                    class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto"
                    src={avatar}
                    alt=""
                />
            </div>
        </div>
       
    )
}
