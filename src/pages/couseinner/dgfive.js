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
const Dgfive = () => {
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
                        const payLoad = { name: name, email: email, number: num, cname: 'GRADUATE MARINE ENGINEERING', ctype: 'DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
                    setNumee('Please enter a valin number**')
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
            <Box className='banner'>GRADUATE MARINE ENGINEERING</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> DG APPROVED COURSES</Typography>
                <Typography className='course_name'>GRADUATE MARINE ENGINEERING (GME)</Typography>
                <Typography className='c_connn'>A Graduate Marine Engineering (GME) course is a one-year conversion course for Mechanical Engineering / Naval Architecture graduates to become Marine Engineers in the merchant navy. The course is designed to provide students with a comprehensive understanding of marine engineering, including the design, construction, maintenance, and repair of marine vessels.
                </Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span> 1 Year (Full Time) + 6 months on board ship training.</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>
                    Accreditation Authority: </span>Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India
                </Typography>

                <button className='course_query' onClick={handleOpen}>Apply now</button>
                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>A Graduate Marine Engineering (GME) course is a one-year conversion course for Mechanical Engineering / Naval Architecture graduates to become Marine Engineers in the merchant navy. The course is designed to provide students with a comprehensive understanding of marine engineering, including the design, construction, maintenance, and repair of marine vessels.</Typography>
                <Typography className='c_connn'>The duration of the GME course is typically one year, and it is divided into two semesters. The course curriculum includes theoretical and practical training in subjects such as marine engineering, marine propulsion, marine heat transfer, and marine electrical systems.</Typography>
                <Typography className='c_connn'>After successfully completing the TAR Book competency examinations held at Centurion University, the candidate will be eligible to appear for STCW CODE A-III/1 Officers in Charge of an Engineering Watch (OICEW) Certificate of Competency issued by the Directorate General of Shipping, Government of India.</Typography>


                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>1 Year (Full Time) + 6 months on board ship training.</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India</Typography>
                </Box>
                <Typography className='course_criteria'>Eligibility Criteria</Typography>
                <Typography className='head_des'><span className='head_des_c'>Academic:</span></Typography>
                <Typography className='c_connn'>1. BE/ BTech in Mechanical Engineering with minimum marks of 50% in final year.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured a minimum of 50% marks in English language at 10th or 12th or in the Degree exam.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The BE/BTech Degree or any other higher degree such as 5 year integrated ME /MTech degree must have been obtained from AICTE approved institute or the IIT’s or from University Engineering Colleges (College directly run by University).</Typography>
                <Typography className='c_connn'>2. These candidates are exempted from appearing in all subjects of part ‘A’ of both MEO class- IV and MEO class-II grade of examinations.</Typography>
                <Typography className='c_connn'>3. A relaxation of 5% marks in English shall be granted to the candidates who are native of the Lakshadweep and Andaman and Nicobar Islands and belong to Scheduled Tribe and who and both of whose parents were born in those islands and belong to the Scheduled Tribes of those islands.</Typography>



                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. A full time BE/ BTech in all Mechanical Engineering streams e.g., Mechanical and Automation, Mechanical and Electronics, Mechanical and Automobile etc. However, the word “Mechanical ” should be first indicating that mechanical engineering is the core, and the second subject is the elective.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured a minimum of 50% marks in English language at 10th or 12th standard or in degree exam.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The above BE/ BTech degree or any other higher degree such as 5 year integrated ME/MTech degree must have been obtained from AICTE approved institute or the IIT’s or from University Engineering College (college directly run by University).</Typography>
                <Typography className='c_connn'>2. These candidates will be required to pass part. a subject of both MEO Class- IV and MEO Class-II grade of examinations. These candidates may be considered for exemption from appearing in subjects of Mathematics and Applied Mechanics.</Typography>
                <Typography className='c_connn'>3. A relaxation of 5% marks in English shall be granted to the candidates who are native of the Lakshadweep and Andaman and Nicobar Islands and belong to Schedule Tribes and who and both of whose parents were born in those islands and belong to the Scheduled Tribes of those Islands.</Typography>


                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. Candidates who have a degree in all Naval Architecture streams e.g. Naval Architecture and Ocean Engineering, Naval Architecture and ship building, etc. However, the word “Naval Architecture “is the core and the second subject is elective.</Typography>
                <Typography className='c_connn'>2. The candidate must have secured a minimum of 50% marks in English language in 10th or 12th or in the Degree Exam.</Typography>


                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The above BE/ BTech Degree or any other higher degree such as 5-year integrated ME /MTech Degree must have been obtained from AICTE approved institute or the IIT’s or from University Engineering Colleges (colleges directly run by university).</Typography>
                <Typography className='c_connn'>2. These candidates will be required to pass Part ‘A’ subjects of both MEO Class-IV and MEO Class-II grade of examinations. These candidates may be considered for exemption from appearing in subjects of Mathematics and Applied Mechanics.</Typography>
                <Typography className='c_connn'>3. A relaxation of 5% marks in English shall be granted to the candidates who are native of the Lakshadweep and Andaman & Nicobar Islands and belong to Scheduled Tribes and who and both of whose parents were born in those islands and belong to the Scheduled Tribes of those Islands.</Typography>

                <Typography className='head_des'><span className='head_des_c'>Admission Test:</span></Typography>
                <ul>
                    <li><CircleIcon className='dott' />Qualified in Online Common Entrance Test (CET)</li>
                    <li><CircleIcon className='dott' />Shipping Company Sponsorship Test (SCST)</li>
                </ul>


                <Typography className='head_des'><span className='head_des_c'>Age:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{ fontSize: 6 }} /> The maximum age limit is 28 years.</Typography>
                <Typography className='c_connn' style={{ paddingLeft: 15 }}><CircleIcon style={{ fontSize: 6 }} /> The maximum age limit for candidates belonging to “Scheduled Caste” (SC) / “Scheduled Tribe” (ST) Category shall be relaxed by 5 years.</Typography>
                <Typography className='c_connn' style={{ paddingLeft: 15 }}><CircleIcon style={{ fontSize: 6 }} /> The maximum age limit for candidates belonging to non-creamy layer of “Other Backward Classes’ (OBC) Category shall be relaxed by 3 years.</Typography>
                <Typography className='c_connn' style={{ paddingLeft: 15 }}><CircleIcon style={{ fontSize: 6 }} /> The maximum age limit for women candidates of each Category shall be relaxed by additional 2 years.</Typography>



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

export default Dgfive;
