import React, { useEffect, useState } from 'react';
import './innercourse.css'
import instance from '../../config/axios.config'
import { Box, Modal, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';
let indiastates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]
const Dgfour = () => {
    const [open, setOpen] = React.useState(false);
          // -------------------------
          const [name, setName] = useState('')
          const [email, setEmail] = useState('')
          const [num, setNum] = useState('')
          const [statee, setStatee] = useState('')
      
          const [ename, setNamee] = useState('')
          const [eemail, setEmaile] = useState('')
          const [eenum, setNumee] = useState('')
          const [estatee, setStateee] = useState('')
          // ----------------------
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
                // ---------------------------------


                useEffect(() => {
                    validation()
                }, [name, email, num, statee])
            
            
                const validation = () => {
                    if (name.length >= 4) {
                        setNamee('')
                    }
                    if (email !== '' && email.includes('@') && email.includes('.')) {
                        setEmaile('')
                    }
                    if (num !== '' && num.length === 10) {
                        setNumee('')
                    }
                    if (statee !== '') {
                        setStateee('')
                    }
                }
            
            
                const onSubmitHandler = () => {
                    if (name !== '' && name.length >= 4) {
                        if (email !== '' && email.includes('@') && email.includes('.')) {
                            if (num !== '' && num.length === 10) {
                                if (statee !== '') {
                                    const dateObj = new Date();
                                    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
                                    const day = dateObj.getDate().toString().padStart(2, '0')
                                    const year = dateObj.getFullYear();
                                    const newDate = year + "-" + month + "-" + day;
                                    const payLoad = { name: name, email: email, number: num, cname: 'CERTIFICATE COURSE IN MARITIME CATERING', ctype: 'DG APPROVED COURSES', ustate: statee, createdAt: newDate };
                                    instance.post('/course/add', payLoad)
                                        .then((res) => {
                                            setName('')
                                            setEmail('')
                                            setNum('')
                                            setStatee('')
                                            setOpen(false)
                                        }
                                        )
                                    // .catch((err) => {
                                    //     console.log("add contact failed", err)
                                    // })
                                } else {
                                    setStateee('Please select your state**')
                                }
                            } else {
                                setNumee('Please enter a valid number**')
                            }
                        } else {
                            setEmaile('Please enter valid email**')
                        }
                    } else {
                        setNamee('Please Enter your name**')
                    }
            
                }
            
                // -----------------------------
    return (
        <Box id='innercourse' className='mlay'>
            <Box className='banner'>CERTIFICATE COURSE IN MARITIME CATERING</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> DG APPROVED COURSES</Typography>
                <Typography className='course_name'>CERTIFICATE COURSE IN MARITIME CATERING</Typography>
                <Typography className='c_connn'>Certificate course in Maritime Catering is a 6-month course that is designed to provide students with the necessary knowledge and skills required to work as catering staff on board merchant vessels. The course focuses on developing the students’ culinary skills and knowledge of food hygiene and safety.
                </Typography>
                <Typography className='c_connn'> <span style={{color: '#191240',fontWeight: 600}}>Duration: </span> 6 Months (Full Time) + 6 months on board ship training.</Typography>
                <Typography className='c_connn'> <span style={{color: '#191240',fontWeight: 600}}>
                Accreditation Authority: </span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.
                </Typography>

                <button className='course_query' onClick={handleOpen}>Apply now</button>
                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>Certificate course in Maritime Catering is a 6-month course that is designed to provide students with the necessary knowledge and skills required to work as catering staff on board merchant vessels. The course focuses on developing the students’ culinary skills and knowledge of food hygiene and safety.</Typography>
                <Typography className='c_connn'>The course curriculum covers a range of topics related to maritime catering, including food preparation and presentation, menu planning, inventory management, health and safety, and customer service. Students will also learn about the specific requirements for catering on board ships, including storage and preparation of food in limited space and under challenging conditions.</Typography>
                <Typography className='c_connn'>After the course, students will be required to undergo 6 months practical training in a simulated shipboard environment, which will enable them to gain hands-on experience in various aspects of catering operations, including food preparation, serving, and cleaning.
                Duration: 6 Months (Full Time) + 6 months on board ship training.</Typography>
                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration:</span> 6 Months (Full Time) + 6 months on board ship training.</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority:</span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>
                </Box>


                <Typography className='course_criteria'>Eligibility Criteria</Typography>
                <Typography className='head_des'><span className='head_des_c'>Academic:</span></Typography>
                <Typography className='c_connn'>1. Pass with aggregate 40% marks in 10th Standard exam.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured minimum 40% marks in English in 10th standard exams.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised Board.</Typography>



                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. Diploma or Degree holders.</Typography>
                <Typography className='c_connn'>2. Pass with aggregate 40% marks in 10th Standard.</Typography>
                <Typography className='c_connn'>3. The candidates must have secured minimum 40% marks in English in 10th standard exams.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>
                <Typography className='c_connn'>2. The diploma or degree must be recognised by any State or Central Government or the AICTE.</Typography>
                <Typography className='c_connn'>3. The maximum age limit for Degree or Diploma is raised with a condition that these candidates are provided shipboard training within one year of completion of course.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Admission Test:</span></Typography>
                <ul>
                    <li><CircleIcon className='dott' />SOMS Entrance Exams</li>
                    <li><CircleIcon className='dott' />Shipping Company Sponsorship Test (SCST)</li>
                </ul>
                <Typography className='head_des'><span className='head_des_c'>Age:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> The maximum age limit is 17.5 to 27 years. *Conditions Apply</Typography>
                <Typography className='head_des'><span className='head_des_c'>Medical:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> Candidates must be medically fit including eyesight and hearing as prescribed in the Merchant Shipping (Medical Examination) Rules, 2000, as amended.</Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> No colour Blindness.</Typography>

                <Typography className='course_criteria'>Career Scope</Typography>
                <Typography className='c_connn'>Upon completion of the course, students will be eligible to work as catering staff on board merchant vessels. They can expect to work in a range of roles, including chefs, cooks, stewards, and housekeeping staff on board ships.</Typography>
                <button className='course_query' onClick={handleOpen}>Apply now</button>

            </Box>
            <Box className='alignfooter'></Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='apply_formm'>
                    <Typography className='fill'>Fill The Below Form</Typography>
                    <Typography className='fill_con'>Get started on your journey towards a rewarding career in the maritime industry.</Typography>
                    <lable className='inp_des'>Name: <span className='errr_field'>{ename}</span></lable>
                    <input type='text' className='inp_data' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <lable className='inp_des'>Email: <span className='errr_field'>{eemail}</span></lable>
                    <input type='email' className='inp_data' placeholder='Email' value={email} onChange={(e => setEmail(e.target.value))} />
                    <lable className='inp_des'>Phone: <span className='errr_field'>{eenum}</span></lable>
                    <input type='number' className='inp_data' placeholder='Phone' value={num} onChange={(e) => setNum(e.target.value)} />
                    <lable className='inp_des'>Select Your State: <span className='errr_field'>{estatee}</span></lable>
                    <select value={statee} className='inp_data' onChange={(e) => setStatee(e.target.value)}>
                        {indiastates.map((e, index) => (
                            <option key={index} value={e}>{e}</option>
                        ))}
                    </select>
                    <button className='submit_course' onClick={onSubmitHandler}>SUBMIT NOW</button>
                </Box>
            </Modal>
        </Box>
    );
}

export default Dgfour;
