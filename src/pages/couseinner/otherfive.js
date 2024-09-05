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
const Otherfive = () => {
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
                        const payLoad = { name: name, email: email, number: num, cname: 'Search And Rescue On Scene Co-Ordinator', ctype: 'NON-DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>Search And Rescue On Scene Co-Ordinator</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> NON-DG APPROVED COURSES</Typography>
                <Typography className='course_name'>Search And Rescue On Scene Co-Ordinator</Typography>


                <Typography className='c_connn'>This one day course is delivered in alignment with the IMO Model course 3.13 to assist maritime personnel develop effective control skills, when called upon to assist in Search and Rescue response. Focusing on the requirements of the On Scene Co-ordinator, the course objective is to give delegates an awareness of the interactions between mobile assets and the various shore based authorities involved in a major maritime incident.</Typography>

                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span>1 Days</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Accreditation Authority: </span> Approved by Centurion University of Technology and Management.</Typography>


                <button className='course_query' onClick={handleOpen}>Apply now</button>


                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>This one day course is delivered in alignment with the IMO Model course 3.13 to assist maritime personnel develop effective control skills, when called upon to assist in Search and Rescue response. Focusing on the requirements of the On Scene Co-ordinator, the course objective is to give delegates an awareness of the interactions between mobile assets and the various shore based authorities involved in a major maritime incident.</Typography>


                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>1 Days</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span>Approved by Centurion University of Technology and Management.</Typography>
                </Box>


                <Typography className='course_criteria'>Prerequisites</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />OOW (deck) or higher CoC</Typography>


                <Typography className='course_criteria'>Assessment</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Formative assessment to monitor candidate learning throughout the course.</Typography>

                <Typography className='course_criteria'>Teaching</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Classroom theory sessions followed on by practical exercises in ship handling simulators.</Typography>

                <Typography className='course_criteria'>Accreditation Authority</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Approved by Board of Studies, Centurion University of Technology and Management.</Typography>


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

export default Otherfive;
