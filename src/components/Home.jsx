import React, { useState,useEffect } from "react";
import "./Home.scss"
import axios from 'axios';

const logo = "https://static.vecteezy.com/system/resources/previews/022/101/069/original/netflix-logo-transparent-free-png.png"


const apiKey ="220a613c946e6bbd161435b052159623"
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const popular = "popular";

const Card = ({img })=>(
    <img className="card" src={img} alt="cover" />  
)

const Row = ({title,arr=[]})=>(
        <div className="row">
            <h2>{title}</h2>
            <div>
                {arr.map((item,index)=>(
                <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
                ))}
            </div>
           
        </div>
    )

function Home(){

    const [upcomingmovis , setUpcomingmovies] = useState([]);
    const [popularMovies ,setPopularmovies] = useState([])
    const [topratedMovies,settopratedmovies] = useState([])

    

    useEffect(() => {

        const fetchupcomingData = async()=>{
            const {data:{results}} =  await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingmovies(results);

        };
        const fetchpopulardata = async()=>{
            const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setPopularmovies(results);
        };
       const fetchtopratedData = async()=>{
        const {data:{results}} = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`)
        settopratedmovies(results);
        
       }
        fetchpopulardata()
        fetchupcomingData()
        fetchtopratedData()       
        
    }, [])
    

    return (
        <section className="home">
            <div className="banner">
                <img src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="img404" />
                <img src={logo} alt="img" />
                <h1 className="h1tag">netflix</h1>
            </div>

            <Row title={"upcoming movies"} arr={upcomingmovis}/>
            <Row title={"popular"} arr={popularMovies}/>
            <Row title={"top rated"} arr={topratedMovies}/>

        </section>


    )
}
export default Home;