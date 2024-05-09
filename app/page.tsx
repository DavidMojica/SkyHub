'use client';
//----------------Imports---------------//
import Header from "./components/header";
import Footer from "./components/footer";
import {MoonlightScene, ForestScene} from "./components/parallax/parallax-scenarios";
import {NASA_API} from "./components/API/NASA_API";
import React, {useEffect} from "react";

//-------Nasa API fetch: Astronomic Picture Of the Day--------//
const getNasaAPOD = async ():Promise<void> =>{
  /**
   * Se obtiene la imágen / video atronómico del día y su información respectiva, luego se muestra
   * a través de un iframe o img dependiendo del tipo de media que sea (imagen o video).
   */
  try{
    //API Call
    const response = await fetch(`${NASA_API.APOD}${NASA_API.KEY}`);
    const data = await response.json();
    //Implementación propia
    document.getElementById('title')!.textContent = data.title;
    document.getElementById('date')!.textContent = data.date;
    document.getElementById('explanation')!.textContent = data.explanation;
    const media_container = document.querySelector('#media_container');
    if (media_container) {
      //Condicional: Se analiza si data.media_type es 'video', si sí se crea un iframe y si no, sabemos que es una imagen y se crea un img.  
      media_container && (media_container.innerHTML = data.media_type === 'video' ? `<iframe src="${data.url}"></iframe>` : `<img src="${data.url}" />`);
    }
  } catch (error){
    console.log(error);
  }
}

//----------------Construcción página home------------------//
const Home = ():React.JSX.Element => {
  /**
   * Construcción de la página principal
   * Devuelve: La página principal como componente react
   */
  //------Hooks: Efectos secundarios en componentes funcionales-------//
  useEffect(() => {
    getNasaAPOD();
  }, [])
  return (
    //-------Tags html van aquí:---------//
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
          <section id="media_container">
          </section>
          <p id="explanation"></p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;