import {Routes, Route } from "react-router-dom";
import Home from "../pages/Hompage";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Landingpage from "../pages/Landing";
import WriteBlog from "../pages/WriteBlog";
import About from "../pages/About";
import AboutAuthor from "../pages/AboutAuthor";
import Contactpage from "../pages/Contact";
import FAQPage from "../pages/FAQ";
import Categories from "../pages/Categories";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/write_blog" element={<WriteBlog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/author" element={<AboutAuthor/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
  );
}

export default Router;
