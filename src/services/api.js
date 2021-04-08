import axios from "axios"

export const SearchMovie = async (movie_name) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=173f2479&s=${movie_name}`)
    return data.Search

}
