import React from 'react'

const ResumeDisplay = ({ firstName, secondName, jobTitle, number, email, summary, position, companyName, cityName, countryName, startDate, endDate, description, school, location, study, degree, achievements, startingDate, endingDate }) => {
    return (
        <div className='mb-20'>
            <header className="personal-details  border-b-2 pb-6 border-black">
                <div className="name flex justify-center">
                    <h1 className='p-1 text-3xl font-bold'>{firstName}</h1>
                    <h1 className='p-1 text-3xl font-bold'>{secondName}</h1>
                </div>
                <div className="job-title flex justify-center mt-2">
                    <h2 className='text-2xl font-semibold'>{jobTitle}</h2>
                </div>
                <div className="contact-details mt-2 flex justify-between w-full">
                    <h3>{number}</h3>
                    <h3>{email}</h3>
                </div>
                <div className="summary mt-4 text-justify">
                    <p className='font-medium'>{summary}</p>
                </div>
            </header>
            <div className="personal-experience pb-6 border-b-2 border-black">
                <h1 className='text-3xl mb-4'>
                    Professional Experience
                </h1>
                <h2 className='font-bold'>{position}</h2>
                <div className="professional-details">
                    <div className="company-name italic flex justify-between items-center">
                        <div className='flex'>
                            <h2>{companyName}</h2>
                            <h2>, {cityName}</h2>
                            <h2>, {countryName}</h2>
                        </div>
                        <div className="date flex">
                            <h2>{startDate}</h2> <span>  —  </span>
                            <h2>{endDate}</h2>
                        </div>
                    </div>
                    <div className="summary mt-4 text-justify">
                        <p>{description}</p>
                    </div>

                </div>

            </div>
            <div className="education">
                <h1 className='text-3xl mb-4'>
                    Education
                </h1>
                <div className="degree flex items-center">
                    <h2>{degree} in {study} {startingDate} — {endingDate}</h2>

                </div>

                <div className="school-details">
                    <div className="company-name mt-2 flex items-center">
                        <h2>{school} at {location}</h2>
                    </div>

                    <div className="summary mt-4">
                        <p>{achievements}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ResumeDisplay
