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

    public async SelectRandomImagesFromObject(obj:{[key:string]:string[]}): Promise<{[key:string]:string}>{
        const selected_images: {[key: string]: string} = {};
        for (const element of Object.keys(obj)) {
            const imgs_element = obj[element];
            selected_images[element] = imgs_element[Math.floor(Math.random() * imgs_element.length)];
        }
        return selected_images;
    }
}

export default Utils;