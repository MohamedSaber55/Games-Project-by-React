
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import All from './Components/All/All';
import GameDetails from './Components/GameDetails/GameDetails';
import Pc from './Components/Pc/Pc';
import Browser from './Components/Browser/Browser';
import Popularity from '../src/Components/SortBy/Popularity/Popularity';
import Release from '../src/Components/SortBy/Release/Release';
import Alphabetical from '../src/Components/SortBy/Alphabetical/Alphabetical';
import Relevance from '../src/Components/SortBy/Relevance/Relevance';

import Racing from '../src/Components/Categories/Racing/Racing';
import Sports from '../src/Components/Categories/Sports/Sports';
import Social from '../src/Components/Categories/Social/Social';
import Shooter from '../src/Components/Categories/Shooter/Shooter';
import OpenWorld from '../src/Components/Categories/OpenWorld/OpenWorld';
import Zombie from '../src/Components/Categories/Zombie/Zombie';
import Fantasy from '../src/Components/Categories/Fantasy/Fantasy';
import ActionRPG from '../src/Components/Categories/ActionRPG/ActionRPG';
import Action from '../src/Components/Categories/Action/Action';
import Flight from '../src/Components/Categories/Flight/Flight';
import BattleRoyal from '../src/Components/Categories/BattleRoyal/BattleRoyal';
import CounterContextProvider, { CounterContext } from './Context/CounterContext';
import Search from './Components/Search/Search';


function App() {

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserData();
    }
  }, [])


  const [userData, setUserData] = useState(null);


  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    return <Navigate to='/login' />
  }

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    // console.log(decodedToken);
    setUserData(decodedToken);
  }

  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout userData={userData} logOut={logOut} />, children: [
        { path: 'home', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Home /></ProtectedRoute> },
        { path: 'search', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Search /></ProtectedRoute> },
        { path: 'gamedetails/:id', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <GameDetails /> </ProtectedRoute> },
        { path: 'login', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Login saveUserData={saveUserData} /> </ProtectedRoute> },
        { path: 'all', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <All saveUserData={saveUserData} /></ProtectedRoute> },
        { index: true, element: <Register /> },
        { path: 'profile', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Profile userData={userData} /></ProtectedRoute> },
        { path: 'platforms/pc', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Pc userData={userData} /></ProtectedRoute> },
        { path: 'platforms/browser', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Browser userData={userData} /></ProtectedRoute> },
        { path: 'sort_by/release_date', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Release userData={userData} /></ProtectedRoute> },
        { path: 'sort_by/popularity', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Popularity userData={userData} /></ProtectedRoute> },
        { path: 'sort_by/alphabetical', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Alphabetical userData={userData} /></ProtectedRoute> },
        { path: 'sort_by/relevance', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Relevance userData={userData} /></ProtectedRoute> },
        { path: 'categories/racing', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Racing userData={userData} /></ProtectedRoute> },
        { path: 'categories/sports', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Sports userData={userData} /></ProtectedRoute> },
        { path: 'categories/Social', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Social userData={userData} /></ProtectedRoute> },
        { path: 'categories/Shooter', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Shooter userData={userData} /></ProtectedRoute> },
        { path: 'categories/open_world', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <OpenWorld userData={userData} /></ProtectedRoute> },
        { path: 'categories/zombie', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Zombie userData={userData} /></ProtectedRoute> },
        { path: 'categories/fantasy', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Fantasy userData={userData} /></ProtectedRoute> },
        { path: 'categories/action_rpg', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <ActionRPG userData={userData} /></ProtectedRoute> },
        { path: 'categories/action', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Action userData={userData} /></ProtectedRoute> },
        { path: 'categories/flight', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <Flight userData={userData} /></ProtectedRoute> },
        { path: 'categories/battle_royal', element: <ProtectedRoute saveUserData={saveUserData} userData={userData}> <BattleRoyal userData={userData} /></ProtectedRoute> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ])

  return <>
    <CounterContextProvider>
      <RouterProvider router={routers} />
    </CounterContextProvider>
  </>
}

export default App;
