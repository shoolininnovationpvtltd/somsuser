import React, { useEffect } from 'react';
import './home.css'
import { Box, Typography } from '@mui/material';
import c1 from '../../images/course1.png'
import c2 from '../../images/course2.png'
import c3 from '../../images/course3.png'
import c4 from '../../images/course4.png'
import m1 from '../../images/mission1.jpeg'
import m2 from '../../images/mission2.jpeg'
import vission from '../../images/vission.jpeg'
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
const courseData = [
  {
    id: 1,
    c_img: c1,
    c_name: 'BSc Nautical Science (BSCNS)',
    c_des: 'B.Sc. Nautical Science is a 3-year undergraduate course that focuses on providing students with the necessary knowledge and skills required to become a deck officer in the merchant navy.',
    path:'/dg course/bsc nautical science'
  },
  {
    id: 2,
    c_img: c2,
    c_name: 'Diploma in Nautical Science (DNS)',
    c_des: 'Diploma in Nautical Science is a 1-year course (2 Semesters) followed by compulsory one and half year (3 Semesters) on-board ship training that provides students with the basic knowledge and skills required.',
    path:'/dg course/diploma in nautical science'
  },
  {
    id: 3,
    c_img: c4,
    c_name: 'Graduate Marine Engineering (GME)',
    c_des: 'A Graduate Marine Engineering (GME) course is a one-year conversion course for Mechanical Engineering / Naval Architecture graduates to become Marine Engineers in the merchant navy. Get more details.',
    path:'/dg course/graduate marine engineer'
  },
  {
    id: 4,
    c_img: c3,
    c_name: 'General Purpose rating (GPR)',
    c_des: 'It is a 6-month course & 6-months shipboard training that is designed to provide students with the necessary knowledge and skills required to work as a Deckhand on board merchant vessels.',
    path:'/dg course/training for general purpose rating'
  },
]

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <Box id='home'>
      <Box className='banner layout mlay'>
        <Link className='our_corse' to='/courses' onClick={()=>props.receive(2)}>OUR COURSES</Link>
      </Box>
      <Box className='course_card_cont layout'>
        {
          courseData.map((item) => (
            <Box className='course_card' key={item.id}>
              <img src={item.c_img} alt={item.c_img} />
              <Typography className='course_name'>{item.c_name}</Typography>
              <Typography className='course_des'>{item.c_des}</Typography>
              <Link className='rrred' to={item.path}>Read More</Link> 
            </Box>
          ))
        }

      </Box>
      <Box className='mission layout'>
        <Typography className='main_head'>OUR MISSION</Typography>
        <Box className='mission_cont'>
          <Box className='mission_cont_l'>
            <Typography className='m_head'>Shaping Maritime Leaders of Tomorrow</Typography>
            <Typography className='m_con'>To become a world-class maritime training institute that provides the highest quality maritime education, training, and research, empowering its students to excel in their careers and contribute to the sustainable development of the maritime industry.</Typography>
            <Link className='m_more' to='/about' onClick={()=>props.receive(1)}>More <KeyboardDoubleArrowRightIcon className='icconn' /></Link>
          </Box>
          <Box className='mission_cont_r'>
            <img src={m1} alt='m1' />
            <img src={m2} alt='m2' />
          </Box>
        </Box>
      </Box>
      <Box className='vission layout'>
        <Typography className='main_head'>OUR VISION</Typography>
        <Box className='vission_cont'>
          <Box className='vission_cont_l'>
            <img src={vission} alt='vission' />
          </Box>
          <Box className='vission_cont_r'>
            <Typography className='v_head'>Charting Excellence in Maritime Education Worldwide</Typography>
            <Typography className='v_des'>To provide a comprehensive and innovative maritime education and training that prepares our students to meet the challenges of the evolving maritime industry.</Typography>
            <Link className='v_more' to='/about' onClick={()=>props.receive(1)}>More <KeyboardDoubleArrowRightIcon className='icconn' /></Link>

          </Box>
        </Box>
      </Box>
      <Box className='achievement layout'>
        <Typography className='main_head a_head'>OUR ACHIEVEMENTS</Typography>
        <Typography className='a_con'>Championing maritime education, our achievements reflect excellence in training, industry partnerships, and shaping future maritime leaders. Celebrating success together.</Typography>
        <Box className='a_img_cont'>
          <Box className='imggg'>
            <img src={a1} alt='a1' />
          </Box>
          <Box className='imggg'>
            <img src={a2} alt='a2' />
          </Box>
          <Box className='imggg'>
            <img src={a3} alt='a3' />
          </Box>
          <Box className='imggg'>
            <img src={a4} alt='a4' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
