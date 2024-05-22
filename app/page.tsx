//----------------Imports---------------//
import Header from "./components/header";
import Footer from "./components/footer";
import {MoonlightScene, ForestScene} from "./components/parallax/parallax-scenarios";
import {NASA_API} from "./components/API/NASA_API";
import Utils from "./components/utils";
import RainbowTitle from "./components/rainbow_title";
import { PictureOfTheDay } from "./components/day_picture/day-picture";

//----------------Construcción página home------------------//
/**
 * Construcción de la página principal
 * Devuelve: La página principal como componente react
 */
const Home = async ():Promise<React.JSX.Element> => {
  //-------Nasa API fetch: Astronomic Picture Of the Day--------//
  const data = await Utils.DataFetcher(`${NASA_API.APOD}${NASA_API.KEY}`);
  const media_element = data.media_type === 'video' ? `<iframe src="${data.url}"></iframe>` : data.url;
  const isVideo = data.media_type === 'video' ? true : false;
  return (
    //-------Tags html van aquí:---------//
    <>
        <Header />
          <section className="text-center mb-8 ">
              <RainbowTitle text="SkyHub" />
          </section>
          <MoonlightScene />
          <ForestScene />
          <PictureOfTheDay 
          title={data.title}
          date={data.date}
          media_element={media_element}
          explanation={data.explanation}
          isVideo={isVideo}
          />
        <Footer />
    </>
  );
}

export default Home;