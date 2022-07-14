const elements = document.querySelectorAll('.cell-main');

const title = document.querySelector('.info__title');

const cell = document.getElementById('element__cell');

const info = document.querySelector('.info');


const infoSymbol = document.getElementById('elementSymbol');
const infoLatinName = document.getElementById('latinName');
const infoAtomicMass = document.getElementById('atomicMass');

const getData = () => {
	const elem = this.event.currentTarget;

	const elemName = elem.querySelector('.name').textContent;
	const elementSymbol = elem.querySelector('.symbol').textContent;
	const latinName = elem.querySelector('.name-lat').textContent;
	const atomicMass = elem.querySelector('.atomic-mass').textContent;

	title.innerText = elemName;

	infoSymbol.innerText = elementSymbol;
	infoLatinName.innerText = latinName;
	infoAtomicMass.innerText = atomicMass;

	window.elemClone.remove();
}
const getCell = () => {
	const elem = this.event.currentTarget;
	window.elemClone = elem.cloneNode(true);
	elemClone.style.cssText = "width: 180px; height: 100px; cursor: default"
	elemClone.querySelector('.symbol').style.cssText = "font-size: 28px";
	elemClone.querySelector('.name-lat').style.cssText = "font-size: 16px";
	elemClone.querySelector('.name').style.cssText = "font-size: 20px";
	elemClone.querySelector('.number').style.cssText = "font-size: 20px";
	elemClone.querySelector('.atomic-mass').style.cssText = "font-size: 16px";
	cell.appendChild(elemClone);
}
const getColour = () => {
	const elemCloneColor = window.getComputedStyle(elemClone).backgroundColor;
	info.style.borderColor = elemCloneColor;
	info.style.boxShadow = `6px 6px 2px 2px ${elemCloneColor}`;
}

elements.forEach(element => {
	element.addEventListener('click', getData)
	element.addEventListener('click', getCell)
	element.addEventListener('click', getColour)

})