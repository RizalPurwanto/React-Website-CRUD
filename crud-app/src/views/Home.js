import {useState, useEffect} from "react"
import axios from "axios"

export default function Home () {
    const access_token = process.env.REACT_APP_TOKEN
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        console.log(access_token, "INI ACCESS TOKEN")
        axios.get('https://popper-corn-server.herokuapp.com/movies', {
            headers: {
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmVtb25lQG1haWwuY29tIiwiaWF0IjoxNjQ4NzMzNDc3fQ.TU9yOeQ5sV__5KnyMY_8p0_CtNcbZlHX1wARGhUX5wI'
            }
        })
        .then(res => {
            console.log(res.data, "INI DATA")
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
    
    return (
        <div className="bg-red-500 h-full grow">
           <h2 className="text-3xl font-bold underline">Movies </h2>
           <div className="flex ">
               {movies.map( (movie) => {
                   return (
                       <div key={movie.id} className="px-2 bg-gray-100 w-1/2">
                           <img src={movie.imgUrl} className="w-full"></img>
                       </div>
                   )
               }) }
           </div>
        </div>
    )
}