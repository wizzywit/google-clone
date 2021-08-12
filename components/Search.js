import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";

const mic = () => (
    <svg className="h-6 w-6" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
        <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
        <path fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
        <path fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
    </svg>
)
const Search = () => {
    const [showShadow, setShowShadow] = useState(false)
    const [search, setSearch] = useState('')
    const onFocus = () => setShowShadow(true)
    const onBlur = () => setShowShadow(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(search === '') return
        window.location = `https://google.com/search?q=${search}`
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center flex-1">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" className="h-14 md:h-auto"/>
                <div className={`flex items-center mx-auto rounded-full w-11/12 max-w-input border border-gray-200 mt-10 px-5 h-12 hover:shadow-inputShadow active:shadow-inputShadow ${showShadow ? 'shadow-inputShadow': ''}`}>
                    <SearchIcon className="text-gray-400" />
                    <input onFocus={onFocus} onBlur={onBlur} className="focus:outline-none flex-1 py-2.5 px-5 "  onChange={(e) => setSearch(e.target.value)} />
                    {mic()}
                </div>
                <div className="flex justify-center mt-7">
                    <button type="submit" onClick={() => {}} className="text-md bg-cus border border-white m-1.5 py-2 px-4 rounded hover:border hover:border-gray-300" >
                        Google Search
                    </button>
                    <a className="text-md bg-cus border border-white m-1.5 py-2 px-4 rounded hover:border hover:border-gray-300" href="https://perfects.engineering" >I'm Feeling Lucky</a>
                </div>
                <div className="flex items-center flex-col md:justify-center gap-2 md:gap-1 text-sm mt-6 md:flex-row">
                    <p>Google offered in: </p>
                    <div className="flex gap-2 items-center justify-center">
                        <a href="#" className="text-blue-800 hover:underline">Hausa</a> <a href="#" className="text-blue-800 hover:underline">Igbo</a> <a href="#" className="text-blue-800 hover:underline">Èdè Yorùbá</a> <a href="#" className="text-blue-800 hover:underline">Nigerian Pidgin</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Search