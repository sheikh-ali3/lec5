import React from 'react'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='bg-black min-h-screen'>
      <nav className='text-center flex justify-between px-8 py-7'> 
        <h3 className='font-medium text-[25px]'>Next Js</h3>
        <button className='bg-blue-500 px-8 py-3 rounded-md'>CV</button>
      </nav>

      <div className=' w-[40%] justify-center text-center m-auto'>
        <h1 className='text-[#3b83f6de] text-[60px] font-bold'>JOHN WICK</h1>
        <h3 className='m-5 text-[40px]'>Actor and Artist</h3>
        <p className='m-5 text-[20px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo quo soluta facere tenetur maiores necessitatibus perferendis voluptate dolorum asperiores. Molestiae dolores voluptate possimus mollitia ducimus natus itaque repudiandae vel!</p>
        <div className='inline-block space-x-[300px]'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <Image className='block text-center justify-center' src="/public/john.jfif" alt="" width={100} height={100}/>
      </div>
      <div>
        <h2 className='text-[40px] font-semibold m-10'>Services I Offer</h2>
        <p className='text-justify font-normal text-[20px] m-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magnam ab facere, laudantium tempore, architecto velit sint cum ut nulla fugit eos laborum asperiores voluptatem quia illo dignissimos accusantium itaque!</p>
        <div className='inline-flex m-5 mr-4'>
          <div className='relative w-[25%] m-9 bg-white text-black rounded-md text-center'>
            <span className='pt-[20px]'>1</span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
          <div className='relative w-[25%] m-9 bg-white text-black rounded-md text-center'>
            <span>2</span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
          <div className='relative w-[25%] m-9 bg-white text-black rounded-md text-center'>
            <span>3</span>
            <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
            <p className='m-6 font-semibold'>Dumy text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage