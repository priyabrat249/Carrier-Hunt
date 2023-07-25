import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";
import microsoft from "../../Assets/windows.png";
const Data = [
    {
    id:1,
    img: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
    company: 'Novac Linus Co.'
    },
    {
        id:2,
        img: logo2,
        title: 'UX Researcher',
        time: 'Now',
        location: 'London',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'Google Inc.'
        
    } ,
    {
        id:3,
        img: logo3,
        title: 'Software Engg',
        time: 'Now',
        location: 'China',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'Huwei Ltd.'
    } ,
    {
        id:4,
        img: microsoft,
        title: 'Data Analyst',
        time: 'Now',
        location: 'India',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'Microsoft'
        


    },
    {
        id:5,
        img: logo5,
        title: 'Manager',
        time: 'Now',
        location: 'India',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'State Bank Of India'
        


    } ,
    {
        id:6,
        img: logo6,
        title: 'Backend Engg',
        time: 'Now',
        location: 'USA',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'Spotify'
        
    } ,
    {
        id:7,
        img: logo7,
        title: 'UI Designer',
        time: 'Now',
        location: 'Japan',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'StarBucks'
                
    } ,
    {
        id:8,
        img: logo8,
        title: 'Cloud Engineer',
        time: 'Now',
        location: 'Dubai',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,laboriosam!',
        company: 'WhatsApp'
                        
    } 
    
]
const Job = () => {
  return (
    <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center
        py-10">
              { 
                  Data.map(({id, img, title, time, location, desc, company }) => {
                      return (
                          <div key={ id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
                        [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                              <span className='flex justify-between items-center gap-4'>
                                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                                  <span className='flex items-center text-[#ccc]'>
                                      <BiTimeFive />{time}
                                  </span>
                              </span>
                              <h6 className=' text-[#ccc]'>{location}</h6>
                              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]
                                group-hover:text-white'>
                                  {desc}
                              </p>
                              <div className='company flex items-center gap-2'>
                                  <img src={img} alt="Company Logo" className='w-[10%] ' />
                                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                              </div>
                              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text[14px] font-semibold text-textColor hover: bg-white group-hover/item:text-textColorgroup-hover:text-white'>
                                Apply Now
                                </button>
                          </div>
                      )
                   })
              }
        </div>
    </div>
  )
}

export default Job