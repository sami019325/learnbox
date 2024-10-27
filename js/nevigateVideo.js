console.log('nevigateFle', videoData);

let videoOnPlay = localStorage.getItem('SaveVideoOnPlay');
let videoOnPlayType = 'youTube';






const creatIframe = (currentV) => {
    document.getElementById('player').innerHTML = `
    <iframe class="w-full h-screen select-none pointer-events-none" id="IFrameplayer"
src="https://www.youtube.com/embed/${currentV}?autoplay=1"
frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
`
}

const playControl = (currentV) => {


    // data

    if (videoOnPlay) {
        creatIframe(videoOnPlay);
    }
    else {
        videoOnPlay = currentV[0].dataID[0].VideoTitile;
        localStorage.setItem('SaveVideoOnPlay', videoOnPlay);

    };

    creatIframe(videoOnPlay);

}

let playListAll = [];
let UIDIndex = 0;
const creatNewPlayList = () => {
    videoData.map(obj => {
        console.log(obj);
        UIDIndex = obj.typeN.filter('youTube'

            // uID => 
            // {
            //     UIDIndex = uID.VideoTitile.findIndex(videoOnPlay);
            //     playListAll.push(uID.VideoTitile)
            // })
            // console.log(UIDIndex, 'playliss=============', playListAll)
        )

    }

    );
    console.log('newUser', UIDIndex);
}
creatNewPlayList(UIDIndex);


// 

const playNavControl = (action) => {
    console.log(action, 'and', videoData)
    creatNewPlayList()
    if (action === 'previous' && videoOnPlay) {
        // 
        videoData.map(obj => {
            let playIndex = obj.value.dataID.findIndex(videoOnPlay)
            console.log('found===========', playIndex);
        });

        console.log(action, 'ply', videoData[0].value);
    }
}

