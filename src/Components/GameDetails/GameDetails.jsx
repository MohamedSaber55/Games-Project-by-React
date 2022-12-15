/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

// import { Link } from "react-router-dom";

export default function AllGames() {

    let prams = useParams();

    const [AllGames, setAllGames] = useState({});
    // const Allgame = {
    //     method: "GET",
    //     url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${prams.id}`,
    //     headers: {
    //         "X-RapidAPI-Key": `1a614a2a9emsha645a3888a373c1p17a193jsn340fc56d0468`,
    //         "X-RapidAPI-Host": `free-to-play-games-database.p.rapidapi.com`,
    //     },
    // };

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: `${prams.id}` },
        headers: {
            'X-RapidAPI-Key': '1a614a2a9emsha645a3888a373c1p17a193jsn340fc56d0468',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    async function getAllGamesss() {
        let { data } = await axios.request(options);
        setAllGames(data);
        // console.log(data);
    }
    // async function getAllGames() {
    //     let { data } = await axios.request(Allgame);
    //     setAllGames(data);
    //     // console.log(data);
    // }
    useEffect(() => {
        // getAllGames();
        getAllGamesss();
    }, []);

    // console.log(AllGames);

    {
        let Requirements = AllGames.minimum_system_requirements
        if (Requirements != undefined) {
            var requirements1 = Requirements.graphics
            var requirements2 = Requirements.memory
            var requirements3 = Requirements.os
            var requirements4 = Requirements.processor
            var requirements5 = Requirements.storage
        }
    }

    {
        let x = AllGames.screenshots
        // console.log(x)
        if (x != undefined) {
            for (var i = 0; i < x.length; i++) {
                // console.log(x[i].image)
                var screeeen1 = (x[0].image);
                var screeeen2 = (x[1].image);
                var screeeen3 = (x[2].image);
                // console.log(screeeen1);
                // setScreens(x[0].image)
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 game_image_container">
                        <img alt="" className="w-100 rounded-2" src={AllGames.thumbnail} />
                        <div className="mt-3 ">
                            <div className="buttons">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-3 p-1">
                                            <span className="btn btn-dark w-100 py-2">FREE</span>
                                        </div>
                                        <div className="col-lg-9 p-1">
                                            <a type="button" rel="nofollow noreferrer"
                                                target="_blank" className="btn btn-info w-100 py-2" href={AllGames.freetogame_profile_url}>
                                                <strong>PLAY NOW </strong>
                                                <i className="fas fa-sign-out-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="likes bg-dark rounded mt-2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3 rounded py-1 likes-item">
                                            <div className="like-content text-center">
                                                <div className="text-success"><i className="far fa-smile fa-lg text-success"></i></div>
                                                <div className="count mb-n2 text-muted">1</div>
                                                <span className="title" style={{ fontSize: 12 }}>LIKE</span>
                                            </div>
                                        </div>
                                        <div className="col-3 rounded py-1 likes-item">
                                            <div className="like-content text-center">
                                                <div className=""><i className="far fa-meh fa-lg text-secondary"></i></div>
                                                <div className="count mb-n2 text-muted">0</div>
                                                <span className="title small" style={{ fontSize: 12 }}>MEH</span>
                                            </div>
                                        </div>
                                        <div className="col-3 rounded py-1 likes-item">
                                            <div className="like-content text-center">
                                                <div className=""><i className="far fa-frown fa-lg text-danger"></i></div>
                                                <div className="count mb-n2 text-muted">0</div>
                                                <span className="title p-0" style={{ fontSize: 12, margin: -10 }}>DISLIKE</span>
                                            </div>
                                        </div>
                                        <div className="col-3 rounded py-1 likes-item">
                                            <div className="like-content text-center">
                                                <div className=""><i className="far fa-plus-square fa-lg text-info"></i></div>
                                                <div className="count mb-n2 text-muted">46</div>
                                                <span className="title" style={{ fontSize: 12 }}>ADD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small text-muted mt-3"><i className="fas fa-user me-2"></i> Requires 3rd-Party Account</div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1>{AllGames.title}</h1>
                        <h5 className="mt-3 fw-bold">About {AllGames.title}</h5>
                        <p className="">{AllGames.description}</p>
                        {AllGames.platform === 'Windows' ? <h5 className="mt-3 fw-bold">Minimum System Requirements</h5> : <h5 className="mt-3 fw-bold">No Running System Requirements</h5>}

                        {AllGames.platform === 'Windows' ?
                            <ul className="list-unstyled ms-2">
                                <li className="mt-1">
                                    <strong>graphics : </strong>
                                    <small>
                                        {requirements1}
                                    </small>
                                </li>
                                <li className="mt-1">
                                    <strong>memory : </strong> <small>{requirements2}</small>
                                </li>
                                <li className="mt-1">
                                    <strong>os : </strong>
                                    <small>{requirements3}</small>
                                </li>
                                <li className="mt-1">
                                    <strong>processor : </strong>
                                    <small>{requirements4}</small>
                                </li>
                                <li className="mt-1">
                                    <strong>storage : </strong> <small>{requirements5}</small>
                                </li>
                            </ul> : ''}
                        {screeeen1 ?
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="w-100"
                                        src={screeeen1}
                                        alt="" />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="w-100"
                                        src={screeeen2}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="w-100"
                                        src={screeeen3}
                                        alt="" />
                                </Carousel.Item>
                            </Carousel>
                            : ""
                        }

                        <h2 className="my-4">Additional Information</h2>
                        <div className="row mb-5 mt-2">
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Title
                                    <br />
                                </span>
                                <p className="small">{AllGames.title}</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Developer
                                    <br />
                                </span>
                                <p className="small">{AllGames.developer}</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Publisher
                                    <br />
                                </span>
                                <p className="small">{AllGames.publisher}</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Release Date
                                    <br />
                                </span>
                                <p className="small">{AllGames.release_date}</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Genre
                                    <br />
                                </span>
                                <p className="small">{AllGames.genre}</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <span className="text-muted">
                                    Platform
                                    <br />
                                </span>
                                <p className="small">
                                    {AllGames.platform === 'Windows' ? <i className="fab fa-windows me-1"></i> : <i className="fas fa-window-maximize me-1" title="Available on Browser"></i>}

                                    {AllGames.platform}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}