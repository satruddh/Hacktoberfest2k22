import request from '../request';

const Listtv = [
    {
        id:1,
        title:"Action",
        fetchURL : request.fetchActionTv
    },
    {
        id:2,
        title:"Crime",
        fetchURL :  request.fetchCrimeTv 
    },

    {
        id:3,
        title:"Mystery",
        fetchURL :  request.fetchMysteryTv 
    },
    {
        id:4,
        title:"Sci-Fi",
        fetchURL :  request.fetchScifiTv 
    }
];

export default Listtv;