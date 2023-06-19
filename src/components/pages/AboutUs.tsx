import React, { useState } from "react";
import BoxGroup from "./AboutSVGs/BoxGroup";
import Underline from "./AboutSVGs/Underline";
import CandleGroup from "./AboutSVGs/CandleGroup";
import { Button, TextField, useMediaQuery } from "@mui/material";
import CheckMarkSVG from "./AboutSVGs/CheckMarkSVG";
import image1 from "../assets/images/about/image1s.png";
import image2 from "../assets/images/about/image2s.png";
import image3 from "../assets/images/about/image3s.png";
import image4 from "../assets/images/about/image4s.png";
import image5 from "../assets/images/about/image5s.png";
import image6 from "../assets/images/about/image6s.png";
import image7 from "../assets/images/about/image7s.png";
import image9 from "../assets/images/about/image9s.png";
import { BrandButtonStyle, navButtonStyle, theme } from "../utils/UIThemes";
import bioImg from "../assets/images/about/bio.png";

const vision = `Our vision is to foster a thriving entrepreneurial 
ecosystem by equipping and empowering aspiring entrepreneurs to transform 
their ideas into successful ventures and contribute to the growth of the economy.`;

const mission = `Our mission is to provide comprehensive support to entrepreneurs
 by offering access to training, mentorship, and funding opportunities across the 
 country and other african countries. We aim to inspire and enable individuals from 
 diverse backgrounds to pursue their entrepreneurial dreams and achieve their full potential. 
 As an organization, we are committed to promoting innovation, collaboration, sustainable growth 
 in the startup ecosystem, and our ultimate goal is to help build a more vibrant and inclusive economy, 
one entrepreneur at a time.`;

const services = [
  {
    title: "Entrepreneurial training and education",
    body: `Courses, seminars, and workshops that provide aspiring 
    entrepreneurs with the knowledge and skills needed to launch and manage successful businesses.`,
    image: image1,
  },
  {
    title: "Mentorship and coaching",
    body: `One-on-one or group sessions with experienced business owners or mentors who provide guidance, 
    advice, and support through the entrepreneurial journey.`,
    image: image2,
  },
  {
    title: "Business plan development",
    body: `assistance with developing a business plan, including market research, financial projections, 
    and strategies for success.`,
    image: image3,
  },
  {
    title: "Investment and funding",
    body: `access to funding sources, such as loans, grants, or venture capital, to help entrepreneurs finance 
    their startups and take them to the next level.`,
    image: image4,
  },
  {
    title: "Networking opportunities",
    body: `Access to industry events, conferences, and networking forums to connect with other entrepreneurs, 
    potential funders, and business partners.`,
    image: image5,
  },
  {
    title: "Incubation and acceleration",
    body: `support for early-stage startups, including workspace, technology, and infrastructure, to help 
    entrepreneurs grow their businesses more quickly`,
    image: image6,
  },
  {
    title: "Legal, financial, and accounting services",
    body: `Access to legal, accounting, and financial expertise to help entrepreneurs navigate the complex 
    world of business regulations and compliance.`,
    image: image7,
  },
  {
    title: "Marketing and branding",
    body: `Assistance with developing effective marketing and branding strategies to promote the entrepreneur's 
    products or services and help them reach their target audience.`,
    image: image7,
  },
  {
    title: " Internationalization and export support",
    body: `advice and assistance for entrepreneurs who wish to expand their businesses internationally, including 
    market research, logistics, and exporting regulations.`,
    image: image9,
  },
  {
    title: "Exit planning and strategy",
    body: `guidance on developing an exit plan or strategy for the entrepreneur, whether through sale, merger, 
    or other means, to maximize the value of their business.`,
    image: image9,
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col space-y-20 mt-10 mb-10 ">
      <div className="flex flex-col  items-center justify-center p-5 md:p-8 lgp-12">
        <div className="flex flex-col items-center justify-center space-y-7 max-w-[857px]">
          <span className=" font-quentin text-center text-[30px] md:text-[45px] text-primaryTextColor tracking-wide">
            We are ready to consult for your business growth
          </span>

          <div className="flex flex-col space-y-10">
            <p
              className="font-inter text-[16px] leading-6 text-center"
              style={{ fontWeight: 400 }}
            >
              At Pneuma Impact, we believe that entrepreneurship is a major
              driver of economic growth, and that every entrepreneur deserves
              the chance to succeed. Our team of experienced trainers and
              mentors work closely with entrepreneurs to help them develop the
              skills and knowledge including digital skills they need to create
              successful businesses, while our funding programs provide the
              resources needed to turn their ideas into reality.
            </p>
          </div>
          <div className=" flex space-x-5 p-6">
            <Button style={navButtonStyle} variant="pneumaBlue">
              Contact Us
            </Button>
            <Button style={navButtonStyle} variant="pneumaWhite">
              Our Services
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:max-w-[772px]">
          <img src={bioImg} alt="bio" className=" object-contain" />
        </div>
      </div>
      <div>
        <VisionAndMission
          body={vision}
          title="Our Vision"
          backgroundColor="#2F327D"
          color={"#FFF"}
        />
        <VisionAndMission
          body={mission}
          title="Our Mission"
          backgroundColor="#2F327D17"
          color="#2F327D"
        />
      </div>
      <div>
        <div className="flex flex-col my-16 justify-center items-center ">
          <span className="font-outfit text-center  text-[30px] md:text-[40px] leading-[52px] tracking-widest">
            Our services
          </span>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-8 ">
            {services.map((item, index) => (
              <ServiceCard title={item.title} body={item.body} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:grid-cols-2 lg:grid-cols-3 p-8 ">
          {services.map((item, index) => (
            <ServiceCardWithImage
              image={item.image}
              title={item.title}
              body={item.body}
              order={(index + 1) % 2 === 0 ? "order-last" : ""}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <ReachUsForm />
      </div>
    </div>
  );
};

export default AboutUs;

interface ServiceCard {
  title: string;
  body: string;
  image?: string;
  order?: string;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, body }) => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-5 w-full md:w-[320px]  break-normal my-5 md:m-5  shadow-xl p-5 lg:p-5">
      <CheckMarkSVG />
      <div className="flex flex-col text-center space-y-3 text-primaryTextColor">
        <span
          className=" font-outfit leading-8 text-[22px]"
          style={{ fontWeight: 600 }}
        >
          {title}
        </span>
        <span
          className=" font-inter text-[14px] leading-6 break-normal"
          style={{ fontWeight: 400 }}
        >
          {body}
        </span>
      </div>
    </div>
  );
};

interface VisionAndMission {
  body: string;
  title: string;
  color?: string;
  backgroundColor: string;
}

const VisionAndMission: React.FC<VisionAndMission> = ({
  title,
  body,
  color,
  backgroundColor,
}) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div
      className={`flex items-center justify-center  space-x-10 p-5 md:p-12`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div>{isScreenSmall && <BoxGroup color={color || "#FFF"} />}</div>
      <div className="flex flex-col space-y-5 max-w-[650px] ">
        <div className="flex flex-col items-center ">
          <span
            className="font-quentin text-[40px] leading-[52px] tracking-widest"
            style={{ color: color }}
          >
            {title}
          </span>
          <Underline color={color || "#FFF"} />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <span
            className="font-inter text-[16px] leading-6"
            style={{ color: color, fontWeight: 400 }}
          >
            {body}
          </span>
          <div>
            <Button
              style={{ outline: color }}
              variant={color === "#2F327D" ? "pneumaBlue" : "pneumaWhite"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div>{isScreenSmall && <CandleGroup color={color || "#FFF"} />}</div>
    </div>
  );
};

const ServiceCardWithImage: React.FC<ServiceCard> = ({
  image,
  title,
  body,
  order,
}) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`grid grid-cols-1  md:grid-cols-2  gap-y-10 md:space-y-0 md:gap-x-10  md:w-full lg:w-[974px] my-10 `}
    >
      <div className={`${!isScreenSmall ? order : ""}`}>
        <img src={image} className=" img-about" />
      </div>
      <div className="flex flex-col text-left items-start justify-center space-y-3 ">
        <span
          className=" font-outfit leading-8 text-[26px] mb-3"
          style={{ fontWeight: 600 }}
        >
          {title}
        </span>
        <span
          className="font-inter text-[12px] leading-6 break-normal"
          style={{ fontWeight: 400 }}
        >
          {body}
        </span>
        <Button
          style={{ height: 40, borderRadius: 50, fontSize: "12px" }}
          variant="pneumaBlue"
          href="/signup"
        >
          Take Course
        </Button>
      </div>
    </div>
  );
};

