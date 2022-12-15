import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Search() {

    let searchInput = document.getElementById("search-input");

    const [AllGames, setAllGames] = useState([]);

    const Allgame = {
        method: "GET",
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?`,
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

    useEffect(() => {
        getAllGames();
    }, []);


    function search() {
        let x = searchInput.value;
        console.log(AllGames);
        for (let i = 0; i < AllGames.length; i++) {
            if (x == AllGames[i].tittle) {
                console.log("a")
            }
            else {
                console.log(x);
            }
        }

    }

    return (<>
        <h1 className="border-bottom py-2"> <i className="fas fa-search me-2 "></i>Find Games</h1>
        <div className="col-md-6 mt-3">
            <form className="d-flex" role="search">
                <input onKeyUp={search} id="search-input" className="form-control me-2 bg-transparent border-secondary text-light" type="search" placeholder="Search for games..." aria-label="Search" />
            </form>
        </div>




        <div className="container">
            <h3 className="mt-5 fw-bolder h3">You May Like</h3>
            <div className="row">
                {AllGames.length > 0 ?
                    AllGames.slice(66, 69).map((game, index) => (
                        <div key={index} className="col-md-4 mt-3">
                            <Link to={"/gamedetails/" + game.id}>
                                <div className="game">
                                    <img className="w-100" src={game.thumbnail} alt="" />
                                    <div className=" d-flex justify-content-between align-items-center p-4">
                                        <h5>
                                            {(game.title.length) > 10 ? <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 8) + "...."}</p> : <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 15)}</p>}
                                        </h5>
                                        <button className="btn btn-info btn-sm">Free</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )) : (<div className="spinner"><i className="fas fa-spinner fa-spin fa-4x"></i></div>)}
            </div>
        </div>
        <div className="container">
            <h3 className="mt-5 fw-bolder h3">Most Played Today</h3>
            <div className="row">
                {AllGames.length > 0 ?
                    AllGames.slice(3, 6).map((game, index) => (
                        <div key={index} className="col-md-4 mt-3">
                            <Link to={"/gamedetails/" + game.id}>
                                <div className="game">
                                    <img className="w-100" src={game.thumbnail} alt="" />
                                    <div className=" d-flex justify-content-between align-items-center p-4">
                                        <h5> {(game.title.length) > 10 ? <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 8) + "...."}</p> : <p className="m-0 fs-5 fw-bold">{game.title.slice(0, 15)}</p>}</h5>
                                        <button className="btn btn-info btn-sm">Free</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )) : (<div className="spinner"><i className="fas fa-spinner fa-spin fa-4x"></i></div>)}
            </div>
        </div>
    </>

    )
}
