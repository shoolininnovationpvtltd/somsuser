import React from 'react';
import './footerr.css'
import logo from '../../images/somslogo.png'
import regg from '../../images/reg.png'
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Footer = (props) => {
  return (
    <Box>
      <Box id='footer' className='layout'>
        <Box className='f_top'>
          <Typography className='embark'>Embark on Your Maritime Career</Typography>
          <Typography className='embark_con'>Seize the helm of your future! Join the SoMS community and set sail on a rewarding maritime career.</Typography>
          <Link className='enqq' to='/contact' onClick={()=>props.receive(5)}>ENQUIRE NOW</Link>
        </Box>
        <Box className='f_lay'>
          <Box className='f_lay_c'>
            <img src={logo} alt='logo' className='llollgg' />
            <Typography className='f_lay_conn'>Ramchandrapur, P.O. – Jatni,<br />Bhubaneswar, Odisha, India – 752050</Typography>
            <img src={regg} alt='regg' className='llollgg' />
            <Typography className='f_lay_conn'>An ISO 9001: 2015 Certified<br />MTI No : 302028</Typography>
          </Box>
          <Box className='f_lay_c'>
            <Typography className='f_lay_c_h'>QUICK LINKS</Typography>
            <ul>
              <li className='f_lay_conn'><Link to='/' style={{color:'white'}} onClick={()=>props.receive(0)}>Home</Link></li>
              <li className='f_lay_conn'><Link to='/about' style={{color:'white'}} onClick={()=>props.receive(1)}>About Us</Link></li>
              <li className='f_lay_conn'><Link to='/contact' style={{color:'white'}} onClick={()=>props.receive(5)}>Contact Us</Link></li>
              <li className='f_lay_conn'><Link to='/career' style={{color:'white'}} onClick={()=>props.receive(4)}>Career</Link></li>
              <li className='f_lay_conn'><Link to='/' style={{color:'white'}}>Privacy Policy</Link></li>
              <li className='f_lay_conn'><Link to='/' style={{color:'white'}}>Refund Policy</Link></li>
              <li className='f_lay_conn'><Link to='/' style={{color:'white'}}>T&C</Link></li>
            </ul>
          </Box>
          <Box className='f_lay_c'>
            <Typography className='f_lay_c_h'>CONTACT US</Typography>
            <Typography className='f_lay_conn s_name'>School of Maritime Studies |<br />Centurion University</Typography>
            <Typography className='f_lay_conn s_addd'>Ramchandrapur, P.O. – Jatni,<br />Bhubaneswar,Odisha, India –<br />752050</Typography>
            <a className='f_lay_conn' href="tel:+918917400626"><CallIcon className='f_lay_conn ccoonn' /> 8917400626</a>
            <a className='f_lay_conn' href="mailto:maritime@cutm.ac.in"><LocalPostOfficeIcon className='f_lay_conn ccoonn' /> maritime@cutm.ac.in</a>
            <Box style={{display:'flex',gap:10}}>
            <a rel="noopener noreferrer" href='https://www.facebook.com/maritime.cutm' target='_blank'><FacebookIcon className='socila_m_icoon'/></a>
            <a rel="noopener noreferrer" href='https://twitter.com/soms_cutm' target='_blank'><TwitterIcon className='socila_m_icoon'/></a>
            <a rel="noopener noreferrer" href='https://www.instagram.com/maritime.cutm/' target='_blank'><InstagramIcon className='socila_m_icoon'/></a>
            <a rel="noopener noreferrer" href='https://www.linkedin.com/company/soms-cutm/' target='_blank'><LinkedInIcon className='socila_m_icoon'/></a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography className='f_bottom'>Copyright © 2024 School of Maritime Studies | Centurion University</Typography>
    </Box>
  );
}

export default Footer;
