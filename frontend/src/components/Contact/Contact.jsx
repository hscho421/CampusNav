import React from "react";
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-container">
            <section className='contact-image-display'>
                <h1>{t('contact')}</h1>
            </section>
            <div className="iframe-container">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeeK5-iDnIHKKLaGrrh1tmIGM38Du58bRIUq5xQSWH7_x1cIA/viewform?embedded=true"
                    title="Contact Form"
                >
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
