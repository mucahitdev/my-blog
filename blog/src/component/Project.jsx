import React from 'react';
const Project = ({name, description, demo, code, image, tags}) => {
    return (
        <div className="sm:w-3/6 rounded lg:w-96 p-4 max-w-sm">
            <div className="h-full overflow-hidden shadow-lg ">
                <img className="w-full h-2/6 hover:scale-125 hover:translate-x-4 hover:skew-y-3 transition-all" src={image} alt={name} />
                <div className="px-6  h-2/6">
                    <div className="font-bold text-xl mb-1"> {name} </div>
                    <p className="text-gray-700 text-base">
                       {description}
                    </p>
                </div>
                <div className="px-1 mt-2 h-1/6">
                    {
                        tags.map((tag, id)=> (<span key={id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1"> {tag.tagName} </span>))
                    }
                </div>
                <div className='pt-auto  px-3 h-1/6'>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        <button className='bg-blue-100 hover: w-1/2 py-1 mb-2 rounded-l-lg hover:scale-110 hover:bg-blue-200 text-black transition-all'>
                            Demo
                        </button>
                    </a>
                    <a href={code}>
                        <button className='bg-orange-100 w-1/2 py-1 mb-2 rounded-r-lg hover:scale-110 hover:bg-orange-200 text-black transition-all'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project