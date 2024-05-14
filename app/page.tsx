//----------------Imports---------------//
import Header from "./components/header";
import Footer from "./components/footer";
import {MoonlightScene, ForestScene} from "./components/parallax/parallax-scenarios";
import {NASA_API} from "./components/API/NASA_API";
import Utils from "./components/utils";
import RainbowTitle from "./components/rainbow_title";

//----------------Construcción página home------------------//
/**
 * Construcción de la página principal
 * Devuelve: La página principal como componente react
 */
const Home = async ():Promise<React.JSX.Element> => {
  //-------Nasa API fetch: Astronomic Picture Of the Day--------//
  const data = await Utils.DataFetcher(`${NASA_API.APOD}${NASA_API.KEY}`);
  const media_element = data.media_type === 'video' ? `<iframe src="${data.url}"></iframe>` : `<img src="${data.url}" />`;
  return (
    //-------Tags html van aquí:---------//
    <>
        <Header />
          <section className="text-center mb-8 ">
              <RainbowTitle text="SkyHub" />
          </section>
          <MoonlightScene />
          <ForestScene />
          <main className="container font-poppins">
            <h1>NASA's Astronomy Picture of the Day</h1>
            <h2>{data.title}</h2>
            <p id="date">{data.date}</p>
            <section className="picture-explanation-container">
              <section id="media_container" dangerouslySetInnerHTML={{__html: media_element}}>
              </section>
              <p>{data.explanation}</p>
            </section>
          </main>
        <Footer />
    </>
  );
}

export default Home;