const priceInput = document.getElementById("firstInput");
let price, views, progressBar;

priceInput.addEventListener("input", modifySlider);

function inputviewsPriceRelation(inputValue) {
	switch (inputValue) {
		case "2":
			price = "8.00";
			views = "10k";
			progressBar = 0;
			break;
		case "4":
			price = "12.00";
			views = "50k";
			progressBar = 25;
			break;
		case "6":
			price = "16.00";
			views = "100k";
			progressBar = 50;
			break;
		case "8":
			price = "24.00";
			views = "500k";
			progressBar = 75;
			break;
		default:
			price = "36.00";
			views = "1M";
			progressBar = 100;
			break;
	}
}

function modifySlider(event) {
	const inputPrice = document.getElementById("price");
	const inputViews = document.getElementById("views");
	const changeProgressBar = document.getElementById("progressBar");
	inputviewsPriceRelation(event.target.value);
	inputPrice.innerText = "$" + price;
	inputViews.innerText = views;
    changeProgressBar.style.width = progressBar + "%";
	console.dir(event.target);
}
