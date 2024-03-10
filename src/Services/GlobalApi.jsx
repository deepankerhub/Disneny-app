import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='ca7b37210a0a4738294dc7b261572a82'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=ca7b37210a0a4738294dc7b261572a82';

//https://api.themoviedb.org/3/trending/all/day?api_key=ca7b37210a0a4738294dc7b261572a82

    const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

    export default{
        getTrendingVideos,
        getMovieByGenreId
    }