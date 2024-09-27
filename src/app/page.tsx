import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import MyCard from '../components/MyCard'
// import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaPencilRuler } from "react-icons/fa";


function HomePage() {
  return (
    <div className='bg-black min-h-screen'>
      <nav className='text-center flex justify-between px-8 py-7'> 
        <h3 className='font-medium text-[25px]'>Next Js</h3>
        <button className='bg-red-500 md:bg-blue-500 px-8 py-3 rounded-md'>CV</button>
      </nav>

      <div className=' w-[40%] justify-center text-center m-auto md:w-[60%]'>
        <h1 className='text-[#3b83f6de] text-[60px] font-bold'>JOHN WICK</h1>
        <h3 className='m-5 text-[40px]'>Elite Bounty Hunter</h3>
        <p className='m-5 text-[20px] font-medium'>John Wick is an elite bounty hunter, very sharp skilful and extremely professional in his. This phonemenal screenplay is writtten by <a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Derek_Kolstad">Derek Kolstad</a>. This film was a directorial debut for <a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Chad_Stahelski" target="_blank" rel="noopener noreferrer">Chad Stahelski</a>. The character of John Wick is played by <a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Keanu_Reeves" target="_blank" rel="noopener noreferrer">Keanu Reeves</a> .</p>
        <div className='inline-flex space-x-[250px] m-6 md:space-x-14'>
          {/* <span><FaFacebook /></span>
          <span><FaYoutube /></span>
          <span><FaLinkedin /></span> */}
          test
        </div>
        <Image 
            className='block text-center justify-center' 
            src="https://i.pinimg.com/564x/1c/9a/15/1c9a15fd79028745ea6eb4155355a912.jpg" 
            alt="" width={200} height={100}
            style={{ borderRadius: '50%', margin: 'auto' , display: 'block'}}/> 
      </div>

      <div className='m-[50px]'>
        <h2 className='text-[40px] font-semibold m-10'>Services I Offer</h2>
        <p className='text-justify font-normal text-[20px] m-10'>Legendary assassin John Wick (<a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Keanu_Reeves" target="_blank" rel="noopener noreferrer"> Keanu Reeves </a>) retired from his violent career aner marrying the love of his life. Her sudden death leaves John in deep mouning. When sadistic mobster Josef Tarasov (<a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Alfie_Allen" target="_blank" rel="noopener noreferrer">Alfie Allen</a>) and his thugs steal Johns prized car and kill the puppy that was a last gift from his wife. John unleashes die killing machine within and seeks vengeatre. Meanwhile Josephs father (<a className='hover:text-[#3b83f6de]' href="https://en.wikipedia.org/wiki/Michael_Nyqvist" target="_blank" rel="noopener noreferrer">Michael Nyqvist</a>) Johns former colleague puts a huge bounty on Johns head.</p>

        <div className='inline-flex  m-[30px] pl-[50px] md:m-1 md:pl-1'>
          <MyCard />
          <MyCard />
          <MyCard />
        </div>
        

        {/* <div className='inline-flex m-[30px] pl-[50px] md:m-1 md:pl-1'>
          <div className='relative w-[25%] m-9 md:m-3 md:w-[35%] bg-white text-black rounded-md text-center hover:bg-[#3b83f6de] hover:text-black hover:translate-y-2 transition-transform duration-300'>
            <span className='pt-[20px]'><FaPencilRuler /></span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
          <div className='relative w-[25%] md:w-[35%] m-9 md:m-3 bg-white text-black rounded-md text-center hover:bg-[#3b83f6de] hover:text-black hover:translate-y-2 transition-transform duration-300'>
            <span>2</span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
          <div className='relative w-[25%] md:w-[35%] m-9 md:m-3 bg-white text-black rounded-md text-center hover:bg-[#3b83f6de] hover:text-black hover:translate-y-2 transition-transform duration-300'>
            <span>3</span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
        </div> */}
        
        <div className='inline-flex mr-[60px] ml-[60px] md:mr-1 md:ml-1'>
          <Image className=' ml-[150px] mr-[50px] md:ml-3 md:mr-4'  src="https://i.pinimg.com/236x/5a/13/6e/5a136e37fb15c735f795a5df4a87fdcb.jpg" alt="" width={500} height={100}/>
          <Image className=' ml-[50px] mr-[150px] md:ml-3 md:mr-4' src="https://i.pinimg.com/474x/5d/ae/1b/5dae1b18f6c7ff1d4575850af16e93fe.jpg" alt="" width={500} height={100}/>
        </div>

        <div className='inline-flex mr-[60px] ml-[60px] mt-[30px]'>
          <Image className=' ml-[150px] mr-[50px] md:ml-3 md:mr-4'  src="https://i.pinimg.com/236x/eb/97/a9/eb97a97c9114ff248b731dc6b9a1389b.jpg" alt="" width={500} height={100}/>
          <Image className=' ml-[50px] mr-[150px] md:ml-3 md:mr-4' src="https://i.pinimg.com/474x/82/0d/ee/820dee6efb288c60b4e14b558e7dc92e.jpg" alt="" width={500} height={100}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage