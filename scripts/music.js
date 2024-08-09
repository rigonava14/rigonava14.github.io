const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
// Songs Titles  
const songs = ["M.A.I", "Sanctuary", "ukulele"];
// KeepTrack of song  
let songIndex = 0;
// Initially load song details into DOM  
loadSong(songs[songIndex]);
// Update song details  
function loadSong(song) {
	title.innerText = song;
	audio.src = `./music/${song}.mp3`;
	cover.src = `./images/${song}.jpg`;
}
// Play Song  
function playSong() {
	musicContainer.classList.add("play");
	playBtn.querySelector("i.fa").classList.remove("fa-play");
	playBtn.querySelector("i.fa").classList.add("fa-pause");
	audio.play();
	updateBackground();
}
// Pause Song  
function pauseSong() {
	musicContainer.classList.remove("play");
	playBtn.querySelector("i.fa").classList.add("fa-play");
	playBtn.querySelector("i.fa").classList.remove("fa-pause");
	audio.pause();
}
// Previous Song  
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
	updateBackground();
}
// Next Song  
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
	updateBackground();
}
// Update Progress bar  
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPerCent = (currentTime / duration) * 100;
	progress.style.width = `${progressPerCent}%`;
}
// Set Progress  
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;
	audio.currentTime = (clickX / width) * duration;
}
// Event Listeners  
playBtn.addEventListener("click", () => {
	const isPlaying = musicContainer.classList.contains("play");
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});
// Change Song  
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
// Time/Song Update  
audio.addEventListener("timeupdate", updateProgress);
// Click On progress Bar  
progressContainer.addEventListener("click", setProgress);
// Song End  
audio.addEventListener("ended", nextSong);  
//Background Fade
const imgElement = document.getElementById('cover');
const body = document.body;
const colorThief = new ColorThief();

function darkenColor(color, factor) {
	return color.map(value => Math.max(0, Math.floor(value * (1 - factor))));
}

function updateBackground() {
	// Asegúrate de que la imagen esté completamente cargada
	if (imgElement.complete) {
		const palette = colorThief.getPalette(imgElement);
		var shadow = palette[3]
		var info = palette[7]
		var color = palette[6]

		body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
		const shadowColor = `rgba(${shadow[0]}, ${shadow[1]}, ${shadow[2]}, 0.5)`;
		musicContainer.style.backgroundColor = `rgb(${info[0]}, ${info[1]}, ${info[2]})`;
		musicContainer.style.boxShadow = `0 20px 20px 0 ${shadowColor}`;

	} else {
		imgElement.addEventListener('load', function () {
			const palette = colorThief.getPalette(imgElement);
			var shadow = palette[3]
			var info = palette[7]
			var color = palette[6]

			body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
			const shadowColor = `rgba(${shadow[0]}, ${shadow[1]}, ${shadow[2]}, 0.5)`;
			musicContainer.style.backgroundColor = `rgb(${info[0]}, ${info[1]}, ${info[2]})`;
			musicContainer.style.boxShadow = `0 20px 20px 0 ${shadowColor}`;
		});
	}
}

// Inicializar el fondo basado en la imagen actual

