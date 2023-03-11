import React from "react";
import FeedBack from "../commen/FeedBack";

export default function Ideas() {
  return (
    <div class="text-blue-700">
      <div class="container px-12 py-4 mx-auto flex flex-wrap ">
        <div class="flex justify-center lg:py-3 lg:w-1/2 lg:pr-12 lg:text-right">
          <FeedBack />
        </div> 
        <div class="lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="h-full w-full"
            src="/images/Ideas.svg"
          />
        </div>
      </div>
    </div>
  );
}
