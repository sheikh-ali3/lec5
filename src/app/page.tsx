import React from 'react'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='bg-black min-h-screen'>
      <nav className='text-center flex justify-between px-8 py-7'> 
        <h3>Node.js</h3>
        <button className='bg-blue-500 px-8 py-3 rounded-md'>CV</button>
      </nav>

      <div className='bg-red-300 w-[40%] justify-center text-center m-auto'>
        <h1 className=''>JOHN WICK</h1>
        <h3>Actor and Artist</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo quo soluta facere tenetur maiores necessitatibus perferendis voluptate dolorum asperiores. Molestiae dolores voluptate possimus mollitia ducimus natus itaque repudiandae vel!</p>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <Image src="" alt="" width={0} height={0}/>
      </div>
    </div>
  )
}

export default HomePage