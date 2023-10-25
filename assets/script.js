const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slide_left = document.querySelector(".arrow_left");
const slide_right = document.querySelector(".arrow_right");
const img = document.querySelector('.banner-img')
const p = document.querySelector('#banner p')
const dots = document.querySelectorAll('.dot');
let i = 0;

function updateDots() {

	for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
		const dot = dots[dotIndex];
		
		if(dotIndex == i)
		{
			dot.classList.add('dot_selected');
		}
		else {
			dot.classList.remove('dot_selected');
}}}

slide_left.addEventListener("click", () => {
	if (i === 0){
        i = slides.length -1;
    } else{
        i--;
    }
	updateDots();
	img.src=`assets/images/slideshow/${slides[i].image}`
	p.innerHTML = slides[i].tagLine;
});

slide_right.addEventListener("click", () => {
	if (i === slides.length -1){
        i = 0;
    } else{
        i++;
    }
	updateDots();
	img.src=`assets/images/slideshow/${slides[i].image}`
	p.innerHTML = slides[i].tagLine;
});
