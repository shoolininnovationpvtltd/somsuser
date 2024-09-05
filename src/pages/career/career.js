import { Box, Typography } from '@mui/material';
import React, { useEffect, useState,useRef} from 'react';
import instance from '../../config/axios.config'
import './career.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import f from '../../images/f.png'
import l from '../../images/l.png'
import t from '../../images/t.png'
import i from '../../images/i.png'
const Career = () => {
    // -------------------------------
    const [name, setName] = useState('')
    const [vacancy, setVacancy] = useState('')
    const [email, setEmail] = useState('')
    const [imgg, setImgg] = useState('')
    const [mess, setMess] = useState('')
    const [ename, setEname] = useState('')
    const [evacancy, setEvacancy] = useState('')
    const [eemail, setEemail] = useState('')
    const [emess, setEmess] = useState('')
    const [filevalidationn, setFileValidationn] = useState('')
    const inputRef = useRef(null)
    // -------------------------------
    const [vaccc, setVaccc] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        if (name !== '' && name.length >= 4) {
            setEname('')
        }
        if (vacancy !== '') {
            setEvacancy('')
        }
        if (email !== '' && email.includes('@') && email.includes('.')) {
            setEemail('')
        }
        if (mess !== '') {
            setEmess('')
        }
    }, [imgg, name, vacancy, email, mess])
    // get vacancy
    const getVacancy = () => {
        instance.get('/vacancy/get').then((res) => {
            setVaccc(res.data)
        })
    }
    useEffect(() => {
        getVacancy()
    }, [])
    useEffect(() => {
        if (vaccc && vaccc.length > 0) {
            setVacancy(vaccc[0].name);
        }
    }, [vaccc])

    // useEffect(() => {
    //     if (vaccc.length > 0) {
    //         setVacancy(vaccc[0].name)
    //     } else {
    //         setVacancy('')
    //     }
    // }, [])
    // post career
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (name !== '' && name.length >= 4) {
            if (vacancy !== '') {
                if (email !== '' && email.includes('@') && email.includes('.')) {

                    if (imgg !== null) {
                        if (imgg.name.split('.').pop() === 'pdf') {
                            if (mess !== '') {
                                const formData = new FormData();
                                formData.append("name", name)
                                formData.append("requirement", vacancy)
                                formData.append("email", email)
                                formData.append("file", imgg)
                                formData.append("message", mess)
                                instance.post("/carrer/add", formData, { headers: { "Content-Type": "multipart/form-data" } })
                                    .then((res) => {
                                        setName('')
                                        setVacancy(vaccc[0].name)
                                        setEmail('')
                                        setImgg(inputRef.current.value = null)
                                        setMess('')
                                        setFileValidationn(null)
                                    }
                                    )
                            } else {
                                setEmess('Please type your message**')
                            }
                        } else {
                            setFileValidationn('Please select a pdf file')
                        }
                    } else {
                        setFileValidationn('Please select a file')
                    }
                } else {
                    setEemail('Please enter a valid email**')
                }
            } else {
                setEvacancy('Please select the position**')
            }
        } else {
            setEname("Please enter your name**")
        }
    }


    return (
        <Box id='contact' className='mlay'>
            <Box className='contactbanner'>CAREER</Box>
            <Box className='contactus_cont layout'>
                <Box className='contactus_cont_l'>
                    <Typography className='contactus_cont_head'>Get In Touch With Us</Typography>
                    <a href="tel:+918917400626" className='ancchhoorr'><LocationOnIcon className='iicon' />+9197779 44729</a>
                    <a href="mailto:hrmarine@cutm.ac.in" className='ancchhoorr'><EmailIcon className='iicon' />hrmarine@cutm.ac.in</a>
                    <Typography className='contact_add'><CallIcon className='iconn' />School of Maritime Studies, Centurion University of Technology and Management, Ramchandrapur, Jatni, Bhubaneswar, Khurda, Odisha-752054, India</Typography>
                    <Typography className='contactus_cont_head'>Follow Us on</Typography>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.facebook.com/maritime.cutm' target='_blank'><img src={f} alt='f' className='f' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.linkedin.com/company/soms-cutm/' target='_blank'><img src={l} alt='l' className='l' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://twitter.com/soms_cutm' target='_blank'><img src={t} alt='t' className='t' /></a>
                    <a rel="noopener noreferrer" style={{ cursor: 'pointer' }} href='https://www.instagram.com/maritime.cutm/' target='_blank'><img src={i} alt='i' className='i' /></a>
                </Box>
                <Box className='contactus_cont_r'>
                    <Box className='contact_form_holder'>
                        <Typography className='contactus_cont_head'>Apply Now</Typography>
                        <form onSubmit={onSubmitHandler}>
                            <label>FULL NAME: <span className='errr_field'>{ename}</span></label>
                            <input type='text' placeholder='FULL NAME' className='inp_sty' onChange={(e) => setName(e.target.value)} value={name} />
                            <label>VACANCY: <span className='errr_field'>{evacancy}</span></label>
                            <select name="user" id="user" className='inp_sty' onChange={(e) => setVacancy(e.target.value)} value={vacancy}>
                                {vaccc.length > 0 ? vaccc.map((e) => (<option value={e.name} key={e._id}>{e.name}</option>)) : <option value='none'>none</option>}
                            </select>
                            <label>EMAIL: <span className='errr_field'>{eemail}</span></label>
                            <input type='email' placeholder='EMAIL' className='inp_sty' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <label>ATTACHMENT: <span className='errr_field'>{filevalidationn}</span></label>
                            <input type='file' className='inp_sty' accept='application/pdf' onChange={(e) => setImgg(e.target.files[0])} ref={inputRef}/>
                            <label>MESSAGE: <span className='errr_field'>{emess}</span></label>
                            <textarea className='inp_sty' rows={10} onChange={(e) => setMess(e.target.value)} value={mess}></textarea>
                            <Box className='contact_submit_hold'>
                                <button className='contact_submit' type='submit'>Submit</button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
            <Box className='alignfooter'></Box>
        </Box>
    );
}

export default Career;
