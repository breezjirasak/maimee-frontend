import "../styles/card.css"
import { AiFillPlayCircle, AiFillStar }from 'react-icons/ai'
import {Link} from "react-router-dom"
import { update_Gamestate } from "../services/Mai"


const Card = ({beatmap_id, name, image_url, difficulty, note_count, bpm, duration, setNumber}) => {


    const board = (e) => {
        setNumber(beatmap_id)
    }
    const setzero = (e) => {
        setNumber(-1)
    }


    const routeName = `/play/${beatmap_id}`

    const setState = (event) => {
        update_Gamestate({"game_state": "PLAYING", "beatmap_id": beatmap_id})
        console.log(beatmap_id)
    }

    return (
        // <Link to={routeName} onClick={setState}>
        <Link >
        <div className="container" onMouseOver={board} onMouseLeave={setzero}>
            <img src={image_url} alt="" />
            <div class="top-left">
                <p>{name}</p>

            </div>

            <div class="bottom-left">
                <p><AiFillPlayCircle size={25}/> {duration/1000}sec</p>
            </div>

            <div class="top-right">
                <p>
                    {Array.from(Array(difficulty).keys()).map(star => <AiFillStar size={40} className='star'/>)}
                </p>
            </div>
            <div class="bottom-right">
                <p>{note_count} NOTE</p>
            </div>
        </div>
        </Link>
    )
}

export default Card