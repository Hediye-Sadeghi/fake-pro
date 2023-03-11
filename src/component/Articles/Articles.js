import React, { useState } from "react";
import Category from './../Category/Category';
import Navbar from './../layout/Navbar';
import Breadcrumb from './../commen/Breadcrumb';
import Footer from './../layout/Footer';
import article from './../../core/articlesData';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';



export default function Articles() {

    return (
        <div>
            <Navbar />

            <Breadcrumb
                links={[
                    { id: 1, title: "خانه", to: "" },
                    {
                        id: 2,
                        title: "تمامی اخبار و مقالات",
                        to: "articles",
                    },
                ]}
            />


            <div className="inner-carousel mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {article.map((arti) => (
                    <Link to={`/article-info/${arti.articleName}`}>
                        <ArticleCard description={arti.description} img={arti.img} title={arti.title} uploadDate={arti.uploadDate} />
                    </Link>
                ))}
            </div>


            <Footer />


        </div>
    )
}
