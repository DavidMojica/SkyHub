export const NASA_API:{ 
    [key:string]: string
} = {
    //----------------Key----------------//
    KEY: 'SmBudsemtB2VBmd5L8zAJEKpoSALeLDRgZBf0fJU',
    //-------------Usages------------//
    APOD: 'https://api.nasa.gov/planetary/apod?api_key=',
    // ----------MARS-CURIOSITY-------------//
    MARS_CURIOSITY: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=',
    //-----------Nasa image and video library----------//
    MEDIA_LIBRARY: "https://images-api.nasa.gov/search?q=",
    //----------No definido aun-------//
    //PLANET_EARTH: "https://ssd.jpl.nasa.gov/api/horizons_lookup.api?sstr=Earth&api_key=",
}

export const IMAGENES_NASA_PLANETAS: {
    [key:string]:string[]
} = {
    mercurio: [
        'PIA11406',
        'PIA11245',
    ],
    venus: [
        'PIA00234',
        'PIA01544',
    ],
    tierra:[
        'PIA00342',
        'PIA18033',
    ],
    marte:[
        'PIA04591',
        'PIA26201',
    ],
    jupiter:[
        'PIA25015',
        'hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o',
    ],
    saturno:[
        'PIA08392',
        'PIA03152',
    ],
    urano:[
        'PIA18182',
        'GSFC_20171208_Archive_e000100',
    ],
    neptuno:[
        'PIA01142',
        'PIA01492',
    ],
    pluton:[
        'PIA19873',
        'PIA19708',
    ],
    eris:[
        'PIA17307',
        'PIA03034'
    ],
    sedna:[
        'PIA05566',
        'PIA05569'
    ],
    makemake: [
        'PIA08398'
    ],
    haumea: [
        'GSFC_20171208_Archive_e001308'
    ]
}

export const  IMAGENES_NASA_ASTEROIDES: {
    [key:string]:string
} = {
    ceres:'PIA21906',
    halley:'ARC-1986-AC86-0720-4',
    vesta: 'PIA14894',
    hebe:'PIA24471',
    ida: 'PIA00136',
    lempo: 'PIA24561',
    eros:'PIA19379', 
    toutatis: 'PIA16599',
    quaoar: 'PIA19647',
    steins: 'PIA23554',
    astree: 'PIA15776',
    pholus: 'PIA22970',
    castalia: 'PIA02494',
    hector: 'PIA15019',
    cruithne:'PIA14736',
}