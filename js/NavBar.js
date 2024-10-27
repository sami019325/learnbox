// let playCode = 0;
// const playVideo = (leftV, rightV) => {

//     document.getElementById('youtPlayerControl').innerHTML = `

//             <button id="previous" class="" onclick="callLoadVideo('${leftV}')">
//                 <img class=" h-16 w-16 after:-translate-y-3 overflow-auto touch-auto hover:resize m-2 hover:border-2 rounded-full border-lime-950"
//                     src="./resources/left-key-mantis.png" alt="" srcset="">
//             </button>


//             <button id="play-button"
//                 class=" bg-lime-200 hover:bg-amber-200 rounded-full active:bg-amber-500  w-16 h-16"
//                 onclick="playPause()">
//                 <img class="h-16 w-16" src="./resources/play-key.png" alt="" srcset="">
//             </button>


//             <button id="next" onclick="callLoadVideo('${rightV}')">
//                 <img class=" h-16 w-16 after:-translate-y-3 overflow-auto touch-auto hover:resize m-2 hover:border-2 rounded-full border-lime-950"
//                     src="./resources/right-key-mantis.png" alt="" srcset="">
//             </button>`
// };


// const callLoadVideo = (data, typeNsInput) => {
//     console.log('data from insider', videoData[0].typeN)
//     let leftNev = 'CuqxByiYG_0';
//     let rightNev = '2rmYeyj9Veo';
//     let totalPlay = [];
//     let PLayNowV = typeNsInput;
//     let loadNow = '';
//     let JSONDATA = data;
//     JSONDATA.map(tData => {
//         if (tData.typeN === PLayNowV) {
//             tData.dataID.map(listOfVideo => {
//                 totalPlay.push(listOfVideo)
//             });
//             loadNow = totalPlay;
//             console.log('the play', loadNow);

//         }
//         else { console.log('WRONG D') }
//     })

//     console.log('the play control', totalPlay[1].VideoTitile)


//     playVideo(leftNev, rightNev)
// }





// --------------------------------
let playCode = 0; // Track the current video index globally
const playPause = (event) => {
    console.log("Player working t", YT.PlayerState.PLAYING);

    if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
        console.log('playing -------------------------------------------')
        player.pauseVideo();
    } else if (player) {
        player.playVideo();
    } else {
        console.log("Player not initialized yet");
    }

}

// ---------------------------------------
// Function to handle video navigation based on the direction (previous/next)
const navigateVideo = (direction) => {
    let currentData = videoData[0].dataID; // Assuming videoData[0].dataID is your YouTube data array

    // Adjust playCode for previous and next
    if (direction === 'previous' && playCode > 0) {
        playCode--;
    } else if (direction === 'next' && playCode < currentData.length - 1) {
        playCode++;
    }

    // Get the current video title
    let currentV = currentData[playCode].VideoTitile;

    // Call the function to play the video and update the buttons
    playVideo(currentV);
};

// Initial function to load videos when the page is first loaded
const callLoadVideo = (data, typeNsInput) => {
    let totalPlay = [];
    let JSONDATA = data;
    console.log('dataMatch', typeNsInput)

    // Filter out the correct typeN (e.g., "youTube") and collect the dataID
    JSONDATA.map(tData => {
        if (tData.typeN == typeNsInput) {
            tData.dataID.map(listOfVideo => {
                totalPlay.push(listOfVideo);
            });
        }
    });

    // Store the video data globally
    videoData[0].dataID = totalPlay;

    // Play the first video
    playVideo(totalPlay[playCode].VideoTitile);
};

// Trigger the initial load with type 'youTube'
callLoadVideo(videoData, 'youTube');
