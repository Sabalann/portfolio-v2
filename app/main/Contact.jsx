'use client'

import Image from "next/image";

export default function Contact() {
    const openLink = (link) => window.open(link, '_blank');
    const openMail = () => window.location.href = 'mailto:s.alaeiyeh@gmail.com?subject=Project Inquiry';

    return (
        <div className="contact h-full w-full relative"> 
            <a className="contact-button" onClick={() => openLink('https://www.linkedin.com/in/sabalan-alaeiyeh')}>LinkedIn</a> <br/>
            <a className="contact-button" onClick={() => openLink('https://www.instagram.com/sabalan.kh/?next=/')}>Instagram</a> <br/>
            <p className="mt-10">Laten we samen iets moois maken</p>
            <a className="contact-button" onClick={openMail}>s.alaeiyeh@gmail.com</a>
            <Image className="absolute right-0 bottom-0" src={'/profile.jpg'} alt="Foto van mij" width={500} height={500}></Image>
        </div>
    );
}