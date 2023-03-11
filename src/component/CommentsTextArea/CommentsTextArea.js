import React from "react";

export default function CommentsTextArea() {
  return (
    <div class="flex flex-col">
      <span class="text-xl text-blue-900 font-bold">دیدگاهتان را بنویسید</span>
      <span class="text-md text-blue-700 leading-10">
        <a href="#">با ... وارد شده اید.</a>
        <a href="#">خارج میشوید? </a>
      </span>
      <div class="flex flex-col">
        <span class="text-xl text-blue-900 my-2">دیدگاه </span>
        <textarea class="border border-gray-300 rounded-lg shadow-lg h-64 mx-12"></textarea>
      </div>
      <button type="submit" class="flex justify-start p-5 text-md font-bold text-blue-900 border border-orange-500 bg-orange-500 w-36 m-5 rounded-lg hover:bg-orange-200 hover:border hover:border-orange-300" onClick={() => console.log('کامنت ثبت شد')}>
        فرستادن دیدگاه
      </button>
    </div>
  );
}