import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Team from './teacher/Team';
import CourseCard from './course/CourseCard';
import ArticleCard from './Articles/ArticleCard';
import Header from './Header';
import AOS from 'aos';
import { CommenButton } from './commen/CommenButton';
import products from './../core/productDatas';
import article from './../core/articlesData';
import teacher from './../core/teacherDatas';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { HeaderSection } from "./commen/HeaderSection";
import Categorises from './categories/Categorises';
import StudentIdea from './studentIdea/StudentIdea';
import Ideas from './Ideas/Ideas';
import './Landing.css'
import Statistic from './Statistic/Statistic';


AOS.init();
export default function Landing() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>

            <div>
                <Navbar />

                <input
                    type="text"
                    className="landing__searchbar-input"
                    placeholder="چه چیزی دوست داری یاد بگیری ..."
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />


                <Header />

                <Statistic />



                <HeaderSection>در چه حوزه ای می خوای متخصص بشی ؟</HeaderSection>
                <p className="text-center pb-10" > بازار برای متخصص هاست و هیچ موقع بی کار نمی مونید</p>

                <div className="mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((pro) => (
                        <Link to={`/course-info/${pro.courseName}`}>

                            <CourseCard title={pro.title} avatar={pro.avatar} price={pro.price} />
                        </Link>
                    ))}
                </div>

                <Link to='/courses/1'><div className="w-36 mx-auto"><CommenButton>نمایش بیشتر</CommenButton></div></Link>


                <HeaderSection>دسته بندی</HeaderSection>
                <Categorises />




                <HeaderSection>اخبار و مقالات</HeaderSection>
                <div className="inner-carousel mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {article.map((arti) => (
                        <Link to={`/article-info/${arti.articleName}`}>
                            <ArticleCard description={arti.description} img={arti.img} title={arti.title} uploadDate={arti.uploadDate} />
                        </Link>
                    ))}
                </div>
                <Link to='/articles/1'><div className="w-36 mx-auto"><CommenButton>نمایش بیشتر</CommenButton></div></Link>




                <HeaderSection>تیم حرفه ای ما</HeaderSection>
                <div className=" flex flex-col">
                    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
                        {teacher.map((tea) => (
                            <Link key={tea.id} to={`/teacher-info/${tea.id}`}>

                                <Team name={tea.name} expertise={tea.expertise} avatar={tea.avatar} />
                            </Link>
                        ))}

                    </div>
                </div>



                <HeaderSection>نظرات دانشجویان</HeaderSection>
                <StudentIdea />

                <HeaderSection>انتقادات و پیشنهادات</HeaderSection>
                <Ideas />



                <Footer />

                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sahilnetic" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            </div>


        </div>
    )
}
