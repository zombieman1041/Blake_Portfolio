// music settings
function playMusic(id){
    var music = document.getElementById(id);
    music.style.display = music.style.display == "block" ? "none" : "block"; 
}
// fullscreen setting
function fullscreen(){
    document.documentElement.requestFullscreen();
}
