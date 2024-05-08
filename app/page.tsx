'use client';
import Header from "./components/header";
import {MoonlightScene, ForestScene} from "./components/parallax/parallax-scenarios";
import NASA_API from "./components/API/NASA_API";
import React, {useEffect} from "react";

interface NASAImageData {
  title: string;
  date: string;
  hdurl: string;
  explanation: string;
  media_type: string;
  url: string;
}

const fetchNASAData = async () =>{
  try{
    const response = await fetch(`${NASA_API.APOD}${NASA_API.KEY}`);
    const data = await response.json();
    console.log('NASA APOD data', data)
    displayData(data);
  } catch (error){
    console.log(error);
  }
}

const displayData = (data: NASAImageData): void => {
  document.getElementById('title')!.textContent = data.title;
  document.getElementById('date')!.textContent = data.date;
  document.getElementById('explanation')!.textContent = data.explanation;
  const multimedia = document.querySelector('#c_multimedia');

  if (multimedia) {
    multimedia && (multimedia.innerHTML = data.media_type === 'video' ? `<iframe src="${data.url}"></iframe>` : `<img src="${data.url}" />`);
  }
};


export default function Home() {
  useEffect(() => {
    fetchNASAData();;
  }, [])

  return (
    <>
      <Header />
      <section className="text-center mb-8 ">
          <span className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
              SkyHub
          </span>
          <MoonlightScene />
          <ForestScene />
      </section>
    
      <main className="container">
        <h1>NASA's Astronomy Picture of the Day</h1>
        <h2 id="title"></h2>
        <p id="date"></p>
        <section className="picture-explanation-container">
          <section id="c_multimedia">

          </section>


          <p id="explanation"></p>
        </section>
      </main>
    </>
  );
}