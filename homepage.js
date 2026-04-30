// for this i want to have the main links just moving around and stuff probably? some sort of randomising (one postcard, one scrap, one magnet that people can click on)


// from small sites homepage

function rotateLinks() {
	let allSpans = document.querySelectorAll('span');
	allSpans.forEach((element) => {
		let randomDeg = Math.random() * 20;
		element.style.transform = `rotate(${randomDeg}deg)`;
	});
}
setInterval(rotateLinks, 500);