import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import Home from '../pages/home/home'
import About from '../pages/about/aboutt'
import Maincourse from '../pages/courses/maincourse';
import Galleryy from '../pages/gallery/gallery'
import Career from '../pages/career/career'
import Contact from '../pages/contact/contact'
import Dgcourse from '../pages/courses/dgcourse';
import Othercourse from '../pages/courses/othercourse';
import Maingallery from '../pages/gallery/maingallery';
import Dgone from '../pages/couseinner/dgone';
import Dgtwo from '../pages/couseinner/dgtwo';
import Dgthree from '../pages/couseinner/dgthree';
import Dgfour from '../pages/couseinner/dgfour';
import Dgfive from '../pages/couseinner/dgfive';
import Dgsix from '../pages/couseinner/dgsix';
import Otherone from '../pages/couseinner/otherone';
import Othertwo from '../pages/couseinner/othertwo';
import Otherthree from '../pages/couseinner/otherthree';
import Otherfour from '../pages/couseinner/otherfour';
import Otherfive from '../pages/couseinner/otherfive';
import Othersix from '../pages/couseinner/othersix';
const Routing = () => {
    const [idactive, setIdactive] = useState(null)
    const getDataId = (dataa) => {
        setIdactive(dataa)
        setTimeout(() => {
            setIdactive(null)
        }, 500);
    }
    return (
        <BrowserRouter>
            <Header idd={idactive}/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route index element={<Home receive={getDataId}/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/courses' element={<Maincourse/>}/>
                <Route path='/gallery' element={<Galleryy/>}/>
                <Route path='/maingallery/:cat' element={<Maingallery/>}/>
                <Route path='/career' element={<Career />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/dgcourse' element={<Dgcourse/>}/>
                <Route path='/othercourse' element={<Othercourse />}/>
                <Route path='/dg course/bsc nautical science' element={<Dgone />}/>
                <Route path='/dg course/diploma in nautical science' element={<Dgtwo/>}/>
                <Route path='/dg course/electro technical officer' element={<Dgthree/>}/>
                <Route path='/dg course/certificate course in maritime catering' element={<Dgfour/>}/>
                <Route path='/dg course/graduate marine engineer' element={<Dgfive/>}/>
                <Route path='/dg course/training for general purpose rating' element={<Dgsix/>}/>
                <Route path='/dg course/bsc in cruise line and hospitality management' element={<Otherone/>}/>
                <Route path='/dg course/mba in maritime operations' element={<Othertwo/>}/>
                <Route path='/dg course/mba in hospitality operations' element={<Otherthree/>}/>
                <Route path='/dg course/marine accident investigation' element={<Otherfour/>}/>
                <Route path='/dg course/search and rescue on scene coordinator' element={<Otherfive/>}/>
                <Route path='/dg course/pilot training' element={<Othersix/>}/>
            </Routes>
            <Footer receive={getDataId}/>
        </BrowserRouter>
    );
}

export default Routing;
