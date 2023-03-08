import React ,{useState,useEffect} from "react";
import Navbar from './../Navbar';

import products from './../../core/productDatas';
import Category from './../Category/Category';
import CourseCard from './CourseCard';



const allCategories=['مرتب سازی پیش فرض',...new Set(products.map(menu=>menu.Category))]
export default function Courses() {

    
    const [allMenu,setAllMenu]=useState(products)
    const [currenPage,setCurrentPage]=useState()
    const [pageSize,setPageSize]=useState()
    const [categories,setCategories]=useState()
    const [filter,setFilter]=useState({})

    // useEffect(() => {
        
        
    // }, [])

    // useEffect(() => {
    //     setCurrentPage()
        
    // }, [])

    // useEffect(() => {
    //     allMenu()
    //     setFilter()
    // }, [])

    // useEffect(() => {
    //     setFilter()
    //     setCategories()
    // }, [])

    return (
        <div>
        <Navbar />

        <Category/>

        <CourseCard/>

        </div>
    )
}
