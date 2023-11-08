import { useParams } from 'react-router-dom'
import jobs from '../data/data'

export function JobDetails() {
  const { position } = useParams()
  const job = jobs.find((job) => job.position === position)

  return (
    <section>
      <div className='container'>
        <div className='details__top'>
          <img src={job.logoDetail} alt='logo' />
          <div>
            <h3>{job.company}</h3>
            <p>
              {job.postedAt} - {job.contract}
            </p>
            <h1>{job.position}</h1>
          </div>
        </div>
        <div className='job__desc'>
          <div>
            <h2>Description</h2>
            <p>{job.desc}</p>
          </div>
        </div>
        <div className='requirements'>
          <h2>Requirements</h2>
          <p>{job.requirements.reqTitle}</p>
          <ul className='requirement__items'>
            {job.requirements.reqItem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
