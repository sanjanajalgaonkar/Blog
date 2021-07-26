const crousel = document.querySelectorAll(".crousel img");

crousel.forEach((elem) => {
	elem.style.display = "none";
});
let i = 0;
setInterval(() => {
	if (i == 0) {
		crousel[i].style.display = "block";
	} else if (i == crousel.length) {
		crousel[i - 1].style.display = "none";
		crousel[0].style.display = "block";
		i = 0;
	} else {
		crousel[i - 1].style.display = "none";
		crousel[i].style.display = "block";
	}

	i++;
}, 2000);
