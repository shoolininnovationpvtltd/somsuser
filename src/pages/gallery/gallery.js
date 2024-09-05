import React, { useEffect, useState } from 'react';
import './gallery.css'
import { Box, Typography } from '@mui/material';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import instance from '../../config/axios.config'
import { burl } from '../../config/axios.config'


const Galleryy = () => {
  const [imagecat, setImagecat] = useState([])
  const [images, setImages] = useState([])
  const [data, setData] = useState({ img: '', i: 0 })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const viewImage = (img, i) => {
    setData({ img, i })
  }
  const imgAction = (action) => {
    let currentIndex = data.i;
    let newIndex;

    switch (action) {
      case 'next-img':
        newIndex = (currentIndex + 1) % images.length;
        break;
      case 'prev-img':
        newIndex = (currentIndex - 1 + images.length) % images.length;
        break;
      default:
        setData({ img: '', i: 0 });
        return;
    }

    setData({ img: images[newIndex].pdf, i: newIndex });
  };
  // get galery category
  const getIcat = () => {
    instance.get('/gc/get').then((res) => {
      setImagecat(res.data)
    })
  }
    // get galery 
    const getGallery = () => {
      instance.get('/ggalleryy/get').then((res) => {
        setImages(res.data)
      })
    }
  useEffect(() => {
    getIcat()
    getGallery()
  }, [])
  return (
    <Box className='mlay' id='gallery'>
      {
        data.img &&
        <div style={{ width: '100%', height: '100vh', background: 'rgb(0 0 0 / 85%)', position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', zIndex: 1000000, top: 0 }}>
          <CloseIcon style={{ position: 'absolute', top: 20, right: 20, fontSize: 28, color: 'white', cursor: 'pointer' }} onClick={() => imgAction()} />
          <ArrowLeftIcon style={{ fontSize: 45, color: 'white', cursor: 'pointer' }} onClick={() => imgAction('prev-img')} />
          <img src={`${burl}galleryimg/${data.img}`} style={{ width: '60%', maxWidth: '90%', maxHeight: '90%' }} alt='modall' />
          <ArrowRightIcon style={{ fontSize: 45, color: 'white', cursor: 'pointer' }} onClick={() => imgAction('next-img')} />
        </div>
      }



      <Box className='gallerybanner'>GALLERY</Box>
      {
        imagecat.map((e) => (
          <Box key={e._id}>
            <Typography className='gallery_head layout'>{e.name} <Link className='more' to={`/maingallery/${e.name}`}>More<KeyboardDoubleArrowRightIcon className='icco' /></Link></Typography>
            <Box className='layout gallery_holder'>
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                <Masonry gutter='15px'>
                  {images.filter((x) => x.description === `${e.name}`).slice(0,4).map((image, i) =>
                    <img key={i} src={`${burl}galleryimg/${image.pdf}`} style={{ width: "100%", display: "block", borderRadius: 8, cursor: 'pointer' }} alt="gallery_images" onClick={() => viewImage(image.pdf, i)} />
                  )}
                </Masonry>
              </ResponsiveMasonry>
            </Box>
          </Box>
        ))
      }


      {
        data.img &&
        <div style={{ width: '100%', height: '100vh', background: 'rgb(0 0 0 / 85%)', position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', zIndex: 1000000, top: 0 }}>
          <CloseIcon style={{ position: 'absolute', top: 20, right: 20, fontSize: 28, color: 'white', cursor: 'pointer' }} onClick={() => imgAction()} />
          <ArrowLeftIcon style={{ fontSize: 45, color: 'white', cursor: 'pointer' }} onClick={() => imgAction('prev-img')} />
          <img src={`${burl}galleryimg/${data.img}`} style={{ width: '60%', maxWidth: '90%', maxHeight: '90%' }} alt='modall' />
          <ArrowRightIcon style={{ fontSize: 45, color: 'white', cursor: 'pointer' }} onClick={() => imgAction('next-img')} />
        </div>
      }
      <Box className='alignfooter'></Box>
      <Box className='alignfooter'></Box>

    </Box>
  );
}

export default Galleryy;
