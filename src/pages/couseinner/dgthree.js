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
const Dgthree = () => {
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
                                const payLoad = { name: name, email: email, number: num, cname: 'ELECTRO-TECHNICAL OFFICERS', ctype: 'DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>ELECTRO-TECHNICAL OFFICERS</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> DG APPROVED COURSES</Typography>
                <Typography className='course_name'>ELECTRO-TECHNICAL OFFICERS (ETO)</Typography>
                <Typography className='c_connn'>Electro-Technical Officers (ETO) is an 4 month course that is designed to provide students with the necessary knowledge and skills required to work as an Electro- technical officer on board merchant vessels. The course focuses on developing the students’ technical knowledge and practical skills in electrical and electronic systems used in marine applications.</Typography>
                <Typography className='c_connn'> <span style={{color: '#191240',fontWeight: 600}}>Duration:</span> 4 Months (Full Time) + 8 months on board ship training</Typography>
                <Typography className='c_connn'> <span style={{color: '#191240',fontWeight: 600}}>Accreditation Authority:</span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>
                <button className='course_query' onClick={handleOpen}>Apply now</button>



                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>Electro Technical Officers (ETO) is an 4 month course that is designed to provide students with the necessary knowledge and skills required to work as an electro- technical officer on board merchant vessels. The course focuses on developing the students’ technical knowledge and practical skills in electrical and electronic systems used in marine applications.</Typography>
                <Typography className='c_connn'>The course curriculum covers a range of topics related to electro-technical systems, including electrical safety, electrical machines, power generation and distribution, electronics and communication systems, automation and control, and maintenance and repair of electrical and electronic equipment. Students will also learn about the specific requirements for electrical systems on board ships, including safety regulations and international standards.</Typography>
                <Typography className='c_connn'>After the course, students will be required to undergo mandatory 8 months on-board ship training, which will enable them to gain hands-on experience in various aspects of electrical and electronic systems used in marine applications, including installation, maintenance, and troubleshooting.</Typography>

                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>4 Months (Full Time) + 8 months on board ship training.</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span>Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>
                </Box>
                <Typography className='course_criteria'>Eligibility Criteria</Typography>
                <Typography className='head_des'><span className='head_des_c'>Academic:</span></Typography>
                <Typography className='c_connn'>1. Passed four years BE/ BTech Degree including lateral entry, with 50% marks in Electrical Engineering, Electronics Engineering, Electrical and Electronics Engineering, Electronics and Telecommunication / Communication Engineering, or Electronics and instrumentation or equivalent.</Typography>
                <Typography className='c_connn'>2. The candidates must have secured minimum 50% marks in English in 10th or 12th standard exams. If a candidate could not secure 50% marks in English in 10th or 12th standard exams shall still be eligible provided the candidate secures 50 % in the degree exam and the medium of learning in degree was English.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th and 12th standard from a recognised board.</Typography>
                <Typography className='c_connn'>2. The degree courses must be recognised by any State or Central Government or the AICTE.</Typography>
                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. The Candidates who were admitted in Diploma courses on the basis of Matriculation only and went to complete their B.E./ B. Tech degree course as a lateral entry in the 2nd year of the degree on the basis of Diploma, and has secured 50% marks in Electrical Engineering, Electronics Engineering, Electrical and Electronics Engineering, Electronics and Telecommunication / Communication Engineering, or Electronics and instrumentation or equivalent.</Typography>
                <Typography className='c_connn'>2. The candidates must have secured minimum 50% marks in English in 10th standard exams. If a candidate could not secure 50% marks in English in 10th standard exam shall still be eligible provided the candidate secures 60% in Diploma or 50% in the Degree exam and the medium of learning in diploma or degree was English.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>
                <Typography className='c_connn'>2. The diploma and degree courses must be recognised by any State or Central Government or the AICTE.</Typography>
                <Typography className='head_des'><span className='head_des_c'>OR</span></Typography>
                <Typography className='c_connn'>1. Passed three years’ Diploma with 60% marks in Electrical Engineering Electronics Engineering, Electrical and Electronics Engineering, Electronics and Telecommunication/Communication Engineering, or Electronics and instrumentation or equivalent.</Typography>
                <Typography className='c_connn'>2. The candidates must have secured minimum 50% marks in English in 10th standard exams. If a candidate could not secure 50% marks in English in 10th standard exam shall still be eligible provided the candidate secures 60% in Diploma exam and the medium of learning in diploma was English.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Note:</span></Typography>
                <Typography className='c_connn'>1. The candidate must have passed the 10th standard from a recognised board.</Typography>
                <Typography className='c_connn'>2. The diploma must be recognised by any State or Central Government or the AICTE.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Admission Test:</span></Typography>
                <ul>
                    <li><CircleIcon className='dott' />SOMS Entrance Exams</li>
                    <li><CircleIcon className='dott' />Qualified in Online Common Entrance Test (CET)</li>
                    <li><CircleIcon className='dott' />Shipping Company Sponsorship Test (SCST)</li>
                </ul>
                <Typography className='head_des'><span className='head_des_c'>Age:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> The maximum age limit is 35 years.</Typography>
                <Typography className='c_connn' style={{paddingLeft:15}}><CircleIcon style={{fontSize:6}}/> The maximum age limit for candidates belonging to “Scheduled Caste” (SC) / “Scheduled Tribe” (ST) Category shall be relaxed by 5 years.</Typography>
                <Typography className='c_connn' style={{paddingLeft:15}}><CircleIcon style={{fontSize:6}}/> The maximum age limit for candidates belonging to non-creamy layer of “Other Backward Classes’ (OBC) Category shall be relaxed by 3 years.</Typography>
                <Typography className='c_connn' style={{paddingLeft:15}}><CircleIcon style={{fontSize:6}}/> The maximum age limit for women candidates of each Category shall be relaxed by additional 2 years.</Typography>
                <Typography className='head_des'><span className='head_des_c'>Medical:</span></Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> Candidates must be medically fit including eyesight and hearing as prescribed in the Merchant Shipping (Medical Examination) Rules, 2000, as amended.</Typography>
                <Typography className='c_connn'><CircleIcon style={{fontSize:6}}/> No colour Blindness.</Typography>

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

export default Dgthree;
