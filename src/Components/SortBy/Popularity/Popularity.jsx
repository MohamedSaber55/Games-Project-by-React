/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllGames() {
    const [AllGames, setAllGames] = useState([]);
    const Allgame = {
        method: "GET",
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        params: { platform: 'browser', category: 'mmorpg', 'sort-by': 'popularity' },
        headers: {
            "X-RapidAPI-Key": `1a614a2a9emsha645a3888a373c1p17a193jsn340fc56d0468`,
            "X-RapidAPI-Host": `free-to-play-games-database.p.rapidapi.com`,
        },
    };
    async function getAllGames() {
        let { data } = await axios.request(Allgame);
        setAllGames(data);
        // console.log(data);
    }

    const [count, setCount] = useState(20);
    function seeMore() {
        let newCount = count;
        newCount += 20;
        setCount(newCount);
    }
    useEffect(() => {
        getAllGames();
    }, []);
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {AllGames.length > 0 ? (
                        AllGames.slice(0, count).map((game, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                <Link to={"/gamedetails/" + game.id}>
                                    <div className="game">
                                        <img className="w-100" src={game.thumbnail} alt="" />
                                        <div className=" d-flex justify-content-between align-items-center mx-2 mt-3">
                                            {(game.title.length) > 10 ? <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 8) + "...."}</p> : <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 15)}</p>}
                                            <button className="btn btn-info btn-sm text-light">Free</button>
                                        </div>
                                        <p className="px-2 pt-2 small"> {game.short_description.slice(0, 20)}...</p>
                                        <div className="">
                                            <div className="d-flex justify-content-between p-2">
                                                <i className="fas fa-plus-square"></i>
                                                <div className="d-flex mb-n2 justify-content-between align-items-center">
                                                    <span className="badge bg-secondary text-dark me-2">{game.genre}</span>
                                                    {game.platform != "Web Browser" ? <i className="fab fa-windows me-1"></i> : <i className="fas fa-window-maximize me-1" title="Available on Browser"></i>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (<div className="spinner"><i className="fas fa-spinner fa-spin fa-4x"></i></div>)}
                </div>
                <div className="text-center m-auto">
                    {" "}
                    <button onClick={seeMore}
                        className="btn btn-outline-secondary py-2 pt-1 more-btn mb-4 text-center">
                        More Games <i className="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
