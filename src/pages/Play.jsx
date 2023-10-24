import "../styles/play.css";
import { useEffect, useState } from "react";
import { update_Gamestate } from "../services/Mai.js";
import Button from "@mui/material/Button";
import ProgressBar from "../components/Progress";
import { useParams } from "react-router-dom";
import { getBeat } from "../services/Maimee";
import sweetalert from "../services/fisnish";
import sweethem from "../services/sweetal";
import { getgame_state } from "../services/Mai.js";
import { getRecent } from "../services/Maimee";

const SampleBeats = [
  [
    {
      "beatmap_id": 1001,
      "name": "Beatmap 1",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 2,
      "note_count": 20,
      "bpm": 165,
      "duration": 200
    },
    {
      "beatmap_id": 1002,
      "name": "Beatmap 2",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 4,
      "note_count": 25,
      "bpm": 175,
      "duration": 220
    },
    {
      "beatmap_id": 1003,
      "name": "Beatmap 3",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 1,
      "note_count": 12,
      "bpm": 150,
      "duration": 190
    },
    {
      "beatmap_id": 1004,
      "name": "Beatmap 4",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 5,
      "note_count": 30,
      "bpm": 180,
      "duration": 240
    },
    {
      "beatmap_id": 1005,
      "name": "Beatmap 5",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 3,
      "note_count": 18,
      "bpm": 170,
      "duration": 210
    },
    {
      "beatmap_id": 1006,
      "name": "Beatmap 6",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 2,
      "note_count": 22,
      "bpm": 160,
      "duration": 230
    },
    {
      "beatmap_id": 1007,
      "name": "Beatmap 7",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 4,
      "note_count": 16,
      "bpm": 175,
      "duration": 220
    },
    {
      "beatmap_id": 1008,
      "name": "Beatmap 8",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 1,
      "note_count": 28,
      "bpm": 155,
      "duration": 210
    },
    {
      "beatmap_id": 1009,
      "name": "Beatmap 9",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 3,
      "note_count": 14,
      "bpm": 180,
      "duration": 240
    },
    {
      "beatmap_id": 1010,
      "name": "Beatmap 10",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 5,
      "note_count": 24,
      "bpm": 165,
      "duration": 200
    }
  ]

]

const Play = () => {
  const { id } = useParams()
  const [beat, setBeat] = useState(SampleBeats)
  const [state, setState] = useState([])
  const [recent, setRecent] = useState([])
  let check = true

  //  useEffect(() => {
  //   if (!check) {
  //     getRecent().then(data => setRecent(data))
  //     return;
  //   }
  //     getBeat(id).then(data => setBeat(data))
  //     getgame_state().then(data => setState(data))

  //  },[check, id, state])

   let time = beat.duration

   
   if (state.game_state === "FINISHED" || state.game_state === "GIVEUP") {
        check = false
  
   }

   if (state.game_state === "FINISHED") {
    sweetalert(id, recent.score, recent.hit, recent.miss, beat.name)
  }

  const handleonclick = () => {
    sweethem(id)
    update_Gamestate({ "game_state": "GIVEUP", "beatmap_id": id });
  };
  
  return (
    <div className="main">
      <style jsx="true">{`
        html {
          background: url(${beat.image_url}) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
      `}</style>
      <div className="container-play">
        <img src={beat.image_url} alt="" />
        <h1 className="song">{beat.name}</h1>
        <ProgressBar duration={time} checkstate={check}/>
        <div className="btt">
          <Button onClick={handleonclick} >Give up</Button>
        </div>
      </div>
    </div>
  );
};
export default Play;
