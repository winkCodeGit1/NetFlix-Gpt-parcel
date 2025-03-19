import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGE_TRANSLATIONS } from '../utils/language';
import openai from '../utils/openai';

const GptSearch = () => {
    const lang = useSelector(store => store.language?.code);
    if (!lang) return;
    const searchText = useRef(null);

    const handleGPTSearch = async () => {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Give me 5 movies name comma separeted' }],
            model: 'gpt-3.5-turbo',
        });

        console.log(completion, '----completion');
    };

    return (
        <div>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg" />
            </div>
            <div className='absolute top-[20%] w-[100%] flex justify-center'>

                <div className=' bg-black w-1/2 rounded-lg'>
                    <form className=' px-5 py-5 flex gap-3' onSubmit={(e) => e.preventDefault()}>
                        <input ref={searchText} className='bg-white w-3/4 py-2 px-4' type='text' placeholder={LANGUAGE_TRANSLATIONS[lang]?.placeholder} />
                        <button className='bg-red-600 hover:bg-red-400  font-semibold text-white px-4 py-2 rounded-lg w-1/4' onClick={handleGPTSearch}>{LANGUAGE_TRANSLATIONS[lang]?.search}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GptSearch