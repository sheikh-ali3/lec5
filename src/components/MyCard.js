import React from 'react'

function MyCard()  {
  return (
    <div className='relative w-[25%] md:w-[35%] m-9 md:m-3 bg-white text-black rounded-md text-center hover:bg-[#3b83f6de] hover:text-black hover:translate-y-2 transition-transform duration-300'>
      <span>2</span>
      <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi obcaecati consequuntur optio, accusantium rerum, maiores nesciunt non debitis consectetur tenetur repellat iure, pariatur quia officiis aperiam recusandae ipsum praesentium!</p>
      <p className='m-6 font-semibold'>Dumy text</p>
    </div>

  )
}

export default MyCard