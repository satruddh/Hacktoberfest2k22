import request from '../request';

const Listpop = [
    {
        id:1,
        title:"Popular Movies",
        fetchURL : request.fetchPopularMovie
    },
    {
        id:2,
        title:"Popular Series",
        fetchURL :  request.fetchPopularTv
    },

    {
        id:3,
        title:"New Movies",
        fetchURL :  request.fetchLatestMovie 
    },
    {
        id:4,
        title:"New Series",
        fetchURL :  request.fetchLatestTv 
    }
];

export default Listpop;