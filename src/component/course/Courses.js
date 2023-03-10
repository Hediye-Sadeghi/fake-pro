import React, { useState, useEffect } from "react";
import Navbar from './../Navbar';
import products from './../../core/productDatas';
import Category from './../Category/Category';
import CourseCard from './CourseCard';
import Footer from './../Footer';
import Pagination from './../pagination/Pagination';
import { Link } from 'react-router-dom';
import Breadcrumb from './../Breadcrumb/Breadcrumb';




export default function Courses() {

    const [courses, setCourses] = useState([])
    const [shownCourses, setShownCourses] = useState([])


    return (
        <div>
            <Navbar />

            <Breadcrumb
                links={[
                    { id: 1, title: "خانه", to: "" },
                    {
                        id: 2,
                        title: "تمامی دوره ها",
                        to: "courses",
                    },
                ]}
            />

            <Category />

            <div className="mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {shownCourses.map((pro) => (
                    <Link key={pro.id} to={`/course-info/${pro.courseName}`}>

                        <CourseCard title={pro.title} avatar={pro.avatar} price={pro.price} />
                    </Link>
                ))}
            </div>

            <Pagination
                items={courses}
                itemsCount={1}
                pathname='/courses'
                setShownCourses={setShownCourses}
            />

            <Footer />

        </div>
    )
}
