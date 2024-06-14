import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './UniversityInput.css';

const UniversityInput = ({ onSubmit }) => {
    const { t } = useTranslation();
    const [universities, setUniversities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [university, setUniversity] = useState('');

    // Fetch the university names when the component mounts
    useEffect(() => {
        fetch('/universitiesList.json')
            .then(response => response.json())
            .then(data => setUniversities(data))
            .catch(error => console.error('Error fetching universities:', error));
    }, []);

    // Update the filtered universities based on the search term
    useEffect(() => {
        setFilteredUniversities(
            universities.filter(univ =>
                univ.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, universities]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setUniversity(value);
    };

    const handleSelectUniversity = (univ) => {
        setUniversity(univ);
        setSearchTerm(univ);
        setFilteredUniversities([]); // Clear the dropdown after selection
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (universities.includes(university)) {
            onSubmit(university); // Pass the selected university to the parent component
        } else {
            alert(t('universityNotFound')); // Display an alert if the university is not in the list
        }
    };

    return (
        <div className="university-input">
            <div className="university-box">
                <h1>{t('enterUniversity')}</h1>
                <p>{t('enterUniversityMessage')}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={t('universityPlaceholder')}
                        className="university-search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        required
                    />
                    {filteredUniversities.length > 0 && (
                        <div className="dropdown">
                            <ul className="university-list">
                                {filteredUniversities.map((univ, index) => (
                                    <li key={index} onMouseDown={() => handleSelectUniversity(univ)}>
                                        {univ}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button type="submit" className="submit-university">
                        {t('submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UniversityInput;
