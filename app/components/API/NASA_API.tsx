const NASA_API:{ 
    [key:string]: string
} = {
    //----------------Key----------------//
    KEY: 'SmBudsemtB2VBmd5L8zAJEKpoSALeLDRgZBf0fJU',
    //-------------Usages------------//
    APOD: 'https://api.nasa.gov/planetary/apod?api_key=',
    // ----------MARS-CURIOSITY-------------//
    MARS_CURIOSITY: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=',
    //-----------Exoplanetas---------------//
    PLANET_EARTH: "https://ssd.jpl.nasa.gov/api/horizons_lookup.api?sstr=Earth&api_key="

}
export default NASA_API;