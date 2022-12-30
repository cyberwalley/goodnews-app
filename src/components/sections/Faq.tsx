import React from 'react';

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-full bg-white px-8 py-6 border-black border-2 shadow-3xl mb-10">
      <div className="mb-[10px] aspect-w-3 aspect-h-2 overflow-hidden">
        <img
          className="w-full max-h-[300px] object-cover object-center"
          src="https://images.unsplash.com/photo-1620904679741-4b4f7c9c4d4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="title"
          loading="lazy"
          width="320"
          height="240"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-full p-4">
        <div className="flex flex-wrap gap-2 mb-1 text-green-900 font-bold">
          <div>category</div>
        </div>
        <h2 className="text-2xl font-bold text-black mb-4 text-left">title</h2>
        <p className="text-sm text-black mb-4 text-left">description</p>
        <div className="flex flex-wrap gap-2 mb-6 text-gray-600 text-xs">
          publishedDate
        </div>
        <button
          className="md:px-4 px-6 py-2 bg-rose-300 transition shadow-5px hover:shadow-none hover:translate-x-[-5px] hover:translate-y-[5px] inline-block whitespace-nowrap border-black border-2 shadow-3xl text-black font-bold"
          onClick={() => console.log('read more')}
        >
          Read more...
        </button>
      </div>
    </div>
  );
};

Faq.displayName = 'Faq';

export default Faq;
