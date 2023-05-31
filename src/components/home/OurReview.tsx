
// import { ArrowLeftIcon, ArrowRightIcon, IconButton } from "@mui/icons-material"
import React, {useState} from "react";
import '../styles/animations.css'
import image1 from '../assets/images/testimonials/image1.png'
import image2 from '../assets/images/testimonials/image2.jpeg'
import image3 from '../assets/images/testimonials/image3.jpeg'
import image6 from '../assets/images/testimonials/image6.jpg'
import image7 from '../assets/images/testimonials/image7.png'

const Testimonials= [
  {
    author:'Lara',
    field:'',
    review:`I've never seen a complete training for entrepreneurs like this before. Talk about finance management, business management, 
    business plan, etc., PneumaImpact got all these. I urge everyone into business and anyone that wants to start any business to go through 
    all PneumaImpact training activities. It's best thing that's ever happened to me and my business.`,
    img:image1
  },
  {
    author:'Francis',
    field:'',
    review:` never business business plan wiring could be this simple. I enrolled with PneumaImpact and I was taught comprehensively 
    everything I  needed to know about writing business plan. My business has its own plan now and this has made me more visible to investors. 
    And guess what? I won the $1,000 grants from PneumaImpact. Thank you PneumaImpact.`,
    img:image6
  },
  {
    author:'Michael',
    field:'',
    review:`I've been wanting to start business for long but no adequate training materials for me. A friend sent PneumaImpact link to me.
     I applied and found all the courses interesting and educating. Now, I can start my business in peace and I even have mentors from them 
     for a whole year. Thank you PneumaImpact.`,
     img:image3
  },
  {
    author:'Chimezie',
    field:'',
    review:`The digital marketing training is all I needed to move my business to the internet. I got everything from PneumaImpact. 
    Thank you also for the iPhone 13 pro max that I won. I love you PneumaImpact 🤗
    Chimezie T`,
    img:image2
  },
  // {
  //   author:'Adebayo ',
  //   field:'',
  //   review:`The digital marketing training is all I need to move my business to the internet. I got everything from Pneuma Impact.
  //   Thank you also for the iPhone 13 pro max that I won. I love you Pneuma Impact 🤗
  //   Chimezie T`,
  //   img:image6
  // },
  // {
  //   author:'Chimezie T.',
  //   field:'',
  //   review:`The digital marketing training is all I need to move my business to the internet. I got everything from Pneuma Impact.
  //   Thank you also for the iPhone 13 pro max that I won. I love you Pneuma Impact 🤗
  //   Chimezie T`,
  //   img:image2
  // },
]

const OurReview = () => {
  const [testimonialCount, setTestimonialCount] = useState(0)

  const handleIncrement = () => {
   if (testimonialCount + 1 < Testimonials.length ){
    setTestimonialCount(testimonialCount+1)
   }
   else if (testimonialCount + 1 === Testimonials.length){
    setTestimonialCount(0)
   }
  }
  const handleDecrement = () => {
   if (testimonialCount > 0 ){
    setTestimonialCount(testimonialCount - 1)
   }
   else if (testimonialCount  <= 0 ){
    setTestimonialCount(Testimonials.length-1)
   }
  }

  return (
    <div className="relative flex flex-col justify-center items-center ">
      <div className="grid">
        <div className="text-center">
          <span className="step-title-blue">What our </span>
          <span className="step-title-red">Students </span>
          <span className="step-title-blue">say</span>
        </div>
        <div className="flex z-0 flex-col relative justify-center items-center h-[700px] ">
          <StudentReview testimonial={Testimonials[testimonialCount]} count={testimonialCount} />
          <StudentReview2 />
          <StudentReview3 />
          
        </div>
        <div className=" flex space-x-3 justify-center  ">
          {/* <IconButton icon={ArrowLeftIcon} onClick={handleDecrement} />
          <IconButton icon={ArrowRightIcon} onClick={handleIncrement} /> */}
        </div>
      </div>
    </div>
  );
};

export default OurReview;


interface TestimonialProp  {
  testimonial? :{
  author : string
  field : string
  review : string
  img:string
  }
  count: number
}

const StudentReview = ({testimonial, count}:TestimonialProp) => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative md:absolute box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[80%] sm:w-[550px] md:w-[650px] lg:w-[750px] bx-shw
      `}
      style={{zIndex:3}}
    >
      <div className="relative md:absolute flex font-extrabold items-center justify-center h-[100px] md:left-16 text-[130px] text-[#DBDAFF] ">
        {/* <img style={{ maxHeight: "100%" }} src={numberOne} /> */}
        0{
          count + 1 
        }
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 mt-[5px]">
        <img src={testimonial.img} style={{ height: 100, width: 100, borderRadius:'50%' }} />
        <span className="font-zcool fnt25 h-[20px]">{testimonial.author}</span>
        <span className="font-inter">{testimonial.field}</span>
        <p id='fade-in' className="font-zcool text-md h-[220px] mb:h-[200px] md:h-[160px] lg:h-[100px] ">
          {
            testimonial.review
          }
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};
const StudentReview2 = () => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative bottom-[20px]  md:absolute  md:bottom-[90px]  box-content  bg-white p-5 md:p-20  text-center rounded-lg mx-5 w-[70%] sm:w-[450px] md:w-[550px] lg:w-[650px]  bx-shw h-5
      `}
      style={{zIndex:2}}
    >
      {/* </div> */}
    </div>
  );
};
const StudentReview3 = () => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative bottom-[35px] md:absolute md:bottom-[50px] box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[60%] sm:w-[350px] md:w-[450px] lg:w-[550px]  bx-shw h-5
      `}
      style={{zIndex:1}}
    >
      {/* </div> */}
    </div>
  );
};
