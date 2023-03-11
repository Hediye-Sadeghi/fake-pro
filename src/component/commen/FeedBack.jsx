import { Button } from "./Button";

const FeedBack = () => {
  return (
    <div class="md:w-2/3 bg-white flex flex-col justify-evenly md:ml-auto w-full text-right rounded-lg px-4 shadow-lg">
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm pr-2 text-blue-900">
          نام کامل
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm pr-2 text-gray-600">
          آدرس ایمیل
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm pr-2 text-gray-600">
          پیام کامل
        </label>
        <textarea
          id="message"
          name="message"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <Button>ارسال نظر</Button>
    </div>
  );
};

export default FeedBack;
