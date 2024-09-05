import React, { useEffect } from 'react';
import './courses.css'
import d1 from '../../images/course/Dg1.jpg'
import d2 from '../../images/course/Dg2.jpg'
import d3 from '../../images/course/Dg3.jpg'
import d4 from '../../images/course/Dg4.jpg'
import d5 from '../../images/course/Dg5.jpg'
import d6 from '../../images/course/Dg6.jpg'
import o1 from '../../images/course/Ot1.jpg'
import o2 from '../../images/course/Ot2.jpg'
import o3 from '../../images/course/Ot3.jpg'
import o4 from '../../images/course/Ot4.jpg'
import o5 from '../../images/course/Ot5.jpg'
import o6 from '../../images/course/Ot6.jpg'

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
let c_data = [
    {
        id: 1,
        c_name: 'BSc Nautical Science',
        c_img: d1,
        c_det: 'B.Sc. Nautical Science is a 3-year undergraduate course that focuses on providing students with the necessary knowledge and skills required to become a deck officer in the merchant navy.',
        c_type: 'dg',
        path:'/dg course/bsc nautical science'
    },
    {
        id: 2,
        c_name: 'Diploma in Nautical Science (DNS)',
        c_img: d2,
        c_det: 'Diploma in Nautical Science is a 1-year course (2 Semesters) followed by compulsory one and half year (3 Semesters) on-board ship training that provides students with the basic knowledge and skills required. ',
        c_type: 'dg',
        path:'/dg course/diploma in nautical science'
    },
    {
        id: 3,
        c_name: 'Electro Technical Officers (ETO)',
        c_img: d3,
        c_det: 'Electro Technical Officers (ETO) is an 4 month course that is designed to provide students with the necessary knowledge and skills required to work as an electro-technical officer on board merchant vessels.',
        c_type: 'dg',
        path:'/dg course/electro technical officer'
    },
    {
        id: 4,
        c_name: 'Certificate Course in Maritime Catering',
        c_img: d4,
        c_det: 'Certificate course in Maritime Catering is a 6-month course that is designed to provide students with the necessary knowledge and skills required to work as catering staff on board merchant vessels.',
        c_type: 'dg',
        path:'/dg course/certificate course in maritime catering'
    },
    {
        id: 5,
        c_name: 'Graduate Marine Engineering (GME)',
        c_img: d5,
        c_det: 'A Graduate Marine Engineering (GME) course is a one-year conversion course for Mechanical Engineering / Naval Architecture graduates to become Marine Engineers in the merchant navy. Get more details.',
        c_type: 'dg',
        path:'/dg course/graduate marine engineer'
    },
    {
        id: 6,
        c_name: 'General Purpose Rating (GPR)',
        c_img: d6,
        c_det: 'It is a 6-months course & 6-months shipboard training that is designed to provide students with the necessary knowledge and skills required to work as a deckhand on board merchant vessels.',
        c_type: 'dg',
        path:'/dg course/training for general purpose rating'
    },
    {
        id: 7,
        c_name: 'BSc in Cruise Line and Hospitality Management',
        c_img: o1,
        c_det: 'BSc. in Cruise line & Hospitality Management Program will prepare students for international cruise ship industry and other allied hospitality, leisure & service-oriented industries. Get more details below.',
        c_type: 'ot',
        path:'/dg course/bsc in cruise line and hospitality management'
    },
    {
        id: 8,
        c_name: 'MBA in Maritime Operations',
        c_img: o2,
        c_det: 'The master’s degree with an emphasis on the business of hospitality will equip graduates to enter the field of hospitality and other service based allied industries at managerial or leadership levels.',
        c_type: 'ot',
        path:'/dg course/mba in maritime operations'
    },
    {
        id: 9,
        c_name: 'MBA in Hospitality Operations',
        c_img: o3,
        c_det: 'The master’s degree with an emphasis on the business of hospitality will equip graduates to enter the field of hospitality and other service based allied industries at managerial or leadership levels.',
        c_type: 'ot',
        path:'/dg course/mba in hospitality operations'
    },
    {
        id: 10,
        c_name: 'Marine Accident Investigation',
        c_img: o4,
        c_det: 'In an era of high technology and advanced training on board ships accidents still occur. The primary aim of Accident Investigation is to establish the causal factors of a particular incident.',
        c_type: 'ot',
        path:'/dg course/marine accident investigation'
    },
    {
        id: 11,
        c_name: 'Search And Rescue On Scene Co-Ordinator',
        c_img: o5,
        c_det: 'This one day course is delivered in alignment with the IMO Model course 3.13 to assist maritime personnel develop effective control skills, when called upon to assist in Search and Rescue response. ',
        c_type: 'ot',
        path:'/dg course/search and rescue on scene coordinator'
    },
    {
        id: 12,
        c_name: 'Pilot Training',
        c_img: o6,
        c_det: 'The course can be tailored to suit candidate needs or by adding specific company requirements. Upon successful completion, all candidates will be issued with a course completion certificate.',
        c_type: 'ot',
        path:'/dg course/pilot training'
    },
]
const Othercourse = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box id='course' className='mlay'>
            <Box className='banner'>OUR COURSES</Box>
            <Box className='course_background layout'>
                <Typography className='course_type'>Other Maritime Courses</Typography>
                <Box className='c_card_cont'>
                    {
                        c_data.filter((e) => e.c_type === 'ot').map((item) => (
                            <Box className='c_card' key={item.id}>
                                <Typography className='course_h_name'>{item.c_name}</Typography>
                                <Box className='img_cont'>
                                    <img src={item.c_img} alt={item.c_img} />
                                </Box>
                                <Typography className='course_descr'>{item.c_det}</Typography>
                                <button className='c_det_btn'><Link to={item.path} style={{color:'white',textDecoration:'none'}} className='hov_hov'>View Details</Link></button>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box className='alignfooter'></Box>
            <Box className='alignfooter'></Box>

        </Box>
    );
}

export default Othercourse;
