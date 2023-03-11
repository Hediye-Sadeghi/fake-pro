import React from 'react'
import { Outlet } from 'react-router-dom'
import './Index.css'
import Sidebar from './Sidebar/Sidebar';
import Footer from './../layout/Footer';
import Navbar from './../layout/Navbar';

export default function Index() {
    return (
        <>
            <Navbar />

            <section class="content px-10">
                <div class="content-header">
                    <div class="container">
                        <span class="content-header__title">حساب کاربری من</span>
                        <span class="content-header__subtitle">پیشخوان</span>
                    </div>
                </div>
                <div class="content-main">
                    <div class="container">
                        <div class="row flex">
                            <Sidebar />

                            <Outlet />

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
