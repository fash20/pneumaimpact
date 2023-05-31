import { Button } from '@mui/material'
import React from 'react'
import shirtman from '../assets/images/shirtman.svg'
import iphone from '../assets/images/iphone.png'

const Phone = () => {
  return (
    <div className='p-5 md:p-10 xl:p-20 flex flex-col space-y-20'>
        <div className="grid  grid-col-1 space-y-4 lg:grid-cols-2 lg:space-y-0 mt-3 mb-2 ">
            <div className=' font-nuSans text-3xl  max-w-[350px]  tracking-wider  '>
                <span className="step-title-blue">
                   Win an {" "}
                </span>
                <span className="step-title-red">
                     iPhone 13 Pro max
                </span>
            </div>
            <span className='hiw-sub text-sm leading-[40px] tracking-wider'>
            The student with the highest attendance in class will be given an iPhone 13 Pro max as a consistency gift.
            </span>
        </div>
        <div className='mt-3 h-40'>
            <img alt='dubai' className='w-full h-full object-cover ' src={iphone}  />
        </div>
        <div className='grid grid-col-1 space-y-10 lg:grid-cols-2 lg:space-y-0  mt-3 mb-2 '>
            <div className='flex flex-col space-y-10 ml-3 md:ml-7 max-w-[550px] lg:ml-10 '>
                <span className="font-nuSans text-3xl max-w-[450px] tracking-wider  ">
                Entrepreneurship  Summit
                </span>
                <div className='hiw-sub text-sm leading-8 tracking-wider space-y-3'> 
                <p> All our students will be invited to a physical entrepreneurship Summit where notable speakers 
                    will be brought to speak to them. </p> 
                <p>
                This same day is the day when our grant beneficiaries, our all expense paid trip to Dubai winners 
                and our iPhone 13 Pro max winner will be announced. 
                </p>
                <p>
                All students will be given the company's shirt, pen, bag, diary and other necessary items from Pneuma Impact.
                </p>
                </div>
                <div>
                    <Button variant="pneumaBlue" size='small' href='/signup'>Register now</Button>
                </div>
                
            </div>
            <div className='max-h-[400px] max-w-[400p]'>
                <img className='w-full h-full object-contain ' alt='img' src={shirtman} />
            </div>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <span className=' step-title-blue text-3xl text-primaryTextColor max-w-[300px]  tracking-wider'> Certification</span>
            <span className='hiw-sub text-sm leading-[40px] max-w-[1000px] tracking-wider text-center'>
            Two internationally recognised certificates will be presented to our students. Certificate in Entrepreneurship 
            studies and certificate in Entrepreneurship Digital marketing
            </span>

        </div>
    </div>
  )
}

export default Phone