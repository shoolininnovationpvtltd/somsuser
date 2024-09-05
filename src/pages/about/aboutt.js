import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './about.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import instance from '../../config/axios.config'
import { burl } from '../../config/axios.config'
const About = () => {
  const [counterState, setCounterState] = useState(false)
  const [gabout, setGabout] = useState([])
  const [gaboutt, setGaboutt] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // get about
  const getAbout = () => {
    instance.get('/about/get').then((res) => {
      setGabout(res.data)
      setGaboutt(res.data[0].description.split("br"));
    })
  }
  useEffect(() => {
    getAbout()
  }, [])
  return (
    <Box id='about'>
      <Box className='banner mlay'>
        ABOUT US
      </Box>
      <Typography className='about_h_head layout mlay'>About the  School of Maritime Studies, Centurion University</Typography>
      <Box className='about_h_cont layout mlay'>
        <Box className='a_h_l'>
          {
            gabout.length > 0 ? (
              gaboutt.map((e, index) => (
                <Typography className='about_h_con' key={index}>{e}</Typography>
              ))
            ) : (null)
          }
        </Box>
        <Box className='a_h_r'>
        {
          gabout.length > 0 ? (
          <img src={`${burl}aboutimg/${gabout[0].pdf}`} alt='d' />
          ):
          (null)
        }
          <Typography className='a_h_d_name'><span className='a_h_d_deg'>DIRECTOR-</span>Captain Vik Patra</Typography>
        </Box>
      </Box>
      <Box className='layout mlay'>
        <Typography className='about_h_key'>Key highlights of SOMS include:</Typography>
      </Box>
      <Box className='key_heilight layout mlay'>
        <ul>
          <li><FiberManualRecordIcon className='dott' />Comprehensive Course Offerings: From pre-requisites to course descriptions, we provide detailed information about each course to help you make informed decisions about your education and career path.</li>
          <li><FiberManualRecordIcon className='dott' />Accreditation and Approvals: Our courses are approved and accredited by relevant authorities such as the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India, ensuring that you receive quality education and industry-recognized qualifications.</li>
          <li><FiberManualRecordIcon className='dott' />Industry-Relevant Training: With strong ties to the maritime industry, our courses are designed to meet the evolving needs of employers, giving you a competitive edge in the job market.</li>
          <li><FiberManualRecordIcon className='dott' />Expert Faculty: Learn from experienced teaching and research staff who bring real-world expertise and industry insights into the classroom.</li>
          <li><FiberManualRecordIcon className='dott' />Efficient Support Services: Our course administrators are always available to address your queries and assist you with course bookings, ensuring a seamless and hassle-free learning experience</li>
        </ul>
        <Typography className='join'>Whether you're interested in captaining a ship, operating autonomous vessels, safeguarding marine environments, designing advanced ocean engineering structures, or keeping the world’s goods moving, the School of Maritime Studies is here to help you turn your aspirations into reality. <span className='join_bold'>Join us and embark on a journey towards a successful and fulfilling maritime career.</span></Typography>
      </Box>
      <div className='layout mlay' id='counter'>
        <Typography className='counter_head'>School of Maritime Studies, Bhubaneswar</Typography>
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <Box className='counter_container'>
            <Box className='counter_child'>
              <Typography className='counter_count'>{counterState && <CountUp start={0} end={5000} duration={2}></CountUp>}+</Typography>
              <Typography className='counter_user'>Students</Typography>
            </Box>
            <Box className='counter_child'>
              <Typography className='counter_count'>{counterState && <CountUp start={0} end={200} duration={2.5}></CountUp>}+</Typography>
              <Typography className='counter_user'>Faculties</Typography>
            </Box>
            <Box className='counter_child'>
              <Typography className='counter_count'>{counterState && <CountUp start={0} end={20} duration={2.5}></CountUp>}+</Typography>
              <Typography className='counter_user'>Programs</Typography>
            </Box>
            <Box className='counter_child'>
              <Typography className='counter_count'>{counterState && <CountUp start={0} end={15} duration={2.5}></CountUp>}+</Typography>
              <Typography className='counter_user'>Years</Typography>
            </Box>
          </Box>
        </ScrollTrigger>
      </div>
      <Box className='mlay alignfooter'></Box>
    </Box>
  );
}

export default About;
