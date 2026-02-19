import { useState } from 'react';

interface AtributCard {
  title: string;
}

export default function Interactive(props: AtributCard) {
    const [num, setNum] = useState(0);

    return (
        <div className='p-6 bg-white border border-gray-200 rounded-2xl shadow-lg text-center w-64'>
            <h2 className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-widest">{props.title}</h2>

            <h1 className="text-6xl font-black mb-6 text-slate-800">{num}</h1>

            <button onClick={() => setNum(num + 1)} className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold mr-6">
            +
            </button>

            <button onClick={() => setNum(num - 1)} className="px-6 py-2 bg-red-600 text-white rounded-full font-bold">
            -
            </button>


        </div>
    )
}