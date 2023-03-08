import React, { useEffect } from 'react'

import products from './../../core/productDatas';
import { Link } from 'react-router-dom';

export default function Shopinglist() {

    const handleRemove = (id) => {
        const arr = products.filter((item) => item.id !== id);
    };


    return (
        <div className="mx-auto grid max-w-5xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
            <div className=" border-2 rounded px-6">

                <ul
                    data-te-stepper-init
                    class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                    <li
                        data-te-stepper-step-ref
                        data-te-stepper-step-active
                        class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="after:w-100 flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <span
                                data-te-stepper-head-icon-ref
                                class="my-6  mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-red-100 text-sm font-medium text-[#40464f]">
                                1
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                سبد خرید
                           </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="w-100 absolute p-4 transition-all duration-500 ease-in-out">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </li>
                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="before:w-100 after:w-100 flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <span
                                data-te-stepper-head-icon-ref
                                class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                2
                            </span>
                            <span
                                data-te-stepper-head-text-ref
                                class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                جزئیات پرداخت
                            </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="w-100 absolute left-0 translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </li>
                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="before:w-100 flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <span
                                data-te-stepper-head-icon-ref
                                class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                3
                           </span>
                            <span
                                data-te-stepper-head-text-ref
                                class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                اتمام عملیات خرید
                           </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="w-100 absolute left-0 translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col border-2 rounded p-5">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-right text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">محصول</th>
                                        <th scope="col" class="px-6 py-4">قیمت</th>
                                        <th scope="col" class="px-6 py-4">تعداد</th>
                                        <th scope="col" class="px-6 py-4">جمع جزء</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">آموزش کاربردی Typescript بصورت پروژه محور</td>
                                        <td class="whitespace-nowrap px-6 py-4">	1,350,000 تومان</td>
                                        <td class="whitespace-nowrap px-6 py-4">
                                        <span>2</span>
                                        </td>
                                        <td class="whitespace-nowrap px-6 py-4">1,350,000 تومان</td>
                                        <td class="whitespace-nowrap px-6 py-4"><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">حذف</button></td>
                                    </tr>

                                </tbody>
                            </table>
                            <Link to='/'>
                                <button type="button" class=" my-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">بازگشت به فروشگاه</button>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto grid rtl grid-cols-1 text-right gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="w-full">
                        <div className="border-b flex items-center justify-between py-1 mb-3">
                            <p> جمع جزء</p>
                            <p>1,350,000 تومان</p>
                        </div>
                        <div className="border-b flex items-center justify-between p-1">
                            <p>مجموع</p>
                            <p>1,350,000 تومان</p>
                        </div>
                        <button type="button" class="w-full mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> نهایی کردن سفارش</button>
                    </div>
                    <div className="f">
                        <form class="checkout_coupon mb-0" method="post">
                            <div class="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
                               
                                <input type="text" name="coupon_code " class="input-text border-dashed border-2 border-gray-600 p-1 focus:outline-0 " id="coupon_code" placeholder="کد تخفیف" />
                                <button type="submit" class="my-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2" name="apply_coupon" value="اعمال کدتخفیف">اعمال کدتخفیف</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
