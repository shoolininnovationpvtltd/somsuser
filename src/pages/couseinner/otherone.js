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
const Otherone = () => {
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
                        const payLoad = { name: name, email: email, number: num, cname: 'BSc in Cruise Line and Hospitality Management', ctype: 'NON-DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>BSc in Cruise Line and Hospitality Management</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> NON-DG APPROVED COURSES</Typography>
                <Typography className='course_name'>BSc in Cruise Line and Hospitality Management</Typography>


                <Typography className='c_connn'>A Graduate Marine Engineering (GME) course is a one-year conversion course for Mechanical Engineering / Naval Architecture graduates to become Marine Engineers in the merchant navy. The course is designed to provide students with a comprehensive understanding of marine engineering, including the design, construction, maintenance, and repair of marine vessels.</Typography>

                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span>3 years Degree Program (Including 6 months Internship in 3 rd Year (5th semester).</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Accreditation Authority: </span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India</Typography>


                <button className='course_query' onClick={handleOpen}>Apply now</button>


                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>BSc. in Cruise line & Hospitality Management Program will prepare students for international cruise ship industry and other allied hospitality, leisure & service-oriented industries. It is designed so as to provide a comprehensive and a 360- degree hospitality outlook, producing professionals who are not just graduates but possess operational and leadership skillsets making them industry ready for varied service-based industry.</Typography>
                <Typography className='c_connn'>In order to address the placement concerns in the hospitality sector, the program boasts of its association with leading cruise liners with a fleet of cruise line ships for imparting experiential learning to its students and eventually taking them on board post completion of their program by absorbing them for the fleet of cruise lines. The program besides imparting core hospitality skills also develop international language expertise, interpersonal skills and emotional intelligence which are pre requisites for a dynamic service industry.</Typography>

                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>3 years Degree Program (Including 6 months Internship in 3 rd Year (5th semester).</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span> Approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Govt. of India.</Typography>
                </Box>


                <Typography className='course_criteria'>Minimum Academic Qualification</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Overall Aggregate of 50 % marks in 10+2 (Any stream) including English as a mandatory Subject.</Typography>


                <Typography className='course_criteria'>Admission Test</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Qualified in SoMS Entrance Exams.</Typography>

                <Typography className='course_criteria'>Career Scope</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Cruise line Hospitality Operations Executives</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Hotel Departmental Executives</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Hospital Catering Services Executive</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Public Relations officer/Customer Relationship Executive in Banks/MNC’s. or any</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Service Oriented Industry</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Airline Cabin Crew and ground Executives</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Entrepreneurship</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Industrial & Institutional Food & Beverage Executives</Typography>


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

export default Otherone;
