import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import Team from './teacher/Team';
import CourseCard from './course/CourseCard';
import ArticleCard from './Articles/ArticleCard';
import Header from './Header';
import AOS from 'aos';
import Statistic from './Statistic';
import { CommenButton } from './commen/CommenButton';

AOS.init();
export default function Landing() {
    return (
        <div>

            <div>
                <Navbar />


                <Header />

                <Statistic/>



                    <p  id='start' className="text-center text-lg sm:text-3xl  pb-5 font-medium">
                        در چه حوزه ای می خوای متخصص بشی ؟
                    </p>
                    <p className="text-center pb-10" > بازار برای متخصص هاست و هیچ موقع بی کار نمی مونید</p>
                    <CourseCard />
                    <Link to='/courses'><div className="w-36 mx-auto"><CommenButton>نمایش بیشتر</CommenButton></div></Link>
                    


               
                    <p className="text-center text-lg sm:text-3xl pt-10 pb-5 font-medium">
                        اخبار و مقالات
                    </p>
                    <ArticleCard />
               

                
                    <Team />
                




                <Footer />

                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sahilnetic" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            </div>


        </div>
    )
}
