import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import CommentsTextArea from "../CommentsTextArea/CommentsTextArea";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useParams } from 'react-router-dom';
import article from './../../core/articlesData';

export default function ArticleInfo() {

  const { articleName } = useParams()
  const arti = article.find((artic) => artic.articleName === articleName)


  return (
    <>
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "مقاله ها",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "ویو Vs ری‌اکت",
            to: "course-info/js-expert",
          },
        ]}
      />

      <main class="main">
        <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="">
            <div>
              <div class="shadow-lg rounded-lg p-5 my-2">
                <h1 class="text-3xl font-bold text-blue-900 py-5 border-b-2 border-blue-50">
                  {arti.description}
                </h1>
                <div class="flex justify-center py-5">
                  <div class="flex justify-center mx-2">
                    <i class="far fa-folder text-xl text-gray-300"></i>
                    <a
                      href="#"
                      class="lg:text-lg text-blue-300 mr-2 sm:text-sm"
                    >
                      {" "}
                      جاوا اسکریپت
                    </a>
                  </div>
                  <div class="flex justify-center mx-2">
                    <i class="far fa-user text-xl text-gray-300"></i>
                    <span class="lg:text-lg text-blue-300 mr-2 sm:text-sm">
                      {" "}
                      ارسال شده توسط قدیر
                    </span>
                  </div>
                  <div class="flex justify-center mx-2">
                    <i class="far fa-clock text-xl text-gray-300"></i>
                    <span class="lg:text-lg text-blue-300 mr-2 sm:text-sm">
                      {" "}
                      ارسال شده توسط قدیر
                    </span>
                  </div>
                  <div class="flex justify-center mx-2">
                    <i class="far fa-eye text-xl text-gray-300"></i>
                    <span class="lg:text-lg text-blue-300 mr-2 sm:text-sm">
                      {" "}
                      2.14k بازدید
                    </span>
                  </div>
                </div>
                <div class="grid lg:grid-cols-2 sm:grid-col-1 sm:my-8">
                  <div class="flex lg:flex-col sm:block">
                    <div class="flex justify-center lg:mt-32 sm:mt-16">
                      <img
                        src="/images/svgs/star_fill.svg"
                        class="flex justify-center w-8 my-2"
                      />
                      <img
                        src="/images/svgs/star_fill.svg"
                        class="flex justify-center w-8 my-2"
                      />
                      <img
                        src="/images/svgs/star_fill.svg"
                        class="flex justify-center w-8 my-2"
                      />
                      <img
                        src="/images/svgs/star_fill.svg"
                        class="flex justify-center w-8 my-2"
                      />
                      <img
                        src="/images/svgs/star.svg"
                        class="flex justify-center w-8 my-2"
                      />
                    </div>
                    <span class="text-lg text-blue-800 flex flex-col">
                      4.2/5 - (5 امتیاز)
                    </span>
                  </div>
                  <img
                    src="/images/blog/1.png"
                    alt="Article Cover"
                    class="w-11/12 my-3 pl-10 rounded-lg"
                  />
                </div>

                <p class="text-right text-md text-blue-800 px-10 leading-8">
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
                  اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
                  یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
                  بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
                  چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
                  همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
                  حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
                  زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
                  در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                  برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
                  بهترین سایت آموزش جاوا اسکریپت کدام است.
                </p>

                <div class="bg-gray-200 m-10 rounded-lg py-8 leading-10">
                  <span class="text-2xl text-blue-900 font-bold">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul>
                    <li class="article-read__item">
                      <a href="#" class="text-xl text-orange-500 leading-10">
                        معرفی بهترین سایت ‌های آموزش جاوا اسکریپت
                      </a>
                    </li>
                    <li class="article-read__item">
                      <a href="#" class="text-xl text-orange-500 leading-10">
                        یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی بحر!
                      </a>
                    </li>
                    <li class="article-read__item">
                      <a href="#" class="text-xl text-orange-500 leading-10">
                        ثبت نام در دوره‌ های جاوا اسکریپت بحر
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/2.png"
                  alt="Article Image"
                  class="block m-auto rounded-lg"
                />
                <div class="m-10">
                  <h2 class="text-2xl font-bold text-orange-600 leading-8">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p class="text-right text-md text-blue-800 px-10 leading-8 mt-6">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/4.png"
                    alt="article body img"
                    class="block m-auto rounded-lg"
                  />
                </div>
                <div class="article-section">
                  <h2 class="text-xl text-orange-500 leading-10">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p class="text-right text-md text-blue-800 px-10 leading-8 mt-6">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                </div>
                <div class="article-section">
                  <h2 class="text-xl text-orange-500 leading-10">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p class="text-right text-md text-blue-800 px-10 leading-8 mt-6">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/3.jpg"
                    alt="article body img"
                    class="block m-auto rounded-lg"
                  />
                </div>

                <div class="flex justify-start pr-8">
                  <span class="text-xl font-bold text-blue-400">
                    اشتراک گذاری :
                  </span>
                  <a href="#" class="mx-2">
                    <i class="fab fa-telegram-plane text-xl text-gray-400"></i>
                  </a>
                  <a href="#" class="mx-2">
                    <i class="fab fa-twitter text-xl text-gray-400"></i>
                  </a>
                  <a href="#" class="mx-2">
                    <i class="fab fa-facebook-f text-xl text-gray-400"></i>
                  </a>
                </div>
              </div>

              <div class="bg-gray-200 m-10 rounded-lg py-8 leading-10">
                <div class="row">
                  <div class="col-6">
                    <div class="flex justify-start mr-5">
                      <a href="#">
                        <i class="fas fa-arrow-right text-3xl pl-5 text-gray-400"></i>
                      </a>
                      <a href="#" class="text-md text-blue-700">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="flex justify-end ml-5">
                      <a href="#" class="text-md text-blue-700">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                      <a href="#">
                        <i class="fas fa-arrow-left text-3xl pr-5 text-gray-400"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CommentsTextArea />
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
