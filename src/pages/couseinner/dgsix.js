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
const Dgsix = () => {
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
                        const payLoad = { name: name, email: email, number: num, cname: 'TRAINING FOR GENERAL PURPOSE RATING', ctype: 'DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>TRAINING FOR GENERAL PURPOSE RATING</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> DG APPROVED COURSES</Typography>
                <Typography className='course_name'>TRAINING FOR GENERAL PURPOSE RATING (GPR)</Typography>
                <Typography className='c_connn'>General Purpose rating (GPR) is a 6-month course & 6- months shipboard training that is designed to provide students with the necessary knowledge and skills required to work as a Deckhand on board merchant vessels. The course focuses on developing the students’ practical skills and knowledge in seamanship, navigation, and cargo handling, maintenance of deck and engine room.
                </Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span> 6 Months (Full Time) + 6 months on board ship training.</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>
                    Accreditation Authority: </span>Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.
                </Typography>

                <button className='course_query' onClick={handleOpen}>Apply now</button>
                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>General Purpose rating (GPR) is a 6-month course & 6- months shipboard training that is designed to provide students with the necessary knowledge and skills required to work as a Deckhand on board merchant vessels. The course focuses on developing the students’ practical skills and knowledge in seamanship, navigation, and cargo handling, maintenance of deck and engine room.</Typography>
                <Typography className='c_connn'>The course curriculum covers a range of topics related to shipping and seamanship, including navigation, maintenance. Students will also receive training in firefighting, first aid, survival at sea, and other essential skills.</Typography>
                <Typography className='c_connn'>After the course, students will be required to undergo 6 months practical training on board ships, which will enable them to gain hands-on experience in various aspects of ship operations, including navigation, cargo handling, and maintenance.</Typography>


                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>6 Months (Full Time) + 6 months on board ship training.</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India</Typography>
                </Box>
                <Typography className='course_criteria'>Eligibility Criteria</Typography>
                <Typography className='head_des'><span className='head_des_c'>Academic:</span></Typography>
                <Typography className='c_connn'>1. Pass with aggregate 40% marks in 10th standard with Science, Mathematics as subjects.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured minimum 40% marks in English in 10th standard exams.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>

                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1.Pass in 2 year I.T.I course from Government approved institute with minimum 50% aggregate marks in final year.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured minimum 40% marks in English in 10th standard exams.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>

                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. Diploma or Degree holders.</Typography>
                <Typography className='c_connn'>2. Pass with aggregate 40% marks in 10th Standard with Science, Mathematics as subjects.</Typography>
                <Typography className='c_connn'>3. The candidates must have secured minimum 40% marks in English in 10th standard exams.</Typography>


                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>
                <Typography className='c_connn'>2. The diploma or degree must be recognised by any State or Central Government or the AICTE.</Typography>
                <Typography className='c_connn'>3. The maximum age limit for degree or diploma is raised with a condition that these candidates are provided shipboard training within one year of completion of course.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Admission Test:</span></Typography>
                <ul>
                    <li><CircleIcon className='dott' />Qualified in Online Common Entrance Test (CET)</li>
                    <li><CircleIcon className='dott' />Shipping Company Sponsorship Test (SCST)</li>
                </ul>

                <Typography className='head_des'><span className='head_des_c'>Age:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{ fontSize: 6 }} /> The maximum age limit is 17.5 to 27 years. *Conditions Apply</Typography>

                <Typography className='head_des'><span className='head_des_c'>Medical:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{ fontSize: 6 }} /> Candidates must be medically fit including eyesight and hearing as prescribed in the Merchant Shipping (Medical Examination) Rules, 2000, as amended.</Typography>
                <Typography className='c_connn'><CircleIcon style={{ fontSize: 6 }} /> No colour Blindness.</Typography>

                <Typography className='course_criteria'>Career Scope</Typography>
                <Typography className='c_connn'>Graduates of this course can expect to have a challenging and rewarding career that offers excellent opportunities for growth and advancement in the marine sector leading to STCW A- II/2 Chief Mates/ Masters CoC on ships of 500 gross tonnage or more, and they may also pursue further higher education in the field of nautical science, maritime studies and maritime law, such as MSc, MBA and LLM.</Typography>
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

export default Dgsix;
