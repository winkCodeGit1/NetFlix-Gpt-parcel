import React from 'react'

const VideoTitle = ({ original_title, overview }) => {
    return (
        <div className=' aspect-video pt-[20%]  px-12 absolute bg-gradient-to-r from-black'>
            <h1 className='text-3xl text-white font-bold '>{original_title}</h1>
            <p className='py-6 text-lg w-1/2 text-white'>{overview}</p>
            <div className='flex gap-2'>
                <button className="bg-white text-black font-bold py-3 px-10 text-lg rounded-md flex items-center gap-2 hover:bg-white-80 transition">
                    Play
                </button>
                <button className="bg-gray-700 text-white font-bold py-3 px-10 text-lg rounded-md flex items-center gap-2 hover:bg-gray-600 transition">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;