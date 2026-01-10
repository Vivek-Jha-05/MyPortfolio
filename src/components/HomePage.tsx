import React, { useEffect, useState } from "react";
import Header from "./Header"
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Skills from './Skills';
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { Toaster } from 'react-hot-toast';

const HomePage = ()=> {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])

    return <div>
        { loading !== true ? <>
        <Toaster/>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        <Mail/>
        <Social/>
        </> :
        <div className="min-h-[100vh] flex items-center overflow-hidden justify-center" >
        <Loader />
        </div>}
    </ div>
};

export default HomePage;