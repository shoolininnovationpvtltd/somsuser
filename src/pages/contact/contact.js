import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import instance from '../../config/axios.config'
import './contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import f from '../../images/f.png'
import l from '../../images/l.png'
import t from '../../images/t.png'
import i from '../../images/i.png'
const Contact = () => {
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('STUDENT')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nval, setNval] = useState('')
    const [uval, setUval] = useState('')
    const [evall, setEvall] = useState('')
    const [mval, setMval] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        validation()
    }, [name, userType, email, message])


    const validation = () => {
        if (name.length >= 4) {
            setNval('')
        }
        if (userType !== '') {
            setUval('')
        }
        if (email !== '' && email.includes('@') && email.includes('.')) {
            setEvall('')
        }
        if (message !== '') {
            setMval('')
        }
    }


    const onSubmitHandler = () => {
        if (name !== '' && name.length >= 4) {
            if (userType !== '') {
                if (email !== '' && email.includes('@') && email.includes('.')) {
                    if (message !== '') {
                        const dateObj = new Date();
                        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
                        const day = dateObj.getDate().toString().padStart(2, '0')
                        const year = dateObj.getFullYear();
                        const newDate = year + "-" + month + "-" + day;
                        const payLoad = { name: name, usertype: userType, email: email, message: message, createdAt:newDate };
                        instance.post('/contact/add', payLoad)
                            .then((res) => {
                                setName('')
                                setUserType("STUDENT")
                                setEmail('')
                                setMessage('')
                            }
                            )
                            // .catch((err) => {
                            //     console.log("add contact failed", err)
                            // })
                    } else {
                        setMval('Please type your message**')
                    }
                } else {
                    setEvall('Please enter valid email**')
                }
            } else {
                setUval('Please select user type**')
            }
        } else {
            setNval('Please enter a valid name**')
        }
    }


    return (
        <Box id='contact' className='mlay'>
            <Box className='contactbanner'>CONTACT US</Box>
            <Box className='contactus_cont layout'>
                <Box className='contactus_cont_l'>
                    <Typography className='contactus_cont_head'>Get In Touch With Us</Typography>
                    <a href="tel:+918917400626" className='ancchhoorr'><LocationOnIcon className='iicon' />+918917400626</a>
                    <a href="mailto:maritime@cutm.ac.in" className='ancchhoorr'><EmailIcon className='iicon' />maritime@cutm.ac.in</a>
                    <Typography className='contact_add'><CallIcon className='iconn' />School of Maritime Studies, Centurion University of Technology and Management, Ramchandrapur, Jatni, Bhubaneswar, Khurda, Odisha-752054, India</Typography>
                    <Typography className='contactus_cont_head'>Follow Us on</Typography>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.facebook.com/maritime.cutm' target='_blank'><img src={f} alt='f' className='f' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.linkedin.com/company/soms-cutm/' target='_blank'><img src={l} alt='l' className='l' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://twitter.com/soms_cutm' target='_blank'><img src={t} alt='t' className='t' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.instagram.com/maritime.cutm/' target='_blank'><img src={i} alt='i' className='i' /></a>
                </Box>
                <Box className='contactus_cont_r'>
                    <Box className='contact_form_holder'>
                        <Typography className='contactus_cont_head'>Enquiry Now</Typography>
                        <label>FULL NAME: <span className='errr_field'>{nval}</span></label>
                        <input type='text' placeholder='FULL NAME' className='inp_sty' value={name} onChange={(e) => setName(e.target.value)} />
                        <label>USER TYPE: <span className='errr_field'>{uval}</span></label>
                        <select value={userType} name="user" id="user" className='inp_sty' onChange={(e) => setUserType(e.target.value)}>
                            <option value="STUDENT">STUDENT</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                        <label>EMAIL: <span className='errr_field'>{evall}</span></label>
                        <input value={email} type='email' placeholder='EMAIL' className='inp_sty' onChange={(e) => setEmail(e.target.value)} />
                        <label>MESSAGE: <span className='errr_field'>{mval}</span></label>
                        <textarea value={message} className='inp_sty' rows={10} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <Box className='contact_submit_hold'>
                            <button className='contact_submit' onClick={onSubmitHandler}>Submit</button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='alignfooter'></Box>
        </Box>
    );
}

export default Contact;
