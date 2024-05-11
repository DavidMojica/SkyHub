export const fetchData = async (url:string):Promise<any> =>{
    const data = await fetch(url)
    return data.json();
}