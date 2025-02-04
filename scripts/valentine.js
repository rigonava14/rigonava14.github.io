const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
	question.innerHTML = "Yay, Feli Feli!";
	gif.src =
		"https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("click", () => {
	question.innerHTML = "MMMM, Ahuevo sera mi valentine :3";
	gif.src =
		"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BtbGYwMmx0OGNkYXNieG9kNDUyajdlcG1tMW1zbXBoZ2llYnUyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VKUSdDIW7vXWwTFCtf/giphy.gif";
});