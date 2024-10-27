// document.getElementById('youtPlayerControl').innerHTML = ``;
console.log('from displayNav', videoData[0]);

videoData.map(d => {
    console.log('from displayNav-----', d)
});


for (let i = 0; i < videoData.length; i++) {
    console.log("Iteration -----", videoData[i].type);
    document.getElementById('showlist').innerHTML = `<h>a</h1>`
}