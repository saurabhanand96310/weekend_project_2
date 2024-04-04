const baseURL=
const apiKey="AIzaSyBngZ-HhsriMcVEIuCjD1zQqjAorzbNDDk";


async function fetchVideos(searchQuery,maxResault){
    try{
        const response=await fetch(baseURL +"/search" + `?key=${apiKey}`+`&q=${searchQuery}`);
        const data=await response.json(); 

    }
    catch(e){
        console.log(e);
    }
}
fetchVideos('icc world cup');