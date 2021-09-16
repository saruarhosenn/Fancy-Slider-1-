const images = [
	"assets/images/slider-1.jpg",
	"assets/images/slider-2.jpg",
	"assets/images/slider-3.jpg",
	"assets/images/slider-4.jpg",
	"assets/images/slider-5.jpg",
	"assets/images/slider-6.jpg",
];

let countNumber = 0;
setInterval(() => {
	const image = document.getElementById("image");
	const img = images[countNumber++];
	image.setAttribute("src", img);
	if (countNumber >= images.length) {
		countNumber = 0;
	};
}, 2500);