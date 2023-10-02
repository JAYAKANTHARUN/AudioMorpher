import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import homeimage from '../images/homeimage1.png'
import homedivider from '../images/homedivider.png'
import { RiArrowDropDownLine } from 'react-icons/ri'

import { animateScroll as scroll } from 'react-scroll';

const Home = () => {

    const navigate = useNavigate()

    const handleaudiomorpher = () => {
        navigate('/')
    }

    const [isOpen, setIsOpen] = useState(false);

    const handlealltools = () => {
        setIsOpen(!isOpen);
    };

    const handlegetstarted = () => {
        const duration = 500;
        const start = window.pageYOffset;
        const target = window.innerHeight;
        const distance = target - start;
        let startTime;

        function scrollAnimation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollAmount = easeInOutQuad(timeElapsed, start, distance, duration);
            window.scrollTo(0, scrollAmount);

            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
    };

    const [visible1, setvisible1] = useState(false)
    const [visible2, setvisible2] = useState(false)
    const [visible3, setvisible3] = useState(false)
    const [visible4, setvisible4] = useState(false)
    const [visible5, setvisible5] = useState(false)
    const [visible6, setvisible6] = useState(false)

    const handleplus1 = () => {
        setvisible1(!visible1)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus2 = () => {
        setvisible2(!visible2)
        setvisible1(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus3 = () => {
        setvisible3(!visible3)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible1(false)
        setvisible6(false)
    }
    const handleplus4 = () => {
        setvisible4(!visible4)
        setvisible2(false)
        setvisible1(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus5 = () => {
        setvisible5(!visible5)
        setvisible2(false)
        setvisible4(false)
        setvisible1(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus6 = () => {
        setvisible6(!visible6)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible1(false)
    }

    return (
        <div>
            <section>
                <div className='flex justify-start items-center sm:gap-[50px] gap-[13px] sm:p-[20px] p-[20px] bg-[#B9B4C7] drop-shadow-lg '>
                    <h1 onClick={handleaudiomorpher} className='hidden sm:block text-[20px] font-poppins font-bold text-[#352F44] cursor-pointer '>AudioMorpher</h1>
                    <h1 onClick={handleaudiomorpher} className='sm:hidden sm:text-[20px] text-[18px] font-poppins font-bold text-[#352F44] cursor-pointer '>AM</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Merge</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Split</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Compress</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Convert</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Trim</h1>
                    <h1 className='hidden sm:block sm:text-[18px] text-[15px] font-poppins  text-[#5C5470] cursor-pointer hover:text-[#352F44] font-medium transition-all duration-100 ease-in-out'>Loop</h1>
                    <div className="relative sm:hidden">
                        <div>
                            <button
                                type="button"
                                onClick={handlealltools}
                                className="inline-flex justify-center rounded-md border-2 border-[#5C5470] shadow-sm px-2 py-1 ml-4 bg-[#B9B4C7] font-poppins text-[#352F44] text-[15px] font-medium focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#5C5470] focus:ring-[#352F44]"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                All Tools
                                <RiArrowDropDownLine className="ml-1 text-[23px]" />
                            </button>
                        </div>

                        {isOpen && (
                            <div
                                className="absolute mt-2 w-36 rounded-md shadow-lg bg-[#B9B4C7] ring-2 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="py-1" role="none">
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Merge
                                    </h1>
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Split
                                    </h1>
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Compress
                                    </h1>
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Convert
                                    </h1>
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Trim
                                    </h1>
                                    <h1 className='block px-4 py-2 text-[17px] text-[#5C5470] cursor-pointer hover:text-[#352F44]' role="menuitem">
                                        Loop
                                    </h1>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className='bg-[#FAF0E6] border-b-[10px] border-[#B9B4C7]'>
                <div className='sm:h-[90vh] h-[87vh] sm:flex justify-evenly items-center sm:p-[50px] p-[20px] sm:text-left text-center'>
                    <div className='sm:w-1/2 mx-[20px]'>
                        <h1 className='font-poppins font-bold text-[#352F44] sm:text-[35px] text-[22px] sm:my-[10px] my-[10px] '>Every tool you need to work with audio files in one place</h1>
                        <h1 className='font-poppins text-[#5C5470] sm:text-[20px] text-[15px] '>Every tool you need to use audios, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert audios with just a few clicks.</h1>
                        <button onClick={handlegetstarted} className='bg-[#5C5470] font-poppins sm:text-[20px] text-[18px] p-[10px] rounded-xl text-[#FAF0E6] sm:my-[30px] my-[30px] hover:bg-[#352F44] transition-all duration-300 ease-in-out '>Get Started ></button>
                    </div>
                    <div className='sm:w-1/2'>
                        <img src={homeimage} alt="wait" />
                    </div>
                </div>
            </section>
            <section className='bg-[#FAF0E6] border-b-[10px] border-[#352F44]'>
                <div className='h-[100vh] text-center'>
                    <h1 className='font-poppins font-bold sm:text-[30px] text-[20px] text-[#5C5470] sm:py-[50px] py-[15px] '>Unlock the Power of Audio Tools</h1>
                    <div className='grid sm:grid-cols-3 grid-cols-2 sm:mx-[50px] mx-[5px] '>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] '>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="#352F44" fill-rule="evenodd"><path d="M5.488.363h21.75c1.78 0 2.43.184 3.082.535a3.66 3.66 0 0 1 1.512 1.512c.348.652.535 1.297.535 3.082v21.746c0 1.78-.187 2.43-.535 3.082a3.66 3.66 0 0 1-1.512 1.512c-.652.348-1.3.535-3.082.535H5.488c-1.78 0-2.43-.187-3.082-.535A3.66 3.66 0 0 1 .895 30.32c-.348-.652-.535-1.3-.535-3.082V5.488c0-1.78.188-2.43.535-3.082A3.71 3.71 0 0 1 2.406.895c.652-.348 1.3-.53 3.082-.53zm0 0"></path><path d="M44.563 49.69H22.816c-1.78 0-2.43-.184-3.082-.535-.645-.34-1.172-.867-1.512-1.512-.348-.652-.535-1.297-.535-3.082V22.816c0-1.78.184-2.43.535-3.082.34-.645.867-1.172 1.512-1.512.652-.348 1.3-.535 3.082-.535h21.746c1.785 0 2.43.188 3.082.535.645.34 1.172.867 1.512 1.512.352.652.535 1.3.535 3.082v21.746c0 1.785-.184 2.43-.535 3.082-.34.645-.867 1.172-1.512 1.512-.652.352-1.297.535-3.082.535zm0 0"></path></g><path d="M17.906 10.965c-.484 0-.875.387-.875.86v3.8L9.84 8.523c-.344-.336-.895-.336-1.238 0-.164.16-.254.38-.254.605a.86.86 0 0 0 .254.6l7.195 7.098h-3.875c-.484 0-.875.387-.875.86s.4.86.875.86h5.984a.88.88 0 0 0 .332-.066.86.86 0 0 0 .473-.465.79.79 0 0 0 .066-.328v-5.87c.004-.473-.387-.86-.87-.86zm14.418 28.008c.48 0 .87-.383.87-.86v-3.797l7.195 7.098a.88.88 0 0 0 1.234 0 .85.85 0 0 0 .258-.605c0-.23-.094-.45-.258-.605l-7.2-7.102h3.875c.484 0 .875-.383.875-.86s-.4-.855-.875-.855h-5.984a.92.92 0 0 0-.336.066c-.2.086-.383.25-.473.46a.88.88 0 0 0-.066.328v5.87c0 .477.4.86.875.86zm-10.1-10.1c-.355.352-.93.352-1.285 0s-.355-.934 0-1.3a.91.91 0 0 1 1.285 0c.355.352.355.934 0 1.3zm3.374-3.357a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285c.352-.352.93-.352 1.285 0a.91.91 0 0 1 0 1.285zm3.36-3.364a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285.91.91 0 0 1 1.285 0 .91.91 0 0 1 0 1.285zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Merge Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '> Your tool for creating captivating audio compositions by seamlessly blending multiple tracks.</h1>
                        </div>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] '>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="#352F44" fill-rule="evenodd"><path d="M5.488.363h21.75c1.78 0 2.43.184 3.082.535a3.66 3.66 0 0 1 1.512 1.512c.348.652.535 1.297.535 3.082v21.746c0 1.78-.187 2.43-.535 3.082a3.66 3.66 0 0 1-1.512 1.512c-.652.348-1.3.535-3.082.535H5.488c-1.78 0-2.43-.187-3.082-.535A3.66 3.66 0 0 1 .895 30.32c-.348-.652-.535-1.3-.535-3.082V5.488c0-1.78.188-2.43.535-3.082A3.71 3.71 0 0 1 2.406.895c.652-.348 1.3-.53 3.082-.53zm0 0"></path><path d="M44.563 49.69H22.816c-1.78 0-2.43-.184-3.082-.535-.645-.34-1.172-.867-1.512-1.512-.348-.652-.535-1.297-.535-3.082V22.816c0-1.78.184-2.43.535-3.082.34-.645.867-1.172 1.512-1.512.652-.348 1.3-.535 3.082-.535h21.746c1.785 0 2.43.188 3.082.535.645.34 1.172.867 1.512 1.512.352.652.535 1.3.535 3.082v21.746c0 1.785-.184 2.43-.535 3.082-.34.645-.867 1.172-1.512 1.512-.652.352-1.297.535-3.082.535zm0 0"></path></g><path d="M9.22 15.87c.484 0 .875-.387.875-.86v-3.8l7.195 7.102a.88.88 0 0 0 1.234 0 .85.85 0 0 0 0-1.215L11.328 10h3.875c.484 0 .875-.387.875-.86s-.4-.86-.875-.86H9.22a.88.88 0 0 0-.332.066.86.86 0 0 0-.539.793v5.875c0 .473.4.86.87.86zm31.793 18.2c-.484 0-.875.383-.875.855v3.8L32.94 31.63a.88.88 0 0 0-1.234 0c-.164.156-.258.375-.258.605a.85.85 0 0 0 .258.605l7.2 7.1H35.02c-.48 0-.87.387-.87.86a.86.86 0 0 0 .871.855H41a.88.88 0 0 0 .805-.527.86.86 0 0 0 .066-.328v-5.883a.87.87 0 0 0-.87-.855zm-18.78-5.187c-.355.352-.93.352-1.285 0s-.355-.934 0-1.3a.91.91 0 0 1 1.285 0c.355.352.355.934 0 1.3zm3.365-3.367a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285c.352-.352.93-.352 1.285 0a.91.91 0 0 1 0 1.285zm3.36-3.364a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285.91.91 0 0 1 1.285 0 .91.91 0 0 1 0 1.285zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Split Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '>Precisely segment audio files for playlists, recordings, or tracks with seamless precision.</h1>
                        </div>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] mt-[7px] '>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><path d="M31.523 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V3.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04C29.855.125 30.3 0 31.523 0zm-28 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 48.145 0 47.7 0 46.477V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 20.145 0 19.7 0 18.477V3.523C0 2.3.13 1.852.367 1.406A2.56 2.56 0 0 1 1.406.367C1.855.13 2.3 0 3.523 0zm0 0" fill-rule="evenodd" fill="#352F44"></path><path d="M35 41.8c0 .48.398.867.883.867a.88.88 0 0 0 .883-.867v-3.844l5.145 5.05a.89.89 0 0 0 1.246 0 .85.85 0 0 0 .262-.613c0-.23-.094-.45-.262-.613l-5.14-5.047h3.914a.88.88 0 0 0 .883-.867c0-.48-.395-.867-.883-.867h-6.05c-.117 0-.23.023-.34.066-.215.086-.387.258-.477.47-.047.102-.066.22-.066.328zm7.3-26.387c.48 0 .867-.398.867-.883a.88.88 0 0 0-.867-.883h-3.844l5.05-5.14a.9.9 0 0 0 0-1.25.86.86 0 0 0-1.227 0l-5.047 5.148V8.492c0-.488-.39-.883-.867-.883a.87.87 0 0 0-.867.879v6.05c0 .113.023.23.066.336.086.215.254.387.47.477.105.047.215.07.332.07H42.3zM8.46 35c-.48 0-.867.398-.867.883s.387.883.867.883h3.844L7.254 41.9c-.34.348-.34.902 0 1.25a.86.86 0 0 0 .613.258c.23 0 .45-.094.613-.258l5.047-5.145v3.914c0 .488.387.883.867.883s.867-.402.867-.883v-6.05c0-.113-.023-.23-.066-.336-.086-.215-.258-.387-.47-.477a.82.82 0 0 0-.332-.07H8.46zm6.074-27.406c-.488 0-.883.387-.883.867v3.844l-5.145-5.05a.9.9 0 0 0-1.25 0A.86.86 0 0 0 7 7.867c0 .23.094.45.258.613l5.145 5.047H8.488c-.488 0-.883.387-.883.867s.402.867.883.867h6.05a.89.89 0 0 0 .336-.066c.215-.1.39-.258.477-.47.05-.102.07-.22.07-.332V8.46c0-.48-.395-.867-.883-.867zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Compress Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '>Improve storage, maintain quality, and enjoy smoother playback and management.</h1>
                        </div>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] mt-[7px] sm:my-[50px]'>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 100 100"><g fill="none"><path d="M16 0L84 0C89.5 0 91.6 0.6 93.6 1.7 95.6 2.8 97.2 4.4 98.3 6.4 99.4 8.4 100 10.5 100 16L100 84C100 89.5 99.4 91.6 98.3 93.6 97.2 95.6 95.6 97.2 93.6 98.3 91.6 99.4 89.5 100 84 100L16 100C10.5 100 8.4 99.4 6.4 98.3 4.4 97.2 2.8 95.6 1.7 93.6 0.6 91.6 0 89.5 0 84L0 16C0 10.5 0.6 8.4 1.7 6.4 2.8 4.4 4.4 2.8 6.4 1.7 8.4 0.6 10.5 0 16 0Z" fill="#AB6993"></path><path d="M16 0L84 0C89.5 0 91.6 0.6 93.6 1.7 95.6 2.8 97.2 4.4 98.3 6.4 99.4 8.4 100 10.5 100 16L100 84C100 89.5 99.4 91.6 98.3 93.6 97.2 95.6 95.6 97.2 93.6 98.3 91.6 99.4 89.5 100 84 100L16 100C10.5 100 8.4 99.4 6.4 98.3 4.4 97.2 2.8 95.6 1.7 93.6 0.6 91.6 0 89.5 0 84L0 16C0 10.5 0.6 8.4 1.7 6.4 2.8 4.4 4.4 2.8 6.4 1.7 8.4 0.6 10.5 0 16 0Z" fill="#352F44"></path><g transform="translate(-371 -2828)translate(371 2828)translate(50.5 50.5)rotate(30)" fill="#FFF"><path d="M-16.2 3.8L-2.3 29.5C-2.1 29.7-1.9 29.8-1.7 29.7 -1.5 29.6-1.4 29.5-1.4 29.3L-1.4 10.6C-3.8 10-5.5 7.9-5.5 5.4 -5.5 2.5-3.1 0.1-0.2 0.1 2.8 0.1 5.2 2.5 5.2 5.4 5.2 7.9 3.4 10 1 10.6L1 29.3C1 29.5 1.2 29.7 1.5 29.7 1.6 29.7 1.8 29.6 1.9 29.5L15.8 3.8C16.2 3 16.2 2.2 15.9 1.4L8.4-15.1C8-16.1 7.1-16.7 6-16.7L-6.4-16.7C-7.5-16.7-8.4-16.1-8.9-15.1L-16.3 1.4C-16.6 2.2-16.6 3-16.2 3.8Z"></path><path d="M9-18.7L-9.4-18.7C-10.3-18.7-11.1-19.7-11.1-20.9L-11.1-28.3C-11.1-29.5-10.3-30.5-9.4-30.5L9-30.5C10-30.5 10.8-29.5 10.8-28.3L10.8-20.9C10.8-19.7 10-18.7 9-18.7Z"></path></g></g></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Convert Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '>Effortlessly switch formats, codecs, and bitrates. Adapt your sound for any device or creative experiment.</h1>
                        </div>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] mt-[7px] sm:my-[50px]'>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M8.012 0h33.977c2.785 0 3.797.29 4.816.836 1.004.53 1.828 1.355 2.36 2.363.547 1.016.836 2.027.836 4.813v33.977c0 2.785-.29 3.797-.836 4.816-.53 1.004-1.355 1.828-2.36 2.36-1.02.547-2.03.836-4.816.836H8.012c-2.785 0-3.797-.29-4.816-.836-1.004-.53-1.828-1.355-2.36-2.36C.29 45.785 0 44.773 0 41.988V8.012c0-2.785.29-3.797.836-4.816C1.367 2.19 2.19 1.367 3.2.836 4.215.29 5.227 0 8.012 0zm0 0" fill="#352F44"></path><path d="M20.816 27.363c.117.098.184.242.18.39 0 .12-.04.234-.113.324l-6.563 7.906a.51.51 0 0 1-.715.063.52.52 0 0 1-.18-.391c0-.12.043-.234.117-.328l6.56-7.902c.086-.102.207-.168.34-.18s.27.03.37.117zm2.13 1.793a.51.51 0 0 1 .066.715l-6.562 7.906c-.086.102-.207.168-.344.18a.5.5 0 0 1-.367-.117.52.52 0 0 1-.18-.391c0-.12.04-.234.117-.328l6.56-7.902c.086-.102.21-.168.344-.18s.266.03.37.117zm-10.816 5.31c-.957 1.156-.805 2.89.344 3.86l1.238 1.043a2.72 2.72 0 0 0 3.836-.352l6.953-8.367L19.988 25zm21.13-18.527a4.4 4.4 0 0 1 1.32-1.062l.313-.16c.387-.203.723-.473.996-.8l1.04-1.25c.137-.164.078-.44-.13-.613l-1.69-1.418c-.21-.176-.488-.184-.625-.02l-1.04 1.25a3.31 3.31 0 0 0-.609 1.125l-.102.336a4.32 4.32 0 0 1-.805 1.492L26.5 21.32l1.29 1.18zm3.082 21.637c-.355.328-.824.504-1.305.484a1.81 1.81 0 0 1-1.262-.578c-.684-.738-.64-1.89.094-2.574a1.8 1.8 0 0 1 1.301-.484 1.81 1.81 0 0 1 1.266.578c.68.738.637 1.89-.094 2.574M24.1 20.996c-.906-.848-1.36-2.1-1.156-3.316.29-1.777-.21-3.668-1.527-5.094-1.293-1.398-3.1-2.035-4.852-1.906-.312.023-.46.398-.246.63l2.742 2.965a1.46 1.46 0 0 1-.074 2.051l-2.492 2.324c-.28.262-.656.402-1.04.387a1.44 1.44 0 0 1-1.008-.461l-2.734-2.953c-.098-.105-.25-.148-.387-.102a.37.37 0 0 0-.262.305c-.25 1.773.273 3.648 1.6 5.035a6.01 6.01 0 0 0 4.836 1.852c1.234-.102 2.438.434 3.215 1.398L32.5 38.828c1.38 1.484 3.7 1.566 5.18.19s1.563-3.72.19-5.2zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Trim Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '> Easily remove unwanted segments and create seamless, polished soundtracks.</h1>
                        </div>
                        <div className='sm:h-[30vh] sm:w-[50vh] h-[29vh] w-[24vh] border-[1px] mx-auto bg-[#B9B4C7] drop-shadow-2xl rounded-3xl transition-all duration-200 ease-in-out  transform hover:scale-105 cursor-pointer hover:bg-[#cfccd8] mt-[7px] sm:my-[50px]'>
                            <svg className='mx-auto sm:mt-[20px] mt-[5px] sm:w-[60px] w-[40px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50" fill-rule="evenodd"><path d="M8.012 0h33.976c2.786 0 3.796.3 4.815.835a5.68 5.68 0 0 1 2.363 2.363c.545 1.02.835 2.03.835 4.815v33.976c0 2.786-.3 3.796-.835 4.815a5.68 5.68 0 0 1-2.363 2.363c-1.02.545-2.03.835-4.815.835H8.012c-2.786 0-3.796-.3-4.815-.835a5.68 5.68 0 0 1-2.363-2.363C.3 45.784 0 44.774 0 41.988V8.012c0-2.786.3-3.796.835-4.815A5.68 5.68 0 0 1 3.197.835C4.216.3 5.226 0 8.012 0z" fill="#352F44"></path><g fill="#FFF"><path d="M23.366 13.26a1.25 1.25 0 1 1 .318 2.48c-5.352.686-9.434 5.212-9.434 10.638 0 4.407 2.692 8.285 6.726 9.926a1.25 1.25 0 0 1-.942 2.316c-4.963-2.02-8.284-6.804-8.284-12.242 0-6.697 5.03-12.273 11.616-13.118zm14.778 11.437a1.25 1.25 0 1 1-2.475.354 11.6 11.6 0 0 0-.905-3.163 1.25 1.25 0 1 1 2.278-1.03c.545 1.205.908 2.482 1.102 3.84zM26.71 39.493a1.25 1.25 0 0 1-.354-2.475c1.1-.157 2.125-.445 3.09-.872a1.25 1.25 0 0 1 1.013 2.286c-1.178.522-2.425.872-3.748 1.06zm8.792-4.998a1.25 1.25 0 1 1-2-1.5c.718-.957 1.262-1.91 1.627-2.866a1.25 1.25 0 1 1 2.335.893C37 32.206 36.35 33.36 35.5 34.495z" fill-rule="nonzero"></path><path d="M24.282 21c-.427 0-.78-.354-.78-.78V9.28c0-.427.354-.78.78-.78.208 0 .403.085.55.232l5.47 5.47c.146.146.232.342.232.55s-.085.403-.232.55l-5.47 5.47c-.146.146-.342.232-.55.232z"></path></g></svg>
                            <h1 className='font-poppins font-bold sm:text-[20px] text-[14px] text-[#352F44] sm:my-[15px] mb-[5px] '>Loop Audio</h1>
                            <h1 className='font-poppins sm:text-[15px] text-[11px] text-[#352F44] mx-[5px] '>Effortlessly loop and repeat audio sections for a seamless listening experience.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#352F44] h-[60vh] '>
                <div className='sm:mx-[200px] mx-[20px] sm:pt-[80px] pt-[30px] text-center '>
                    <h1 className='font-poppins font-bold text-[#B9B4C7] sm:text-[37px] text-[25px] sm:pb-[50px] pb-[30px] '>Trusted by Millions for Audio Solutions</h1>
                    <h1 className='font-poppins text-[#FAF0E6] sm:text-[22px] text-[16px] '>AudioMorpher is your number one web app for editing audios with ease. Enjoy all the tools you need to work efficiently with your digital files while keeping your data safe and secure.</h1>
                    <div className='flex justify-center items-center sm:gap-[100px] gap-[50px] sm:py-[60px] py-[40px] '>
                        <img className='sm:w-[125px] w-[100px] ' src="https://www.ilovepdf.com/img/logos/iso-logo.svg" alt="wait" />
                        <img className='sm:w-[125px] w-[100px] ' src="https://www.ilovepdf.com/img/logos/ssl-encrypted-logo.svg" alt="wait" />
                    </div>
                </div>
            </section>
            <section className="bg-[#FAF0E6]  sm:py-[70px] py-[50px]">
                <div className="max-w-[800px] mx-auto px-[15px] ">
                    <h2 className="sm:text-[40px] text-[25px] font-poppins font-bold text-[#352F44] text-center">FAQ ?</h2>
                    <div className="py-[30px]  ">
                        <div className="bg-[#5C5470] mb-[2px]">
                            <div className="p-[20px] text-[#FAF0E6] sm:text-[20px] text-[16px] font-poppins relative border-b-2 border-b-[#B9B4C7] hover:bg-[#352F44]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus1}>
                                <h3 className='mr-[50px] '>How to edit audio files ?</h3><span className="absolute right-[30px] top-[20px]">{visible1 ? '-' : '+'}</span>
                            </div>

                            <div className={`text-[#FAF0E6] sm:text-[16px] text-[13px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible1 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Upload your audio file more than once. You can upload it as many times as you want to create longer loops. Save the file as one audio track.</p>
                            </div>
                        </div>
                        <div className="bg-[#5C5470] mb-[2px]">
                            <div className="p-[20px] text-[#FAF0E6] sm:text-[20px] text-[16px] font-poppins relative border-b-2 border-b-[#B9B4C7] hover:bg-[#352F44]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus2}>
                                <h3 className='mr-[50px] '>What audio file formats is AudioMorpher compatible with ?</h3><span className="absolute right-[30px] top-[20px]">{visible2 ? '-' : '+'}</span>
                            </div>

                            <div className={`text-[#FAF0E6] sm:text-[16px] text-[13px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible2 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Plenty! AudioMorpher works with the following audio file formats: AAC, FLAC, M4A, MP3, OGA, OGG, OPUS, WAV and WAVE. You can also upload a video file and seperate your audio from the video.</p>
                            </div>
                        </div>
                        <div className="bg-[#5C5470] mb-[2px]">
                            <div className="p-[20px] text-[#FAF0E6] sm:text-[20px] text-[16px] font-poppins relative border-b-2 border-b-[#B9B4C7] hover:bg-[#352F44]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus3}>
                                <h3 className='mr-[50px] '>What is the best song editing software?</h3><span className="absolute right-[30px] top-[20px]">{visible3 ? '-' : '+'}</span>
                            </div>

                            <div className={`text-[#FAF0E6] sm:text-[16px] text-[13px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible3 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>While there are many free and paid audio editing software out there, AudioMorpher stands out because of its ease of use, and practicality. With AudioMorpher, you don’t need to install clunky apps on your device. You can edit your audio and video files online.</p>
                            </div>
                        </div>
                        <div className="bg-[#5C5470] mb-[2px]">
                            <div className="p-[20px] text-[#FAF0E6] sm:text-[20px] text-[16px] font-poppins relative border-b-2 border-b-[#B9B4C7] hover:bg-[#352F44]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus4}>
                                <h3 className='mr-[50px] '>Which software do musicians use?</h3><span className="absolute right-[30px] top-[20px]">{visible4 ? '-' : '+'}</span>
                            </div>

                            <div className={`text-[#FAF0E6] sm:text-[16px] text-[13px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible4 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>AudioMorpher is an increasingly popular software for musicians and singers. This is because it is easy to use, free, and requires no download. Our modern and intuitive interface is proving popular with content creators of all types. Try AudioMorpher now to see why! No credit card, sign-up or download needed.</p>
                            </div>
                        </div>
                        <div className="bg-[#5C5470] mb-[2px]">
                            <div className="p-[20px] text-[#FAF0E6] sm:text-[20px] text-[16px] font-poppins relative border-b-2 border-b-[#B9B4C7] hover:bg-[#352F44]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus5}>
                                <h3 className='mr-[50px] '>Is AudioMorpher's audio editing software free to use?</h3><span className="absolute right-[30px] top-[20px]">{visible5 ? '-' : '+'}</span>
                            </div>

                            <div className={`text-[#FAF0E6] sm:text-[16px] text-[13px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible5 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Always. No need to pay a dime. All upgrades are optional, and most essential audio editing tools can be used without a premium subscription.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;