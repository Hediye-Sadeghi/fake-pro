import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from './../layout/Navbar';
import Footer from './../layout/Footer';
import { HeaderSection } from './../commen/HeaderSection';
import CourseCard from './../course/CourseCard';
import ArticleCard from './../Articles/ArticleCard';
import products from './../../core/productDatas';
import article from './../../core/articlesData';

export default function Search() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/search/${value}`)
  //     .then((res) => res.json())
  //     .then((allData) => {
  //       console.log(allData);
  //       setArticles(allData.allResultArticles);
  //       setCourses(allData.allResultCourses);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <div className="courses">
        <div className="container">
          <HeaderSection>نتیجه دوره‌ها برای جستجوی شما</HeaderSection>
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                    دوره‌ای برای جستجوی شما وجود ندارد
                  </div>
                ) : (
                    <>
                      {courses.map((course) => (
                        <CourseCard key={course._id} {...course} />
                      ))}
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courses">
        <div className="container">
          <HeaderSection>نتیجه مقالات برای جستجوی شما</HeaderSection>

          <div className="articles__content">
            <div className="row">
              {articles.length === 0 ? (
                <div className="alert alert-warning">
                  مقاله‌ای برای جستجوی شما وجود ندارد
                </div>
              ) : (
                  <>
                    {articles.map((article) => (
                      <ArticleCard {...article} key={article._id} />
                    ))}
                  </>
                )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
