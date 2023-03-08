import React, { useState,useEffect } from "react";
import "./Category.css";
import products from './../../core/productDatas';
import { useParams } from "react-router-dom";

export default function Category({allCourses}) {



  const [courses, setCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("مرتب سازی پیش فرض");
  const [searchValue, setSearchValue] = useState("");
  const [coursesDisplayType, setCoursesDisplayType] = useState("row");


  const { categoryName } = useParams();

  useEffect(() => {
        console.log(allCourses);
        setCourses(allCourses);
        setOrderedCourses(allCourses);
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderedCourses(notFreeCourses);
        break;
      }
      case "last": {
        setOrderedCourses(courses);
        break;
      }
      case "first": {
        const reversedCourses = courses.slice().reverse();
        setOrderedCourses(reversedCourses);
        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status]);

  const statusTitleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
    const filteredCourses = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderedCourses(filteredCourses);
  };



  return (
    <>

      <section class="courses">
        <div class="max-w-7xl mx-auto">
          <div class="courses-top-bar">
            <div class="courses-top-bar__right bg-white-900">
              <div class="courses-top-bar__row-btn courses-top-bar__icon--active">
                <i class="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div class="courses-top-bar__column-btn">
                <i class="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div class="courses-top-bar__selection">
                <span class="courses-top-bar__selection-title">
                  مرتب سازی پیش فرض
                  <i class="fas fa-angle-down courses-top-bar__selection-icon"></i>
                </span>
                <ul class="courses-top-bar__selection-list">
                  <li class="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                    مرتب سازی پیش فرض
                  </li>
                  <li class="courses-top-bar__selection-item">
                    مربت سازی بر اساس محبوبیت
                  </li>
                  <li class="courses-top-bar__selection-item">
                    مربت سازی بر اساس امتیاز
                  </li>
                  <li class="courses-top-bar__selection-item">
                    مربت سازی بر اساس آخرین
                  </li>
                  <li class="courses-top-bar__selection-item">
                    مربت سازی بر اساس ارزان ترین
                  </li>
                  <li class="courses-top-bar__selection-item">
                    مربت سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div class="courses-top-bar__left">
              <form action="#" class="courses-top-bar__form">
                <input
                  type="text"
                  class="courses-top-bar__input"
                  placeholder="جستجوی دوره ..."

                />
                <i class="fas fa-search courses-top-bar__search-icon"></i>
              </form>
            </div>
          </div>



        </div>
      </section>


    </>
  );
}
