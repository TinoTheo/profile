'use client'
import Image from "next/image"
import Lottie from 'lottie-react';
import animationData from '../../public/animations/hero-bg.json';

export default function Home() {
  return (
 <div className=" flex flex-col items-center justify-center h-screen  bg-white">
  <div className="grid grid-cols-2 flex-col items-center justify-center m-auto max-w-7xl">
    <div className="text-black"> 
      <h1 className="text-4xl font-bold">Hello World, My name is Theo </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente similique soluta sequi quidem voluptatum, molestias reprehenderit eaque ipsam fugiat et accusantium officia magni mollitia corrupti cupiditate vero recusandae consequatur ad!</p>
    </div>
    <div className="">
    <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: 600 }} />
    </div>
  </div>
 </div>

);
}
