import React from "react";

const PostCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
            className="h-56 w-full object-cover"
            src="https://images.unsplash.com/photo-1517436073-7f7a9d8b3b1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="blog"
            loading="lazy"
        />
        <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quae, voluptates, quod, voluptatibus quibusdam voluptatem
                voluptate quidem quia dolorum quos natus. Quisquam, quae
                voluptates. Quisquam quae, voluptates, quod, voluptatibus
                quibusdam voluptatem voluptate quidem quia dolorum quos natus.
                Quisquam, quae voluptates.
            </p>
        </div>
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
            <h1 className="text-gray-800 font-semibold text-lg">John Doe</h1>
            <button className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md">
                Read More
            </button>
        </div>
    </div>
    )
}

export default PostCard;