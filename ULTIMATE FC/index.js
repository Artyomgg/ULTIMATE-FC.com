let rotate1 = document.querySelector('.img2rt')
let rotate2 = document.querySelector('.img3rt')
let side = document.querySelector('.side')
let card = document.querySelector('.card')
let btn = document.querySelector('.btn-btn')
let holdn = document.getElementById('name')
let hold = document.querySelector('.holder')
let exp = document.querySelector('#Exp')
let MM = document.querySelector('.mm')
let numberh2 = document.querySelector('.inh2')
let number = document.querySelector('#number')
let cvv = document.querySelector('.auto-h2'),
	cvvInpt = document.querySelector('.CVV'),
	donat = document.querySelector('.button4'),
	donatConteiner = document.querySelector('.donat-pay'),
	inputDonat = document.querySelector('.input input'),
	helpMe = document.querySelector('.button10'),
	thankYou = document.querySelector('.pay-sucefully'),
	cross = document.querySelector('.crossPrem i')

btn.addEventListener('click', function () {
	side.style.filter = 'blur(10px)'
	setTimeout('side.style.filter = "blur(0)";', 2000)
	setTimeout('click()', 1500)
})

function click() {
	hold.textContent = holdn.value
	MM.textContent = exp.value
	numberh2.textContent = number.value
	cvv.textContent = cvvInpt.value
}

rotate1.addEventListener('click', function () {
	card.style.transform = 'rotateY(-180deg)'
})

rotate2.addEventListener('click', function () {
	card.style.transform = 'rotateY(0deg)'
})

btn.addEventListener('click', function getData(e) {
	e.preventDefault()
})

donat.addEventListener('click', () => {
	donatConteiner.style.display = 'block'
	donate()
})

helpMe.addEventListener('click', e => {
	e.preventDefault()
	donatConteiner.style.display = 'none'
	alert('Оплата прошла!')
	setTimeout('opacity()', 500)
})

function donate() {
	if (inputDonat.value == '') {
		alert('Вы не чего не ввели!')
	}
}

function opacity() {
	thankYou.style.display = 'block'
}

cross.addEventListener('click', () => {
	thankYou.style.display = 'none'
})

let preloader = document.querySelector('.preloader')

window.addEventListener(
	'load',
	function () {
		preloader.classList.add('hide')
		this.setTimeout(function () {
			preloader.remove()
		})
	},
	1000
)
