const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//stock products

var stocks = document.querySelectorAll('.products .stock');
for(let x =0; x <stocks.length; x++) {
	let stock = stocks[x].dataset.stock,
	available= stocks[x].querySelector('qty-available').innerHTML,
	sold = stocks[x].querySelector('.qty-sold').innerHTML,
	percent = sold*100/stock;

	stocks[x].querySelector('.available').style.width = percent + '%';
}

