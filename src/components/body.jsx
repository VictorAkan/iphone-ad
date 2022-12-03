import iphoneImg from '../assets/images/iphone2.png';
import { useState,useRef } from 'react';


export const Body = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
    }
    return (
        <div className="px-20">
            <div className="hero-section block lg:flex">
                <div className="iphone__img bg-blend-darken">
                    <img src={iphoneImg} alt="image" />
                </div>
                <div className="bg-black shadow-md shadow-slate-100 mt-10 p-2 md:p-4 lg:p-7">
                    <form onSubmit={onSubmit} action="" className="">
                        <div>
                            <h2 className="text-white font-bold text-center md:text-xl">Do you want to win an Iphone?</h2>
                        </div>
                        <div className="mt-5">
                            <input type="text" 
                                placeholder='Name'
                                className="w-full p-3 rounded-md"
                            />
                        </div>
                        <div className="mt-3">
                            <input type="password" 
                                placeholder='Password'
                                ref={passwordRef}
                                className="w-full p-3 rounded-md"
                            />
                        </div>
                        <div className="mt-3">
                            <input type="tel" 
                                placeholder='Mobile Number'
                                className="w-full p-3 rounded-md"
                            />
                        </div>
                        <div className="mt-3">
                            <input type="email" 
                                placeholder='Email'
                                ref={emailRef}
                                className="w-full p-3 rounded-md"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" />
                            <p className='text-white ml-4'>Remember me</p>
                        </div>
                        <div className="btn">
                            <button className="w-full text-white bg-sky-600 hover:bg-sky-500 rounded-md p-3 uppercase mt-6" type="submit">
                                continue
                            </button>
                        </div>
                        <div>
                            <p>New here?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}