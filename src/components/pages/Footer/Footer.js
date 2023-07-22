import React from 'react';
import './Footer.css';
import {IoIosPlanet} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';


function Footer() {
  const {t} = useTranslation();

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{t("about")}</h2>
            <Link to='/sign-up'>{t("howItWorks")}</Link>
            <Link to='/'>{t("investors")}</Link>
            <Link to='/'>{t("terms_of_service")}</Link>
          </div>
          <div className='footer-link-items'>
            <h2>{t("contact")}</h2>
            <Link to='/'>{t("contact")}</Link>
            <Link to='/'>{t("support")}</Link>
            <Link to='/'>{t("address")}</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'> 
          <div className='footer-link-items'>
            <h2>{t("social")}</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <IoIosPlanet className='navbar-icon' />
              Astroworld
            </Link>
          </div>
          <small className='website-rights'>Astroworld © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;