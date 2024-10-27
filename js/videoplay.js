// Load JSON data and handle video navigation
// import videoData from './APIs/nextandPiv.json';



// youtube video load ============================= starts
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const playYtbVideo = (YVID) => {
    if (player) {
        player.destroy();
    }
    player = new YT.Player('player', {
        height: '700px',
        width: '100%',
        videoId: YVID,
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'rel': 0,
            'showinfo': 0,
            'autoplay': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    document.getElementById('notify').style.display = 'none';
    document.getElementById('videoPlayer').style.display = 'block';
}
window.playYtbVideo = playYtbVideo;
// playYtbVideo('YVID');

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
    console.log('-------------------------',)
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo);
        done = true;
    }
};
function stopVideo() {
    player.stopVideo();
}
window.stopVideo = stopVideo;

const playPause = (event) => {
    if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else if (player) {
        player.playVideo();
    } else {
        console.log("Player not initialized yet");
    }

}
window.playPause = playPause;

// youtube video load ============================= ends














let currentIndex = 0;

// Next Video
const nextVideo = () => {
    console.log('saamiii')
    if (currentIndex < videoData.length - 1) {
        currentIndex++;
        playYtbVideo(currentIndex);
    }
}
window.nextVideo = nextVideo;

// Previous Video
const previousVideo = () => {
    if (currentIndex > 0) {
        currentIndex--;
        playYtbVideo(currentIndex);
    }
}
window.previousVideo = previousVideo;













//////////////////

// nex and previous
// const dataContainer = document.getElementById('data-container');
// const previousButton = document.getElementById('previous');
// const nextButton = document.getElementById('next');

// let currentIndex = 0;
// let jsonData = [];

// // const newLocal = './APIs/nextandPiv.json';
// // Load JSON data asynchronously
// import data from './APIs/nextandPiv.json';
// console.log(data)
// fetch(data)
//     .then(response => response.json())
//     .then(data => {
//         jsonData = data;
//         console.log('Loaded data:', jsonData);
//         // displayData(currentIndex);
//     })
//     .catch(error => {
//         console.error('Error loading JSON data:', error);
//     });



// function displayData(index) {
//     if (index < 0 || index >= jsonData.length) {
//         return; // Prevent displaying invalid data
//     }

//     const dataItem = jsonData[index];
//     dataContainer.innerHTML = `
//         <p>Name: ${dataItem.name}</p>
//         <p>Age: ${dataItem.age}</p>
//         `;

//     updateButtonStates(index);
// }

// function updateButtonStates(index) {
//     previousButton.disabled = index === 0;
//     nextButton.disabled = index === jsonData.length - 1;
// }

// // previousButton.addEventListener('click', () => {
// //     console.log('sssssssss');
// //     currentIndex--;
// //     displayData(currentIndex);
// //     console.log('sssssssss', jsonData);
// // });

// btnPlayPsCall = () => {
//     console.log('sssssssss');
//     // currentIndex--;
//     // displayData(currentIndex);
//     // console.log('sssssssss', jsonData);
// }

// nextButton.addEventListener('click', () => {
//     currentIndex++;
//     displayData(currentIndex);
// });