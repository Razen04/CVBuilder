import React from 'react'

const Experience = ({ position, setPosition, companyName, setCompanyName, cityName, setCityName, countryName, setCountryName, startDate, setStartDate, endDate, setEndDate, description, setDescription }) => {
    return (
        <div>
            <div className="personal-experience pb-6 border-b-2 border-black">
                <h1 className='text-3xl mb-4'>
                    Professional Experience
                </h1>
                <input
                    type="text"
                    placeholder='Position Title'
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    className='p-2 border-b-2 outline-none text-center'
                />
                <div className="professional-details">
                    <div className="company-name italic mt-2 flex">
                        <input
                            type="text"
                            placeholder='Company Name'
                            value={companyName}
                            onChange={(event) => setCompanyName(event.target.value)}
                            className='p-2 border-b-2 outline-none text-center mr-4 w-min'
                        />
                        <input
                            type="text"
                            placeholder='City Name'
                            value={cityName}
                            onChange={(event) => setCityName(event.target.value)}
                            className='p-2 border-b-2 outline-none text-center mr-4'
                        />
                        <input
                            type="text"
                            placeholder='Country Name'
                            value={countryName}
                            onChange={(event) => setCountryName(event.target.value)}
                            className='p-2 border-b-2 outline-none text-center'
                        />
                    </div>
                    <div className="date flex mt-4">
                        <div className="start border-2 p-2 mr-4">
                            <h2>Start Date</h2>
                            <input
                                type="date"
                                className='outline-none'
                                value={startDate}
                                onChange={(event) => setStartDate(event.target.value)}
                            />
                        </div>
                        <div className="end border-2 p-2">
                            <h2>End Date</h2>
                            <input
                                type="date"
                                className='outline-none'
                                value={endDate}
                                onChange={(event) => setEndDate(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="summary mt-4 border-2">
                        <textarea rows='5' placeholder='Enter summary of work (not more than 100 words)....' className='w-full h-full outline-none p-2 resize-none'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}

                        ></textarea>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
