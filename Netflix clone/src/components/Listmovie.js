import request from '../request';

const Listmovie = [
    {
        id:1,
        title:"Action",
        fetchURL : request.fetchActionMovies
    },
    {
        id:2,
        title:"Crime",
        fetchURL :  request.fetchCrimeMovies 
    },

    {
        id:3,
        title:"Comedy",
        fetchURL :  request.fetchComedyMovies 
    },
    {
        id:4,
        title:"Horror",
        fetchURL :  request.fetchHorrorMovies 
    },
    {
        id:5,
        title:"Romance",
        fetchURL :  request.fetchRomanceMovies 
    },
    {
        id:6,
        title:"Thriller",
        fetchURL: request.fetchThrillerMovies
    }
];

export default Listmovie;