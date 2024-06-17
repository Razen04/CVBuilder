import React, { useState } from 'react'
import Experience from './components/Experience/Experience'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import Education from './components/Education/Education'
import ResumeDisplay from './components/ResumeDisplay/ResumeDisplay'



const App = () => {

  const [edit, setEdit] = useState(true)

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [position, setPosition] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [degree, setDegree] = useState('');
  const [study, setStudy] = useState('');
  const [school, setSchool] = useState('');
  const [location, setLocation] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [achievements, setAchievements] = useState('');
  return (
    <div>
      <h1 className='text-3xl text-center font-bold underline mt-6 p-4'>Resume Builder</h1>
      <div className='h-full mx-60 my-10 border-2 border-black relative'>

        {
          edit ? (
            <div>
              <button className='px-4 py-2 bg-blue-300 font-bold rounded-lg absolute right-8 top-4 transition-all hover:bg-blue-500 hover:rounded-full hover:text-white' onClick={() => setEdit(prev => !prev)}>Submit</button>
              <div className="edit mt-20 mx-20">
                <GeneralInfo firstName={firstName} setFirstName={setFirstName} secondName={secondName} setSecondName={setSecondName} number={number} setNumber={setNumber} jobTitle={jobTitle} setJobTitle={setJobTitle} email={email} setEmail={setEmail} summary={summary} setSummary={setSummary} />
                <Experience position={position} setPosition={setPosition} companyName={companyName} setCompanyName={setCompanyName}
                  cityName={cityName} setCityName={setCityName} countryName={countryName} setCountryName={setCountryName} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} description={description} setDescription={setDescription} />
                <Education degree={degree} setDegree={setDegree} study={study} setStudy={setStudy} school={school} setSchool={setSchool} location={location} setLocation={setLocation} achievements={achievements} setAchievements={setAchievements} endingDate={endingDate} setEndingDate={setEndingDate} startingDate={startingDate} setStartingDate={setStartingDate} />
              </div>
            </div>


          ) : (
            <div>
              <button className='px-4 py-2 bg-blue-300 font-bold rounded-lg absolute right-8 top-4 transition-all hover:bg-blue-500 hover:rounded-full hover:text-white' onClick={() => setEdit(prev => !prev)}>Edit</button>
              <div className="view mt-20 mx-20">
                  <ResumeDisplay firstName={firstName} secondName={secondName} number={number} jobTitle={jobTitle} email={email} summary={summary} position={position} companyName={companyName} cityName={cityName} countryName={countryName} startDate={startDate} setStartDate={setStartDate} endDate={endDate} description={description} school={school} location={location} study={study} degree={degree} achievements={achievements} endingDate={endingDate} startingDate={startingDate} />
              </div>
            </div>

          )

        }






      </div>
    </div>

  )
}

export default App
