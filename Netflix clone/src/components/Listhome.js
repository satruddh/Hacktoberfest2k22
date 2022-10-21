import request from '../request';

const Listhome = [
    {
        id:1,
        title:"Netflix Orignials",
        fetchURL : request.fetchNetflixOriginals
    },
    {
        id:2,
        title:"Trending",
        fetchURL :  request.fetchTrending 
    },

    {
        id:3,
        title:"Top Rated Movies",
        fetchURL :  request.fetchTopRatedMovie 
    },
    {
        id:4,
        title:"Top Rated TV Series",
        fetchURL :  request.fetchTopRatedTv 
    },
    {
        id:5,
        title:"Drama",
        fetchURL :  request.fetchDrama 
    },
    {
        id:6,
        title:"Documentaries",
        fetchURL: request.fetchDocumantaries
    }
];

export default Listhome;