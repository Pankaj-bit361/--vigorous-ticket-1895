import React from 'react'
// import '../style.scss'
import '../style.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Image } from '@chakra-ui/react'
import WithSubnavigation from '../components/Navbar';
import LargeWithAppLinksAndSocial from "../components/Footer"

const images = [
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c1?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c2?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c3?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c4?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c5?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c6?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c7?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c16?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c8?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c9?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c10?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c11?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c12?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c13?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c14?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk05_022723_hp_fob_4c15?$DWP_PHOTO$`},
]

const imagesLast = [
  {url : `https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_1?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_2?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_3?$DWP_PHOTO$`},
  {url : `https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_4?$DWP_PHOTO$`},
]

export const Home = () => {
  return (
    <>
<WithSubnavigation/>
   
    <div className='main'>

      {/* up part */}
      <div className='up-img'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_brplus_loyaltyweek_fh1?$DWP_PHOTO$' alt='' />
        <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_spec_loyalty_nad_fh1?$DWP_PHOTO$' alt='' />
      </div>

      {/* img slider */}
      <Swiper
        slidesPreView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Image src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh3_carl?$DWP_PHOTO$' ml='70px'
            mt='34px' w='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh4_carl?$DWP_PHOTO$' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh1_carl?$DWP_PHOTO$' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh2_carl?$DWP_PHOTO$' w='100%' mt='34px'
            ml='70px' />
        </SwiperSlide>
      </Swiper>

      {/* img text */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_fh1?$DWP_PHOTO$' alt='' />
      </div>

      {/* double img */}
      <div className='up-img6-main'>
        <div className='up-img6-first'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_2c1?$DWP_PHOTO$' alt='' />
        </div>
        <div className='up-img6-main-second'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_032723_hp_2c2?$DWP_PHOTO$' alt='' />
        </div>
      </div>

      {/* img text 2 */}

      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/content/Belk/wk09_2023_lauder_gwp_hp' alt='' />
      </div>

      {/* img 3*/}
      <div className='up-img4-main'>
        <div className='up-img4-first'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c1?$DWP_PHOTO$' alt='' />
        </div>
        <div className='up-img3-main-second'>
          <img src='https://belk.scene7.com/is/content/Belk/wk09_2023_weekday_deals_3c2' alt='' />
        </div>
        <div className='up-img4-second'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c3?$DWP_PHOTO$' alt='' />
        </div>
      </div>

      {/* triple img */}

      <div className='up-img3-main'>
        <div className='up-img3-first'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c4?$DWP_PHOTO$' alt='' />
        </div>
        <div className='up-img3-main-second'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c5?$DWP_PHOTO$' alt='' />
        </div>
        <div className='up-img3-main-second'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_weekday_deals_3c6?$DWP_PHOTO$' alt='' />
        </div>
      </div>

      {/* img text 3 */}
      <div className='up-img2' style={{ marginTop: '9px' }}>
        <img src='https://belk.scene7.com/is/image/Belk/disclaimer_fall2021_generic?$DWP_PHOTO$' alt='' />
      </div>

      {/* img 4*/}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_fh?$DWP_PHOTO$' alt='' />
      </div>

      {/* six img */}
      <div className='up-img5-main'>
        <div className='img1'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl1?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img2'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl2?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img3'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl3?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img4'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl4?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img5'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl5?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img6'>
          <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_coupons_hp_6c_carl6?$DWP_PHOTO$' alt='' />
        </div>
      </div>

      {/* img 5*/}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_spec_golf_shop_hp_fh1?$DWP_PHOTO$' alt='' />
      </div>

      {/* img 5*/}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk02_2023_spec_levi_nse_all_hp?$DWP_PHOTO$' alt='' />
      </div>

      {/* img 6 */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_2023_women_fashion_moment_hp_fh_1?$DWP_PHOTO$' alt='' />
      </div>

      {/* img 7 */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk09_032623_hp_hey_dude_fh?$DWP_PHOTO$' alt='' />
      </div>

      {/* img 8 */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk08_2023_online_exclusive_lp_fh_1?$DWP_PHOTO$' alt='' />
      </div>

      {/* double img2 */}
      <div className='.up-img7-main' style={{ marginTop: '30px', display:'flex' , justifyContent:'space-around'}}>
        <div className='img1'>
          <img src='https://belk.scene7.com/is/image/Belk/wk08_2023_promshop_hp_2c1?$DWP_PHOTO$' alt='' />
        </div>
        <div className='img2'>
          <img src='https://belk.scene7.com/is/image/Belk/wk05_2023_trendedit_2c2_right?$DWP_PHOTO$' alt='' />
        </div>
      </div>

      {/* img 9 */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk07_031323_hp_fh1?$DWP_PHOTO$' alt='' />
      </div>

         {/* sixteen img map */}

      <div className='bottom-images'>
        {
          images.map((item, index) => {
            return (
              <div className='single-bottom-image'>
                <img src={item.url} alt="" />
              </div>
            )
          })
        }     
      </div>

        
      {/* img 10 */}
      <div className='up-img2'>
        <img src='https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$' alt='' />
      </div>
       
         {/* four img map*/}
        <div className='botton-last-img'>
          {
            imagesLast.map((item)=>{
              return(
                <div className='bottom-last-single-img'>
                  <img src={item.url} alt=''/>
                  </div>
                ) 
                
            })
          }
        </div>
      {/* end main */}
    </div>
    <LargeWithAppLinksAndSocial/>
</>
  )
}

export default Home