import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMedium } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Yashodatta15' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/yashodattapatil15/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href="mailto:patilyashodatta1999@gmail.com" className="home__social-link" target='_blank' rel='noreferrer'> 
                <FaEnvelope />
            </a>

            <a href='https://medium.com/@patilyashodatta' className='home__social-link' target='_blank' rel='noreferrer'> 
                <FaMedium />
            </a>


        </div>
    );
};

export default HeaderSocials;
