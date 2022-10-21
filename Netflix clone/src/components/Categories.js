import React,{useEffect, useRef, useState} from "react";
import axios from "../axios";
import "./Categories.css";
import Player from "./Player";
import { ArrowForwardIos ,ArrowBackIos } from '@mui/icons-material';

const base = "https://image.tmdb.org/t/p/original";
function Categories(props) {

    const [items, setitems] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [player, setplayer] = useState(false);
    const [itemid, set_id] = useState("");
    const [slide_number, setSlide]= useState(0);

    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(props.fetch_link);
            setitems(request.data.results);

        }
        fetchData();
    }, [props.fetch_link]);
    
    const handleClick = (item) => {

        setplayer(true)
        set_id(item.id);
    }
    

    const slide_style = useRef();

    const slider_click = (direction) => {
        
        var dist = slide_style.current.getBoundingClientRect().x -16
        if(direction === "left" && slide_number>0)
        {
            slide_style.current.style.transform = `translate(${141 + dist}px)`;
            setSlide(slide_number - 1);
        }
        if(direction === "right" && slide_number<11)
        {
            slide_style.current.style.transform = `translate(${-141 + dist}px)`;
            setSlide(slide_number + 1);
        }
    }

    return <div >
        <h2 className ="genre">{props.title}</h2>
        <div className="slider">
            <button className="slider_btn" onClick={() => slider_click("left")}>
                <ArrowBackIos />
            </button>    
            <div className="categories" ref ={slide_style}>
                 
            {items.map(item => (
                    <img className="posters"
                        key={item.id}
                        onClick={() => handleClick(item)}
                        src={base + item.poster_path}
                        alt={item.name} />
                
            ))}
            </div>  
            <button className="slider_btn" onClick={() => slider_click("right")}>
                <ArrowForwardIos  />
            </button>
            
        </div>
        <Player 
            trigger={player}
            id={itemid}
            close={() => { setplayer(false); setTrailerUrl(""); }}
        />
    </div>
    

    
}

export default Categories;