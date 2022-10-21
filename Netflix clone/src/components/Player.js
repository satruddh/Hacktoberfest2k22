import React,{useEffect, useState} from 'react'
import YouTube from "react-youtube";
import "./Player.css";
import { Close } from '@mui/icons-material';
import axios from 'axios';  

const link_play = "https://api.themoviedb.org/3/";
const end_link = "?api_key=7ddf7b51b294d0bb3bd8bd93c898cbe8&append_to_response=videos";

function Player(props) {
    const [video_link, setLink] = useState([]);
    const [api_link, setapi] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function trailer() {
            await axios.get(link_play + "tv/" + props.id + end_link)
                .then(request => {
                    setapi(request.data);
                })
                .catch(error => {
                    axios.get(link_play + "movie/" + props.id + end_link)
                        .then(respon => {
                            setapi(respon.data);
                        })
                })
                setLink(api_link.videos.results)
                    const trailer_url = video_link.find(x => {
                        return x.type === "Trailer"
                    })
                    setTrailerUrl(trailer_url.key)
                }
        
        trailer();
    });
    let wide = window.innerWidth;
    const options = {
        height: wide>500?"400":"200",
        width:"88%",
        playerVars: {
        autoplay: 1,
      }
    }
    return props.trigger ? (

        <div className='Player'>
            <div className='Player-inner'>
            
            <div className='close-btn'>
                <button className='close'
                        onClick={props.close}
                >
                        <Close />
                </button>
            </div>    
            <div className='video_player'>    
                    <YouTube 
                        videoId={trailerUrl} opts={options} />
            </div>
            </div>
        </div>
    ) : "";
}

export default Player