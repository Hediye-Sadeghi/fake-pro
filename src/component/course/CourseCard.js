import React from "react";
import products from "../../core/productDatas";
import { Link } from "react-router-dom"; 
import {CommenButton} from './../commen/CommenButton'
import Button from './../commen/Button2';

export default function CourseCard({avatar,title,price}) { 
  return (
    <div>
      
        
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className="relative flex justify-center overflow-hidden rounded-xl">
        <img src={avatar} alt="Hotel Photo" />
      </div>

      <div className="mt-1 p-2 block">
        <h2 className="text-blue-900 font-bold text-right">{title}</h2>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-sm font-bold text-[#6C63FF] text-right">
            {price}
          </p>
        </div>
        <div className="">
          <Button>سبد خرید</Button>
        </div>
      </div>
  </article>
    
    </div>
  );
}