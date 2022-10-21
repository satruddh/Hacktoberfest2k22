import React, { useEffect, useState } from 'react'
import axios from '../axios';
import { PlayArrow, InfoOutlined} from '@mui/icons-material';
import "./Featured.css";
import Player from './Player';


function Featured(props) {
    const base = "https://image.tmdb.org/t/p/original";
    const [trailerUrl, setTrailerUrl] = useState("");
    const [player, setplayer] = useState(false);
    const [itemid, set_id] = useState("");
    
    const [item, setitem] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(props.api_link);

            const random_num = Math.floor(Math.random() * req.data.results.length - 1);
            setitem(
                req.data.results[random_num]
            );
            return req;
        }
        
        fetchData();
    }, []);

    const play_trailer = (item) => {
        setplayer(true)
        set_id(item.id);
    }
    return (
        <div 
            className='featured'
            style={{
                backgroundImage: `url(${base + item.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition : "center center"
            }}
        >
                
                <div className='contents'>
                <h1 className='title'>
                    {item?.title || item?.name || item?.original_name}    
                </h1>
                <div className='buttons'>
                    <button onClick={() => play_trailer(item)}><PlayArrow/>Play</button>
                    <button ><InfoOutlined/>info</button>
                </div>
                <p className='desc'>
                {item?.overview}
                </p>

                </div>
            <div className='faded'></div>
            <Player 
            trigger={player}
            id={itemid}
            close={() => { setplayer(false); setTrailerUrl(""); }}
            />
            
        </div>
          
  )
}

export default Featured;