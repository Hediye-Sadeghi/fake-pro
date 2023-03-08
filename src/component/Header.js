import { Link } from "react-router-dom";
import { CommenButton } from "../component/commen/CommenButton";

const Header = () => {
  return (
    <div className="App relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div
        style={{ transform: "rotateY(180deg)" }}
        className="inset-y-0 top-0 left-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
      >
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="images/programmer.jpg"
          alt=""
        />
      </div>
      <div className="z-20 flex w-full text-right max-w-xl mx-auto md:px-0 lg:px-4 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 flex text-3xl leading-10 font-bold tracking-wide text-blue-900 sm:text-4xl">
             داستان برنامه نویس
            <br className="hidden md:block" />
            شدنت از اینجا شروع میشه ! {' '}
          </h2>
          <p className="pr-4 mb-5 text-base text-blue-700 md:text-lg">
            یادگیری برنامه نویسی آرزو نیست , فقط نیاز هست تلاش و تمرین داشته
            باشید, بقیه اش با بحر
          </p>
          <div className="flex text-right">
            <CommenButton>شروع یادگیری</CommenButton>
            <Link
              href="/"
              aria-label=""
              className="items-center font-semibold border border-blue-100 bg-blue-100 p-2 shadow-md rounded-lg text-orange-700 hover:bg-blue-50 hover:border hover:border-blue-300"
            >
              مشاوره تخصصی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
