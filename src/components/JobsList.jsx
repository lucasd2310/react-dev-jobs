import jobs from '../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function JobsList() {
  const [jobData, setJobData] = useState(jobs)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchByLocation, setSearchByLocation] = useState('')
  const searchTermValue = searchTerm.toLowerCase()

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) => job.location.toLowerCase().includes(searchByLocation.toLowerCase()))

    setJobData(filteredData)
  }

  const filterJobData = (e) => {
    let filteredData
    const filteredValue = e.target.value
    
    switch (filteredValue) {
      case 'full-time':
        filteredData = jobs.filter((job) => job.contract === 'Full Time')
        setJobData(filteredData)
        break;
      case 'part-time':
        filteredData = jobs.filter((job) => job.contract === 'Part Time')
        setJobData(filteredData)
        break;
      case 'freelance':
        filteredData = jobs.filter((job) => job.contract === 'Freelance')
        setJobData(filteredData)
        break;
      case 'others':
        filteredData = jobs.filter((job) => !['Full Time', 'Part Time', 'Freelance'].includes(job.contract))
        setJobData(filteredData)
        break;
      default:
        setJobData(jobs)
        break;
    }
  }
  

  return (
    <section className='job__list'>
      <div className='container'>
        <div className='job__list__wrapper'>
          <div className='search__panel'>
            <div className='search__panel-01'>
              <input
                type='text'
                size={40}
                placeholder='Search by position or company'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className='search__panel-02'>
              <input
                  type='text'
                  placeholder='Search by location'
                  value={searchByLocation}
                  onChange={(e) => setSearchByLocation(e.target.value)}
                />
                <button onClick={locationSearchHandler}>Search</button>
            </div>
            <div className='search__panel-03'>
              <select onChange={filterJobData}>
                <option>Filter job by</option>
                <option value='full-time'>Full Time</option>
                <option value='part-time'>Part Time</option>
                <option value='freelance'>Freelance</option>
                <option value='others'>Others</option>
              </select>
            </div>
          </div>
          <div className='jobs__wrapper'>
            {jobData
              ?.filter((job) => {
                if (searchTerm === '') return job

                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                )
                  return job
              })
              .map((item) => (
                <div
                  className='job__item'
                  key={item.id}
                >
                  <img src={item.logo} alt='logo' />
                  <div className='job__content'>
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>
                    <div className='location'>
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
