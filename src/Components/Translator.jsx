import React, { useState } from 'react'
import trator from '../assets/trator.gif'
import { LoaderCircle } from 'lucide-react'
import { languages } from "./Ldata.jsx";
import axios from 'axios'


const Translator = () => {

  const [textInput, setTextInput] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  //...............................*..................................*.................................
  // RapidAPI :-
  const handleTextTranslation = async () => {
    setLoading(true)
    try {
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
          'Content-Type': 'application/json'
        },
        data: {
          q: `${textInput}`,
          source: 'en',
          target: `${selectValue}`,
          format: 'text'
        }
      };
      const response = await axios.request(options)
      setLoading(false)
      setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText)
    } catch (error) {
      setLoading(false)
      console.log(error?.data)
    }
  }

  // console.log(textInput)
  // console.log(selectValue)
  //...............................*.................................*....................................
  return (
    <div className="bg-amber-50 pb-10 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl px-5 pb-5">

        <div className="text-center p-10">
          <div className="flex items-center justify-center pb-4">
            <img className="h-16 w-18" src={trator} alt="trator" />
          </div>
          <h2 className="font-bold text-3xl pb-3">Language Translator</h2>
          <h2 className="text-base md:text-lg">Translate text between multiple languages instantly</h2>
        </div>

        <div className="flex items-center flex-col gap-10 w-full">
          <textarea
            className="bg-white h-35 w-full border-3 border-solid border-black font-semibold text-xl md:text-2xl outline-none px-3 py-2"
            onChange={(e) => setTextInput(e.target.value)}
            name="input-text"
          />

          <textarea
            className="bg-white h-35 w-full border-3 border-solid border-black font-semibold text-xl md:text-2xl outline-none px-3 py-2"
            name="input-text"
            value={result}
            readOnly
          />
        </div>

        <div className="justify-center items-center flex pt-8 gap-x-2 flex-wrap text-center">
          <label htmlFor="options" className="text-sm md:text-base">Converted Into:</label>
          <select
            name="value"
            onChange={(e) => setSelectValue(e.target.value)}
            className="bg-white px-2 py-1 border-2 border-solid border-zinc-600 outline-none rounded-md cursor-pointer text-sm md:text-base"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>{lang.name}</option>
            ))}
          </select>
        </div>

        <div className="pt-5 justify-center items-center flex">
          <button
            className="bg-slate-700 text-slate-100 mx-auto w-full hover:bg-slate-800 py-2 rounded-lg text-md cursor-pointer flex items-center justify-center"
            onClick={handleTextTranslation}
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Translate"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Translator