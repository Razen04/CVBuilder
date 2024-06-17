import React from 'react'

const GeneralInfo = ({ firstName, setFirstName, secondName, setSecondName, jobTitle, setJobTitle, number, setNumber, email, setEmail, summary, setSummary }) => {
    return (
        <div>
            <header className="personal-details  border-b-2 pb-6 border-black">
                <div className="name flex justify-center">
                    <input
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(event) => (
                            setFirstName(event.target.value)
                        )}
                        className='p-2 border-b-2 mr-4 outline-none text-center'
                    />
                    <input
                        type="text"
                        placeholder='Second Name'
                        value={secondName}
                        onChange={(event) => (
                            setSecondName(event.target.value)
                        )}
                        className='p-2 border-b-2 outline-none text-center'
                    />
                </div>
                <div className="job-title flex justify-center mt-2">
                    <input
                        type="text"
                        placeholder='Job Title'
                        value={jobTitle}
                        onChange={(event) => (
                            setJobTitle(event.target.value)
                        )}
                        className='p-2 border-b-2 outline-none text-center'
                    />
                </div>

                <div className="contact-details mt-2 flex justify-between w-full">
                    <input
                        type="number"
                        placeholder='Phone Number'
                        value={number}
                        onChange={(event) => (
                            setNumber(event.target.value)
                        )}
                        className='p-2 border-b-2 outline-none text-center mr-4'
                    />
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(event) => (
                            setEmail(event.target.value)
                        )}
                        className='p-2 border-b-2 outline-none text-center'
                    />
                </div>
                <div className="summary mt-4 border-2">
                    <textarea
                        rows='5'
                        placeholder='Enter summary of yourself (not more than 100 words)....'
                        className='w-full h-full outline-none p-2 resize-none'
                        value={summary}
                        onChange={(event) => (
                            setSummary(event.target.value)
                        )}
                    ></textarea>
                </div>
            </header>
        </div>
    )
}

export default GeneralInfo
