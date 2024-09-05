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
const Otherthree = () => {
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
                            const payLoad = { name: name, email: email, number: num, cname: 'MBA in Hospitality Operations', ctype: 'NON-DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>MBA in Hospitality Operations</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> NON-DG APPROVED COURSES</Typography>
                <Typography className='course_name'>MBA in Hospitality Operations</Typography>


                <Typography className='c_connn'>The Programme curriculum has been designed to equip you with the knowledge and skills to further your maritime leadership and management career.</Typography>

                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span>2 years Degree Program (Including 6 months Internship in 2nd Year (4th semester).</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Accreditation Authority: </span>Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>


                <button className='course_query' onClick={handleOpen}>Apply now</button>


                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>The programme curriculum has been designed to equip you with the knowledge and skills to further your maritime leadership and management career.</Typography>
                <Typography className='c_connn'>The course has a strong business focus and explores the complex factors involved in the management of ships and shipping operations worldwide. Students will also reflect on the key aspects of maritime administration, maritime law, ship finance, logistics and supply chain management, operations and risk management techniques, international marketing, brand establishment, maritime economics and trade, project mastery and innovative practice.</Typography>

                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>2 years Degree Program (Including 6 months Internship in 2nd Year (4th semester).</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span>Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>
                </Box>


                <Typography className='course_criteria'>Minimum Academic Qualification</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Overall Aggregate of 50 % marks in Graduation (any Stream).</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Master mariner certificate of competency (Unlimited) with Management experience.</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Chief Engineer certificate of competency (Unlimited) with Management experience.</Typography>


                <Typography className='course_criteria'>Admission Test</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Qualified in SoMS Entrance Exams.</Typography>

                <Typography className='course_criteria'>Career Scope</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Supervisory & Managerial level Positions in Hotels & Resorts</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Hospital Food & Beverage Supervisor</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Public Relations Manager/Customer Relationship Executive in Banks/MNC’s. or any</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Service Oriented Industry</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Entrepreneurship</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Industrial & Institutional Food & Beverage Supervisors/Managers</Typography>


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

export default Otherthree;
