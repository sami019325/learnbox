
const setData = (d) => {
    let videoData = d
    // console.log(videoData);
}

let player;
let currentIndex = 0;
let currentTypeList = []; //currentType's data list
let currentType = 'youtube'; // Default to 'youTube' category
console.log('dddd', currentType)
let currentData = []; // Holds filtered data from JSON
let isPlaying = false; // Track play/pause status







// play video
function playVideoNow(theId) {
    player.loadVideoById(theId);
    videoData.map((thePlayID, parentIndex) => {
        thePlayID.dataID.map((dataIDNext, childIndex) => {
            console.log('Comparing:', theId, dataIDNext.videoTitle);

            // Find the index where videoTitle matches theId
            if (dataIDNext.videoTitle === theId) {
                console.log(`Match found at parentIndex ${parentIndex}, childIndex ${childIndex}`);
                currentIndex = parseInt(childIndex);
            }
        });
    });
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    goTop()
}


// nav bar --------------------------------------------------------
// / video nav

const displayNav = (p) => {
    let displayTitle = document.getElementById('showlist');
    p.map(obj => {
        // console.log('video nav ------ff-----', obj.type);
        displayTitle.innerHTML = displayTitle.innerHTML + `
        <div class="rounded-md flex flex-col gap-1">
                    <div class="bg-amber-300 h-14 grid grid-cols-6 gap-1 p-1">
                        <div class="col-span-1 flex items-center">
                            <img class='h-12' src="${obj.logoSrc}" alt="" srcset="">

                        </div>
                        <div class="text-wrap flex items-center col-span-4">
                            <h1 class="font-bold from-indigo-700">${obj.type}</h1>
                        </div>
                        <div class="flex items-center justify-center">
                            <img src="./resources/logos/ShareBtn.png" alt="" srcset="">
                        </div>
                    </div>
                    <div id="${obj.PlayerID}" class="flex items-center justify-center flex-col p-1 bg-white rounded-md">
                    </div>

        </div>`
    });

    p.map(objItem => {
        // console.log('video nav ------now-----', objItem.PlayerID)
        let showData = document.getElementById(objItem.PlayerID)
        objItem.dataID.map(objListData => {
            // console.log('video nav ------now2-----', objListData);
            showData.innerHTML = showData.innerHTML + `
            <div class="grid grid-cols-6 h-20 p-1 bg-white rounded-md w-full">
                        <div class="col-span-4 text-wrap flex items-center">
                            <h1 class="font-bold from-indigo-700">${objListData.videoId}</h1>
                        </div>
                        <div class="flex items-center justify-center col-span-1">

                        </div>
                        <div class="flex items-center justify-center col-span-1">
                            <button id="playPause"
                                class=" bg-lime-200 hover:bg-amber-200 rounded-full active:bg-amber-500  w-16 h-16"
                                onclick="playVideoNow('${objListData.videoTitle}')">
                                <img class="h-16 w-16" src="./resources/play-key.png" alt="" srcset="">
                            </button>
                        </div>
                    </div>
            `
        })
    })

}
























// Load YouTube Iframe API
function onYouTubeIframeAPIReady(videoId) {
    // Create a new YouTube player
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: "U44qKaKpAMk", // Set the video ID from the parameter
        events: {
            'onReady': onPlayerReady
        }
    });
}

// let necxtP = 
onYouTubeIframeAPIReady();

function onPlayerReady(event) {
    currentData = videoData.find(obj => obj.type.toLowerCase() === currentType.toLowerCase()).dataID;
    currentTypeList = videoData.map(obj => obj.type.toLowerCase());
    console.log('ssssssssssssssss', currentTypeList);
    displayNav(videoData)
};


// Function to load JSON data
function loadJSON(file, callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


// Function to rewind the video
function rewind() {
    player.seekTo(player.getCurrentTime() - 5);
}

// Function to fast forward the video
function fastForward() {
    player.seekTo(player.getCurrentTime() + 5);
}

// Update the title
let currentVideo = currentData[currentIndex];
// console.log('cVvvvvvvvvvvvvvvvvvv', currentVideo)

// Play next video
function playNextVideo() {
    if (currentIndex < 0 || currentIndex > currentData.length) {
        currentIndex = 0;
        currentType = currentTypeList[1];
        alert('played all Video of this playlist', currentType);
        console.log('played all Video of this playlist', currentType);
        onPlayerReady()
        // set the next playlist of corrent playlist. In doing this, turn current playlist into an array on onPlayerReady function. 
        return;
    }
    else {
        currentIndex = currentIndex + 1;
        let thePlayData = currentData[currentIndex].videoTitle.toString();
        player.loadVideoById(thePlayData);
        // console.log('theplaydata', thePlayData)
    }
}

// Play previous video
function playPreviousVideo() {
    if (currentIndex < 0 || currentIndex >= currentData.length) {
        currentIndex = 0;
        alert('played all V');
        return;
    }
    else {
        currentIndex = currentIndex - 1;
        let thePlayData = currentData[currentIndex].videoTitle.toString();
        player.loadVideoById(thePlayData);
        // console.log('theplaydata', thePlayData)
    };
}


// Play or pause the video
function togglePlayPause() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
    isPlaying = !isPlaying;
}


















