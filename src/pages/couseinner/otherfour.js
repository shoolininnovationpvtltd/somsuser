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
const Otherfour = () => {
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
                        const payLoad = { name: name, email: email, number: num, cname: 'Marine Accident Investigation', ctype: 'NON-DG APPROVED COURSES', ustate: statee, createdAt: newDate };
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
            <Box className='banner'>Marine Accident Investigation</Box>
            <Box className='layout course_det'>
                <Typography className='course_type'><ChevronRightIcon className='course_type_icon' /> NON-DG APPROVED COURSES</Typography>
                <Typography className='course_name'>Marine Accident Investigation</Typography>


                <Typography className='c_connn'>In an era of high technology and advanced training on board ships accidents still occur. The primary aim of Accident Investigation is to establish the causal factors of a particular incident. In determining the causal factors recommendations can be made to improve safety of life at sea, improve environmental protection and prevent further recurrence of such an incident.</Typography>

                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Duration: </span>3 Days</Typography>
                <Typography className='c_connn'> <span style={{ color: '#191240', fontWeight: 600 }}>Accreditation Authority: </span>Approved by Centurion University of Technology and Management.</Typography>


                <button className='course_query' onClick={handleOpen}>Apply now</button>


                <Typography className='course_criteria'>About The Course</Typography>
                <Typography className='c_connn'>In an era of high technology and advanced training on board ships accidents still occur. The primary aim of Accident Investigation is to establish the causal factors of a particular incident. In determining the causal factors recommendations can be made to improve safety of life at sea, improve environmental protection and prevent further recurrence of such an incident.</Typography>
                <Typography className='c_connn'>Simulation is a highly effective tool in reconstructing and analysing incidents, which could be both difficult and time consuming to solve through conventional investigation techniques. This method enables the incident to be reconstructed in a real time simulated environment. During the investigation all aspects of the incident can be thoroughly examined. These will include such areas as equipment failures, human error, vessel characteristics, vessel procedures and environmental conditions.</Typography>
                <Typography className='c_connn'>The resulting simulation simplifies the method and way of investigation and analysis. It provides clear simulated results and analysis reports with both printer output and data output allowing full debrief facilities. Time and cost for the normal investigation of incidents is saved. Court procedures can be enhanced and shortened by replay or reconstruction of an incident. Seeing an incident as it happens is far easier to comprehend, particularly for “non marine” experts. Multiple scenarios can be run in short time frame to investigate alternative “what if” actions thus narrowing down the options for the actual cause of the incident. Client’s procedures can be checked against the causes of the incident and modified or renewed. Training in the new procedures can then be carried out to prove and validate the procedures.</Typography>
                <Typography className='c_connn'>Courses based on IMO 3.11 “Marine Accident and Incident Investigation” are available on request.</Typography>


                <Box className='abccc'>
                    <Typography className='head_des'><span className='head_des_c'>Duration: </span>3 Days</Typography>
                    <Typography className='head_des'><span className='head_des_c'>Accreditation Authority: </span> Approved by Centurion University of Technology and Management.</Typography>
                </Box>


                <Typography className='course_criteria'>Prerequisites</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />None</Typography>


                <Typography className='course_criteria'>Assessment</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />A short question answer assessment at the end of course to gauge the underpinning knowledge and competencies gained in the course.</Typography>

                <Typography className='course_criteria'>Teaching</Typography>
                <Typography className='dotted_conn'><CircleIcon style={{ fontSize: 8 }} />Theory sessions complemented by scenario based practical exercises to enhance learning.</Typography>

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

export default Otherfour;
