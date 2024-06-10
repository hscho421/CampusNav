import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import './UniversityInput.css'

const UniversityInput = ({ onSubmit }) => {

    const { t } = useTranslation();
    const [university,setUniversity] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(university);
    }
    return (
        <div className="university-input">
            <h1>{t('enterUniversity')}</h1>
            <p>{t('enterUniversityMessage')}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={t('universityPlaceholder')}
                    className="university-search"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                />
                <button type="submit" className="submit-university">
                    Submit
                </button>
            </form>
        </div>
    );

}

export default UniversityInput;
