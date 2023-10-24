import "../styles/home.css";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Board from "../components/Board";
import { getBeats } from "../services/Maimee";
import { getLeaderBoard } from "../services/Maimee";
import { update_Gamestate } from "../services/Mai";
import logo from "../assets/Maimee1.png"


const SampleBeats = [
    {
      "beatmap_id": 1001,
      "name": "Beatmap 1",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 2,
      "note_count": 20,
      "bpm": 165,
      "duration": 5000
    },
    {
      "beatmap_id": 1002,
      "name": "Beatmap 2",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 4,
      "note_count": 25,
      "bpm": 175,
      "duration": 6000
    },
    {
      "beatmap_id": 1003,
      "name": "Beatmap 3",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 1,
      "note_count": 12,
      "bpm": 150,
      "duration": 4000
    },
    {
      "beatmap_id": 1004,
      "name": "Beatmap 4",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 5,
      "note_count": 30,
      "bpm": 180,
      "duration": 3500
    },
    {
      "beatmap_id": 1005,
      "name": "Beatmap 5",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 3,
      "note_count": 18,
      "bpm": 170,
      "duration": 7000
    },
    {
      "beatmap_id": 1006,
      "name": "Beatmap 6",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 2,
      "note_count": 22,
      "bpm": 160,
      "duration": 10000
    },
    {
      "beatmap_id": 1007,
      "name": "Beatmap 7",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 4,
      "note_count": 16,
      "bpm": 175,
      "duration": 8000
    },
    {
      "beatmap_id": 1008,
      "name": "Beatmap 8",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 1,
      "note_count": 28,
      "bpm": 155,
      "duration": 9000
    },
    {
      "beatmap_id": 1009,
      "name": "Beatmap 9",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 3,
      "note_count": 14,
      "bpm": 180,
      "duration": 2400
    },
    {
      "beatmap_id": 1010,
      "name": "Beatmap 10",
      "image_url": "https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg",
      "difficulty": 5,
      "note_count": 24,
      "bpm": 165,
      "duration": 2000
    }
]

const SampleLeaderBoard = [
  {
    "username": "sample",
    "score": 80
  },
  {
    "username": "breeze",
    "score": 90
  },
  {
    "username": "breeze",
    "score": 100
  },
]


const Home = () => {
  const [beats, setBeats] = useState(SampleBeats);
  const [records, setRecords] = useState(SampleLeaderBoard)
  const [number, setNumber] = useState(-1);


  records.sort(function (a, b) {
    return b.score - a.score;
  });

  useEffect(() => {
    // getBeats().then(data => setBeats(data))
    // getLeaderBoard(number, 4).then(data => setRecords(data))
    // update_Gamestate({ "game_state": "MENU", "beatmap_id": null })
  }, [number])

  console.log(records)

  return (
    <div>
      <div className="col-1">
        <img src={logo} alt="" />
        <p>Choose Your Beat To Play The Game!!!</p>

        {number === -1 ? null : <h1>LEADERBOARD</h1>}
        {number !== -1 && records.length === 0 ? <h3>There is no record</h3> : null}
        {number === -1
          ? null
          : records
            .map((record, index) => <Board {...record} />)}
      </div>
      <div className="col-2">
        {beats.map((beat) => (
          <Card {...beat} setNumber={setNumber} />
        ))}
      </div>
    </div>
  );
};

export default Home;
