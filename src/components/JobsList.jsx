import jobs from '../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function JobsList() {
  const [jobData, setJobData] = useState(jobs)
  
  return (
    <section>
      <div>
        {jobData.map((item) => (
          <div>
            <div>
              <h6>{item.postedAt}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
