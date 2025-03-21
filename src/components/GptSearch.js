import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LANGUAGE_TRANSLATIONS } from '../utils/language';
import runGemni from '../utils/gemini';
import { addToggleSwitch } from '../utils/geminiSlice';
// import openai from '../utils/openai';

const GptSearch = () => {
    const dispatch = useDispatch();
    const lang = useSelector(store => store.language?.code);
    const isGPTEnabled = useSelector(store => store.gemini.toggleSwitch);
    const [responseText, setResponseText] = useState("");
    if (!lang) return;
    const searchText = useRef(null);


    const handleGPTSearch = async () => {
        // const completion = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: 'Give me 5 movies name comma separeted' }],
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(completion, '----completion');

        const queryText = "Act as Movie Recomendation System that suggest some movies for the query : " + searchText.current.value + ".only give me names of 5 movies no need to give any other text, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,krish";

        const result = await runGemni(!isGPTEnabled ? searchText.current.value : queryText);
        setResponseText(result);
    };


    const handleSwitch = () => {
        dispatch(addToggleSwitch())
    }

    return (
        <div>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg" />
            </div>
            <div className='absolute top-[20%] w-[100%] flex justify-center'>

                <div className=' bg-black w-1/2 rounded-lg'>

                    <div className="flex items-center justify-center mt-1">
                        <button className='bg-green-600 hover:bg-green-400  font-semibold text-white px-4 py-2 rounded-lg' onClick={handleSwitch}>{!isGPTEnabled ? 'Chat Bot' : 'Movie Search'}</button>
                    </div>

                    <form className=' px-5 py-5 flex gap-3' onSubmit={(e) => e.preventDefault()}>
                        <input ref={searchText} className='bg-white w-3/4 py-2 px-4' type='text' placeholder={LANGUAGE_TRANSLATIONS[lang]?.placeholder} />
                        <button className='bg-red-600 hover:bg-red-400  font-semibold text-white px-4 py-2 rounded-lg w-1/4' onClick={handleGPTSearch}>{LANGUAGE_TRANSLATIONS[lang]?.search}</button>
                    </form>
                </div>
            </div>



            {!isGPTEnabled &&
                <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg min-h-[150px] max-h-[300px] overflow-y-auto no-scrollbar">
                        {responseText || "Response will appear here..."}
                    </div>
                </div>}
        </div>
    )
}

export default GptSearch