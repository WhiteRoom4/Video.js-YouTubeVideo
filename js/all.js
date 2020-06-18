//顯示控制UI、自動循環播放、預設靜音、寬600px、高400px的播放器。
const player = videojs('my-video',{
  sources:[{
    src: "https://www.youtube.com/watch?v=A8l6y9D5Zvo",
    type: "video/youtube"
  } ],
  loop:true,
  muted:true,
  width:"600px",
  height:"400px",
  controls:true
});

//playing	播放時觸發
player.on("playing",()=>{
  console.log("播放影片")
})