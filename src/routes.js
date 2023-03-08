
import Landing from './component/Landing';
import CourseInfo from './component/course/CourseInfo';
import Courses from './component/course/Courses';
import ArticleInfo from './component/Articles/ArticleInfo';
import Articles from './component/Articles/Articles';
import TeacherInfos from './component/teacher/TeacherInfos';
import Contact from './component/Contact/Contact';
import AboutUs from './component/About/AboutUs';
import Register from './component/form2/Register/Register';
import Login from './component/form2/Login/Login';
import Shopinglist from './component/Shopinglist/Shopinglist';


import AdminPanel from "./component/AdminPanel/index";
import Users from "./component/AdminPanel/Users/Users";
import AdminCourses from "./component/AdminPanel/Courses/Courses";
import Menus from "./component/AdminPanel/Menus/Menus";
import AdminArticles from "./component/AdminPanel/Articles/Articles";
import Draft from "./component/AdminPanel/Articles/Draft";
import AdminCategory from "./component/AdminPanel/Category/Category";
import AdminContact from "./component/AdminPanel/Contact/Contact";
import Sessions from "./component/AdminPanel/Sessions/Sessions";
import Comments from "./component/AdminPanel/Comments/Comments";
import Offs from "./component/AdminPanel/Offs/Offs";
import Discounts from "./component/AdminPanel/Discounts/Discounts";
import PAdminIndex from "./component/AdminPanel/Index/Index";
import Tickets from "./component/AdminPanel/Tickets/Tickets";



const routes = [
    { path: '/', element: <Landing /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/course-info/:courseName', element: <CourseInfo /> },
    { path: '/courses', element: <Courses /> },
    { path: '/article-info/:articleName', element: <ArticleInfo /> },
    { path: '/articles/:page', element: <Articles /> },
    { path: '/teacher-info/:ID', element: <TeacherInfos /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/contact', element: <Contact /> },
    { path: '/shopinglist/:ID?', element: <Shopinglist /> },

    {
        path: "/p-admin/*", 
        element: (
            
                <AdminPanel />
           
        ),
        children: [
            { path: "", element: <PAdminIndex /> },
            { path: "users", element: <Users /> },
            { path: "courses", element: <AdminCourses /> },
            { path: "menus", element: <Menus /> },
            { path: "articles", element: <AdminArticles /> },
            { path: "articles/draft/:shortName", element: <Draft /> },
            { path: "category", element: <AdminCategory /> },
            { path: "contacts", element: <AdminContact /> },
            { path: "sessions", element: <Sessions /> },
            { path: "comments", element: <Comments /> },
            { path: "offs", element: <Offs /> },
            { path: "discounts", element: <Discounts /> },
            { path: "tickets", element: <Tickets /> },
        ],
    },

]

export default routes