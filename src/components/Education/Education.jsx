
import React from 'react'

const Education = ({ school, location, study, degree, setSchool, setLocation, setDegree, setStudy, achievements, setAchievements, startingDate, setStartingDate, endingDate, setEndingDate }) => {
    return (
        <div>
            <div className="education mb-20">
                <h1 className='text-3xl mb-4'>
                    Education
                </h1>
                <div className="degree flex items-center">
                    <input
                        type="text"
                        placeholder='Degree'
                        value={degree}
                        onChange={(event) => setDegree(event.target.value)}
                        className='p-2 border-b-2 outline-none text-center'
                    />
                    <span>in</span>
                    <input
                        type="text"
                        placeholder='Field of Study'
                        value={study}
                        onChange={(event) => setStudy(event.target.value)}
                        className='p-2 border-b-2 outline-none text-center'
                    />
                    <div className="date flex mt-4 ml-6">
                        <div className="start border-2 p-2 mr-4">
                            <h2>Start Date</h2>
                            <input type="date" className='outline-none'
                                value={startingDate}
                                onChange={(event) => setStartingDate(event.target.value)}
                            />
                        </div>
                        <div className="end border-2 p-2">
                            <h2>End Date</h2>
                            <input type="date" className='outline-none'
                                value={endingDate}
                                onChange={(event) => setEndingDate(event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="school-details">
                    <div className="company-name mt-2 flex items-center">
                        <input
                            type="text"
                            placeholder='School Name'
                            value={school}
                            onChange={(event) => setSchool(event.target.value)}
                            className='p-2 border-b-2 outline-none text-center mr-4 w-min'
                        />
                        <span>at</span>
                        <input
                            type="text"
                            placeholder='School Location'
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            className='p-2 border-b-2 outline-none text-center mr-4'
                        />
                    </div>

                    <div className="summary mt-4 border-2">
                        <textarea rows='5' placeholder='Description (not more than 100 words)....' className='w-full h-full outline-none p-2 resize-none'
                            value={achievements}
                            onChange={(event) => setAchievements(event.target.value)}
                        ></textarea>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Education
