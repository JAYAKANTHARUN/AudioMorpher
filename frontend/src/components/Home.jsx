import React from 'react';
import { useNavigate } from 'react-router-dom'
import homeimage from '../images/homeimage1.png'
import homedivider from '../images/homedivider.png'

const Home = () => {

    const navigate = useNavigate()

    const handleaudiomorpher = () => {
        navigate('/')
    }

    return (
        <div>
            <section>
                <div className='flex justify-start items-center sm:gap-[50px] gap-[13px] sm:p-[20px] p-[20px] bg-[#B9B4C7] drop-shadow-lg '>
                    <h1 onClick={handleaudiomorpher} className='hidden sm:block text-[20px] font-poppins font-bold text-[#352F44] cursor-pointer '>AudioMorpher</h1>
                    <h1 onClick={handleaudiomorpher} className='sm:hidden sm:text-[20px] text-[18px] font-poppins font-bold text-[#352F44] cursor-pointer '>AM</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Merge</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Split</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Compress</h1>
                    <h1 className='sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Convert</h1>
                </div>
            </section>
            <section className='bg-[#FAF0E6] border-b-[10px] border-[#B9B4C7]'>
                <div className='sm:h-[90vh] h-[88vh] sm:flex justify-evenly items-center sm:p-[50px] p-[20px] sm:text-left text-center'>
                    <div className='sm:w-1/2 mx-[20px]'>
                        <h1 className='font-poppins font-bold text-[#352F44] sm:text-[35px] text-[22px] sm:my-[10px] my-[10px] '>Every tool you need to work with audio files in one place</h1>
                        <h1 className='font-poppins text-[#5C5470] sm:text-[20px] text-[15px] '>Every tool you need to use audios, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert audios with just a few clicks.</h1>
                        <button className='bg-[#5C5470] font-poppins sm:text-[20px] text-[18px] p-[10px] rounded-xl text-[#FAF0E6] sm:my-[30px] my-[30px] hover:bg-[#352F44] transition-all duration-300 ease-in-out '>Get Started ></button>
                    </div>
                    <div className='sm:w-1/2'>
                        <img src={homeimage} alt="wait" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;