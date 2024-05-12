class Utils{
    constructor(){}

    /**
     * @param url 
     * @returns json;
     */
    public static async DataFetcher(url:string):Promise<any> {
        const data = await fetch(url);
        return data.json();
    }

    /**
     * @param lang 
     * @returns [key:string]:string
     */
    public KeywordTranslator(lang:string):{[key:string]:string}{
        switch (lang.toLowerCase()){
            case 'en':{
                return {
                    mercurio:'mercury',
                    venus:'venus',
                    tierra:'earth',
                    marte:'mars',
                    jupiter:'jupiter',
                    saturno:'saturn',
                    urano:'uranus',
                    neptuno:'neptune',
                    pluton:'pluto',
                }
            }
            default:
                return {}
        }
    }
}

export default Utils;