interface ContactUsFormData {
  name: string;
  email: string;
  subject: string;
  body: string;
}

const ReachUsForm = () => {
  const [formData, setFormData] = useState<ContactUsFormData>({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const onChangeFormData = (
    input: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (input) {
      case "name":
        setFormData({ ...formData, name: event.target.value });
        break;
      case "email":
        setFormData({ ...formData, email: event.target.value });
        break;
      case "subject":
        setFormData({ ...formData, subject: event.target.value });
        break;
      case "body":
        setFormData({ ...formData, body: event.target.value });
        break;

    }
  };
  return (
    <div className="px-5 flex flex-col space-y-8 lg:space-y-16 items-center justify-center  md:w-full lg:w-[974px] my-10">
      <h1 className="font-outfit text-center  text-[30px] md:text-[40px] leading-[52px] tracking-widest">
        You can reach out to Us
      </h1>
      <div className="flex  flex-col sm:space-y-5  lg:flex-row lg:space-x-5 ">
        <div className="flex space-y-5 flex-col sm:w-full lg:w-[35%] pt-10 font-inter text-[16px] leading-6">
          {/* <p>
            apidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target
          </p> */}
          <span> pneumaimpact@gmail.com </span>
          <span> +234 807 364 8625 </span>
          <span>
            {" "}
            Apartment No. 3, Banana Island, Alph beach road, Lekki Lagos
          </span>
          <div>
            <span>Follow us on:</span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 w-[90%] lg:w-[65%]">
          <div className="grid grid-cols-2 space-x-5 ">
            <TextField
              variant="outlined"
              placeholder="Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeFormData("name", event)
              }
            />
            <TextField
              variant="outlined"
              placeholder="E-mail"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeFormData("email", event)
              }
            />
          </div>
          <TextField
            variant="outlined"
            placeholder="Subject"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeFormData("subject", event)
            }
          />
          <TextField
            variant="outlined"
            multiline
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeFormData("body", event)
            }
          />
          <div className="flex justify-end">
            <Button
              variant="pneumaBlue"
              style={{ ...BrandButtonStyle,fontWeight: 200 }}
              onClick={()=> alert(JSON.stringify(formData))}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
