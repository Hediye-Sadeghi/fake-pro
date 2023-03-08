import CourseDetailBox from "../CourseDetailBox/CourseDetailBox";
import Footer from './../Footer';
import Breadcrumb from './../Breadcrumb/Breadcrumb';
import Navbar from './../Navbar';
import { Link, useParams } from 'react-router-dom';
import teacher from './../../core/teacherDatas';
import React, { useState } from 'react'
import products from './../../core/productDatas';


export default function CourseInfo() {

  const { courseName } = useParams()
  const product = products.find((product) => product.courseName === courseName)

  const [courseDetails, setCourseDetails] = useState({});

  const AddToCartHandler = () => {
    console.log('helooooooo');

  }

  return (
    <>
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "آموزش برنامه نویسی فرانت‌اند",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "دوره متخصص جاوا اسکریپت",
            to: "course-info/js-expert",
          },
        ]}
      />
      <section class="course-info">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="grid grid-cols-1 row-gap-8 md:grid-cols-2">
            <div class="mx-5 text-right">
              <h1 class="my-6 text-xl text-blue-900 font-bold">
                {product.title}

              </h1>
              <p class="text-base px-3 text-blue-700 my-8">
                امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند.
                به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
                Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک
                های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس
                عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار
                استفاده می شوند را به خوبی بلد باشید
              </p>
              <div class="my-6 text-center">
                <a href="#" class="ml-7 text-gray-400">
                  <i
                    class="fab fa-telegram-plane"
                    style={{ fontSize: "32px" }}
                  ></i>
                </a>
                <a href="#" class="ml-7 text-gray-400">
                  <i class="fab fa-twitter" style={{ fontSize: "32px" }}></i>
                </a>
                <a href="#" class="ml-7 text-gray-400">
                  <i class="fab fa-facebook-f" style={{ fontSize: "32px" }}></i>
                </a>
              </div>
            </div>

            <div class="mx-5">
              <video
                src=""
                poster="/images/js_project.png"
                class="w-full my-6 rounded-lg"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>

      <main class="mt-8">
        <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="grid grid-cols-1 row-gap-8 md:grid-cols-2">
            <div>
              <div class="course">
                <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                  <div class="grid grid-cols-1 row-gap-8 md:grid-cols-3 sm:items-center">
                    <CourseDetailBox
                      icon="graduation-cap"
                      title="وضعیت دوره:"
                      text="به اتمام رسیده"
                    />
                    <CourseDetailBox
                      icon="clock"
                      title=" مدت زمان دوره:"
                      text="19 ساعت"
                    />
                    <CourseDetailBox
                      icon="calendar-alt"
                      title="آخرین بروزرسانی:"
                      text="1401/03/02"
                    />
                  </div>
                </div>

                <div class="rounded-lg shadow-lg my-4 flex justify-center pt-5 bg-orange-100">
                  <div class="flex items-center mb-4">
                    <i class="fas fa-chart-line text-3xl text-gray-500"></i>
                    <span class="text-2xl text-blue-900 mr-3">
                      درصد پیشرفت دوره: 100%
                    </span>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div class="shadow-lg p-6 rounded-lg">
                  <div>
                    <span class="text-xl text-blue-900 font-bold ">
                      {product.title}
                    </span>
                    <img
                      src={product.avatar}
                      alt="course image"
                      class="mt-6 rounded-lg block img-fluid w-full"
                    />
                    <p class="text-base text-blue-700 mt-5 text-right">
                      کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد
                      و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود
                      که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون
                      بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت
                      خواهید شد و حتی ممکن است ناامید شوید!
                    </p>
                    <p class="text-base text-blue-700 mt-5 text-right">
                      در این دوره نحوه کار با 20 مورد از پر استفاده ترین
                      کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان
                      آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار
                      .نداشته باشید
                    </p>
                  </div>
                  <div class="my-5">
                    <span class="text-xl text-blue-900 mt-5 text-right">
                      هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب
                      درآمد)
                    </span>
                    <img
                      src="/images/2.jpg"
                      alt="course info image"
                      class="my-6 rounded-lg block img-fluid"
                    />
                    <p class="text-base text-blue-700 mt-5 text-right">
                      وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم،
                      از کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در
                      حالی که من اولین بارم بود اسم Formik را می شنیدم و تا اون
                      موقع از این کتابخانه ها استفاده نکرده بودم.
                    </p>
                    <p class="text-base text-blue-700 mt-5 text-right">
                      همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از
                      مهم ترین مباحثی هستند که هر برنامه نویس وب برای ورود به
                      بازار کار و کسب درآمد بهتر، راحت و بیشتر باید با آن ها کار
                      کرده باشد{" "}
                    </p>
                    <p class="text-base text-blue-700 mt-5 text-right">
                      همان طور که از اسم این دوره مشخص است، هدف از این دوره
                      آموزش 20 مورد از کاربردی ترین و پر استفاده ترین کتابخانه
                      های جاوا اسکریپت است تا شما بتوانید بعد از این دوره با
                      قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه
                      دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت
                      وارد بازار کار شده و کسب درآمد کنید.
                    </p>
                    <p class="text-base text-blue-700 mt-5 text-right">
                      شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی
                      کار نکرده باشید، باید بلد باشید که چطور باید یک کتابخانه
                      جدید را یاد بگیرید. فرض کنید یک یک کتابخانه جدید ساخته شد.
                      آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
                    </p>
                    <p class="text-base text-blue-700 mt-5 text-right">
                      در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه،
                      نحوه یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش
                      دهیم تا بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص
                      خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و
                      وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
                    </p>
                  </div>
                  <div class="mt-7">
                    <a
                      href="#"
                      class="border rounded-lg text-lg text-blue-700 p-2 m-1 bg-orange-100 hover:bg-orange-500"
                    >
                      دانلود همگانی ویدیوها
                    </a>
                    <a
                      href="#"
                      class="border rounded-lg text-lg text-blue-700 p-2 m-1 bg-orange-100 hover:bg-orange-500"
                    >
                      دانلود همگانی پیوست‌ها
                    </a>
                  </div>
                </div>

                <div class="shadow-lg rounded-lg p-6 my-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <img
                        src="/images/asghari.jpg"
                        alt="Teacher Profile"
                        class="shadow-lg w-16 h-auto mr-3 rounded-full"
                      />
                      <div class="flex flex-col mr-10">
                        <a href="#" class="text-blue-900 text-lg ">
                          مهدی اصغری
                        </a>
                        <span class="text-blue-900 text-lg">
                          Front End & Back End Developer
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center bg-orange-100 p-3 rounded-lg">
                      <Link to={`/teacher-info/${teacher.id}`}>
                        <i class="fas fa-chalkboard-teacher text-2xl text-gray-500"></i>
                        <span class="text-lg font-bold text-blue-900 mr-2">
                          مدرس
                     </span>
                      </Link>
                    </div>
                  </div>
                  <p class="text-base text-blue-700 mt-6">
                    اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2
                    سال با زبان جاوا اندروید کار میکردم .بعد تصمیم گرفتم در
                    زمینه وب فعالیت داشته باشم.و..
                  </p>
                </div>
              </div>
            </div>

            <div class="p-2">
              <div class="sticky top-12">
                <div class="rounded-lg p-10 shadow-lg">
                  <div class="text-center bg-orange-500 p-6 rounded-xl shadow-md cursor-pointer hover:bg-orange-100">

                    {courseDetails.isUserRegisteredToThisCourse === true ? (
                      <span class="text-2xl font-bold text-blue-900">
                        <i class="fas fa-graduation-cap text-3xl mx-2 text-blue-900"></i>
                        دانشجوی دوره هستید
                         </span>
                    ) : (
                        <Link to={`/shopinglist/${products.id}`}>
                          <span class="text-2xl font-bold text-blue-900" onClick={AddToCartHandler}>
                            ثبت نام در دوره
                       </span>

                        </Link>

                      )}

                  </div>
                </div>
                <div class="rounded-lg p-10 shadow-lg">
                  <div class="course-info__total">
                    <div class="flex justify-center items-center p-3 border rounded-lg">
                      <div>
                        <i class="fas fa-user-graduate text-3xl text-gray-500 mx-2"></i>
                        <span class="text-blue-700">تعداد دانشجو :</span>
                        <span class="bg-orange-200 p-1 rounded-md mx-2 text-blue-900">
                          178
                        </span>
                      </div>
                    </div>
                    <div class="flex justify-evenly pt-4 text-gray-500">
                      <div class="relative flex items-center">
                        <i class="far fa-comments text-3xl text-gray-500 mx-2"></i>
                        <span class="text-lg text-blue-700 mr-3">
                          67 دیدگاه
                        </span>
                      </div>
                      <div class="relative flex items-center">
                        <i class="far fa-eye text-3xl text-gray-500 mx-2"></i>
                        <span class="text-lg text-blue-700 mr-3">
                          14,234 بازدید
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg p-10 shadow-lg">
                  <div class="flex items-center text-gray-500">
                    <i class="fas fa-link text-3xl"></i>
                    <span class="text-3xl text-blue-700 mr-3">لینک کوتاه</span>
                  </div>
                  <span class="block border p-2 rounded-lg my-2 text-blue-500 text-lg">
                    https://bahr.ir/?p=117472
                  </span>
                </div>
                <div class="rounded-lg p-10 shadow-lg">
                  <span class="text-2xl text-blue-800">دوره های مرتبط</span>
                  <ul class="my-2">
                    <li class="">
                      <a href="#" class="flex items-center">
                        <img
                          src="/images/js_project.png"
                          alt="Course Cover"
                          class="w-1/4 m-1  rounded-lg"
                        />
                        <span class="text-lg text-blue-700 mr-3">
                          پروژه های تخصصی با جاوا اسکریپت
                        </span>
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="flex items-center">
                        <img
                          src="/images/fareelancer.png"
                          alt="Course Cover"
                          class="w-1/4 m-1  rounded-lg"
                        />
                        <span class="text-lg text-blue-700 mr-3">
                          تعیین قیمت پروژه های فریلنسری
                        </span>
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="flex items-center">
                        <img
                          src="/images/nodejs.png"
                          alt="Course Cover"
                          class="w-1/4 m-1  rounded-lg"
                        />
                        <span class="text-lg text-blue-700 mr-3">
                          دوره Api نویسی
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

