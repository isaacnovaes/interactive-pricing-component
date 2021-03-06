// 10K pageviews  / $8 per month   //2
// 50K pageviews  / $12 per month  //4
// 100K pageviews / $16 per month  //6
// 500k pageviews / $24 per month  //8
// 1M pageviews   / $36 per month  //10

const priceInput = document.getElementById("firstInput");
const discountInput = document.querySelector(".billing-input input");
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

	if (discountInput.checked) {
		price *= 0.75;
		price = price.toFixed(2);
	}
	inputPrice.innerText = "$" + price;
	inputViews.innerText = views;
	changeProgressBar.style.width = progressBar + "%";
}

discountInput.addEventListener("input", discountFunction);

function discountFunction(event) {
	const price = document.getElementById("price");
	let currentPrice = +price.innerText.slice(1);
	if (event.target.checked) {
		currentPrice *= 0.75; // take out 25%
		currentPrice = currentPrice.toFixed(2);
		price.innerText = `$${currentPrice}`;
	} else {
		currentPrice *= 1.33333; // bring the number back to its initial value
		currentPrice = currentPrice.toFixed(2);
		price.innerText = `$${currentPrice}`;
	}

}
