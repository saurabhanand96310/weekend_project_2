const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const videoContainer = document.querySelector(".video-container");
const theme=document.querySelector(".theme");
const body=document.querySelector("body")


menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    videoContainer.classList.toggle("large-container");
    
}
theme.onclick=function(){
    body.classList.toggle("switch");
}

// -----------------------2nd------------------

let api_key = "AIzaSyD0Rs-vnwMlgnNmMcAAN5TICoVJvx3tKZ0"; 
let video_http = " https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key ,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 48,
    regionCode: 'IN'
})).then(res => res.json())
    .then(data => {
        data.items.forEach(item => {
            getChannelIcon(item)
        })
    })
    .catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    })).then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        })
}


const makeVideoCard = (data) => {
    videoContainer.innerHTML += `
        <div class = "video" onclick = "location.href ='https://youtube.com/watch?v=${data.id}'">
             <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
              <div class="content">
               <img src="${data.channelThumbnail}" class="channel-icon" alt="">
              <div class="info">
                  <h4 class="title"> ${data.snippet.title} </h4>
                 <p class="channel-name"> ${data.snippet.channelTitle} </p>
             </div>
        </div>
     </div>

`}

// search logic

const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener("click", () => {
    if (searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
});