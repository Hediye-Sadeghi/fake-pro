import React from "react";

export default function Categorises() {
  return (
    <div class="text-blue-700">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="h-full w-full"
            style={{ transform: "rotateY(180deg)" }}
            src="/images/react.svg"
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-right text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-blue-900 text-lg title-font font-medium mb-3">
                برنامه نویسی وب و موبایل
              </h2>
              <p class="leading-8 text-justify text-base">
                توسعه وب و موبایل دامنه های شغلی کاملاً متفاوت دارند.تقاضا در
                بازار برای توسعه دهندگان تلفن همراه به سرعت در حال افزایش است...
              </p>
              <a class="mt-3 text-indigo-500 flex justify-end ml-1 items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-blue-900 text-lg title-font font-medium mb-3">
                هوش مصنوعی
              </h2>
              <p class="leading-8 text-justify text-base">
                هوش مصنوعی به انگلیسی Artificial intelligence که به طور مخفف آن
                را AI نیز می‌نامند، در واقع تکنولوژی است که به نحوی قابلیت تفکر
                دارد...
              </p>
              <a class="mt-3 text-indigo-500 flex justify-end ml-1 items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-blue-900 text-lg title-font font-medium mb-3">
                هک و امنیت
              </h2>
              <p class="leading-8 text-justify text-base">
                هک وب، حمله به نرم ‌افزار از طریق HTTP با استفاده از برنامه
                ‌هایی مثل مرورگر کروم، دست کاری در رابط کاربری یا دستکاری عناصر
                HTTP غیرموجود در رابط کاربری است...
              </p>
              <a class="mt-3 text-indigo-500 flex justify-end ml-1 items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
