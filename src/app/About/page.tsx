import React from 'react';
import styles from './About.module.css';
// import { ReactComponent as Logo } from '../../assets/logo-no-back.svg';
import logo from '../../assets/logo-no-back.svg';
import Image from "next/image";
const About = () => {
    return (
        <div className={styles.about}>
            <Image style={{height:'50px',width:'140px'}} src={logo} alt={'logo'}></Image>
        </div>
    );
};

export default About;
