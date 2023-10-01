import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleaudiomorpher = () => {
        navigate('/')
    }

    return (
        <div>
            <section>
                <div className='flex justify-start items-center sm:gap-[50px] gap-[15px] sm:p-[20px] p-[20px] bg-[#B9B4C7] drop-shadow-lg '>
                    <h1 onClick={handleaudiomorpher} className='hidden sm:block text-[20px] font-poppins font-bold text-[#352F44] cursor-pointer '>AudioMorpher</h1>
                    <h1 onClick={handleaudiomorpher} className='sm:hidden sm:text-[20px] text-[18px] font-poppins font-bold text-[#352F44] cursor-pointer '>AM</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Merge</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Split</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Compress</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Convert</h1>
                </div>
            </section>
        </div>
    )
}
export default Home;