import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineHome,  } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
const Search = () => {
      return (
      <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
          <form action="">
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap
                [10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className="flex gap-2 items-center">
                      <AiOutlineSearch className='text-[25px] icon' />
                      <input type="text" className='bg-transparent text-blue-500
                        focus:outline-none w-[100%]' placeholder='Search Job Here...' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                  </div>
                  <div className="flex gap-2 items-center">
                      <AiOutlineHome className='text-[25px] icon' />
                      <input type="text" className='bg-transparent text-blue-500
                        focus:outline-none w-[100%]' placeholder='Search by Company...' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                  </div>
                  <div className="flex gap-2 items-center">
                      <CiLocationOn className='text-[25px] icon' />
                      <input type="text" className='bg-transparent text-blue-500
                        focus:outline-none w-[100%]' placeholder='Search by Location...' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                  </div>
                  <button className='bg-blueColor h-full p-5 px-10 rounded-[10px]'>
                      Search
                  </button>
                </div>
                
          </form>
            <div className='secDiv flex items-center gap-10 justify-center'>
                <div className= 'single Search flex items-center gap-2'>
                <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort
                by: </label>
                <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                      <option value="">Relevance</option>
                      <option value="">Starts With</option>
                      <option value="">Inclusive</option>
                      <option value="">Contains</option>
                </select>
              </div>
              <div className= 'single Search flex items-center gap-2'>
                <label htmlFor="Full Time" className='text-[#808080] font-semibold'>Type:
                 </label>
                <select name="" id="Full Time" className='bg-white rounded-[3px] px-4 py-1'>
                      <option value="">Full Time</option>
                      <option value="">Remote</option>
                      <option value="">Contract</option>
                      <option value="">Part-time</option>
                </select>
              </div>
              <div className= 'single Search flex items-center gap-2'>
                <label htmlFor="Senior" className='text-[#808080] font-semibold'>Level
                </label>
                <select name="" id="Senior" className='bg-white rounded-[3px] px-4 py-1'>
                      <option value="">Senior</option>
                      <option value="">Beginner</option>
                      <option value="">Intermediate</option>
                      <option value="">Advocate</option>
                  </select>
                  <span className='text-[#a1a1a1] px-6 cursor-pointer'> Clear All</span>
                </div>
            </div>

      </div>
  )
}
{/* <div className='flex gap-2 items-center'>
    <AiOutlineSearch className='text-[25px] icon' />
     <input type="text" className='bg-transparent text-blue-500
    focus:outline-none w-[100 %]' placeholder=' Search Job Here....' />
     <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
 </div>  */}
export default Search