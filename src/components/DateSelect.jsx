import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon } from 'lucide-react'
const DateSelect = () => {
  return (
    <div id='dateSelect' className='pt-30'>
          <div>
              <BlurCircle top='-100px' left='-100px' />
              <BlurCircle top='100px' right='0px' />
              <div>
                  <p>Choose Date</p>
                  <div><ChevronLeftIcon width={28} /></div>
              </div>
      </div>
    </div>
  )
}

export default DateSelect
