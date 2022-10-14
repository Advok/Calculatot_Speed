// Элементы формы
const lengthInput = document.querySelector('#length-input');
const lengthRange = document.querySelector('#length-range');
const inputs = document.querySelectorAll('input'); // все типы входящих данных

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]'); // тип транспортного средства
const radioBuild = document.querySelectorAll('input[name="build"]'); // тип дорожного покрытия
const radioZooms = document.querySelectorAll('input[name="zooms"]'); // загрузка автомобиля

//// /// Чекбоксы
// const ceilings = document.querySelector('input[name="ceiling"]');
// const walls = document.querySelector('input[name="walls"]');
// const floor = document.querySelector('input[name="floor"]');

const totalSpeedElement = document.querySelector('#total-speed');

// Связка range c тектовым полем, // Слушаем событие input
lengthRange.addEventListener('input', function () {lengthInput.value = lengthRange.value;});
// Связка текстового поля с range
lengthInput.addEventListener('input', function () {lengthRange.value = lengthInput.value; });

// Калькулятор, первичные исходные данные
const numb = 1.8;
const numb2 = 26;

let t1 = 0.3;
t2 = 0.25;
t3 = 0.2;
t4 = 0.1;
t5 = 0.05;
t6 = 0.15;

j1 = 6.3;
j2 = 4.9;
j3 = 3.9;
j4 = 2;
j5 = 1;
j6 = 6.9;

// сам калькулятор // сначала тип ТЗ, затем вид покрытия

function calculate() {
	
	if ((type1.checked) && (doroga1.checked)) {
        totalSpeed = numb * t1 * j1 + Math.sqrt (numb2 * j1 * parseInt(lengthInput.value));
	}if ((type1.checked) && (doroga2.checked)) {
        totalSpeed = numb * t2 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type1.checked) && ( doroga3.checked)) {
        totalSpeed = numb * t3 * j3 + Math.sqrt (numb2 * j3 * parseInt(lengthInput.value));
	}if ((type1.checked ) && ( doroga4.checked)) {
        totalSpeed = numb * t2 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type1.checked) && (doroga5.checked)) {
        totalSpeed = numb * t4 * j4 + Math.sqrt (numb2 * j4 * parseInt(lengthInput.value));
	}if ((type1.checked) && ( doroga6.checked)) {
        totalSpeed = numb * t5 * j5 + Math.sqrt (numb2 * j5 * parseInt(lengthInput.value));
	}

	if ((type2.checked ) && ( doroga1.checked)) {
        totalSpeed = numb * t2 * j6 + Math.sqrt (numb2 * j6 * parseInt(lengthInput.value));
	}	if ((type2.checked) && (doroga2.checked)) {
        totalSpeed = numb * t6 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type2.checked ) && ( doroga3.checked)) {
        totalSpeed = numb * t6 * j3 + Math.sqrt (numb2 * j3 * parseInt(lengthInput.value));
	}if ((type2.checked) && ( doroga4.checked)) {
        totalSpeed = numb * t6 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type2.checked) && (doroga5.checked)) {
        totalSpeed = numb * t4 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type2.checked) && ( doroga6.checked)) {
        totalSpeed = numb * t5 * j5 + Math.sqrt (numb2 * j5 * parseInt(lengthInput.value));
	}
	
	if ((type3.checked) && (doroga1.checked)) {
        totalSpeed = numb * t2 * j6 + Math.sqrt (numb2 * j6 * parseInt(lengthInput.value));
	}if ((type3.checked) && (doroga2.checked)) {
        totalSpeed = numb * t3 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type3.checked) && (doroga3.checked)) {
        totalSpeed = numb * t6 * j3 + Math.sqrt (numb2 * j3 * parseInt(lengthInput.value));
	}if ((type3.checked) && (doroga4.checked)) {
        totalSpeed = numb * t3 * j4 + Math.sqrt (numb2 * j4 * parseInt(lengthInput.value));
	}if ((type3.checked) && (doroga5.checked)) {
        totalSpeed = numb * t4 * j4 + Math.sqrt (numb2 * j4 * parseInt(lengthInput.value));
	}if ((type3.checked) && (doroga6.checked)) {
        totalSpeed = numb * t5 * j5 + Math.sqrt (numb2 * j5 * parseInt(lengthInput.value));
	}

	if ((type4.checked) && (doroga1.checked)) {
        totalSpeed = numb * t2 * j6 + Math.sqrt (numb2 * j6 * parseInt(lengthInput.value));
	}if ((type4.checked) && (doroga2.checked)) {
        totalSpeed = numb * t6 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type4.checked) && (doroga3.checked)) {
        totalSpeed = numb * t6 * j3 + Math.sqrt (numb2 * j3 * parseInt(lengthInput.value));
	}if ((type4.checked) && (doroga4.checked)) {
        totalSpeed = numb * t6 * j2 + Math.sqrt (numb2 * j2 * parseInt(lengthInput.value));
	}if ((type4.checked) && (doroga5.checked)) {
        totalSpeed = numb * t4 * j4 + Math.sqrt (numb2 * j4 * parseInt(lengthInput.value));
	}if ((type4.checked) && (doroga6.checked)) {
        totalSpeed = numb * t5 * j5 + Math.sqrt (numb2 * j5 * parseInt(lengthInput.value));
	}
					
	for (const radio of radioZooms) {
		if (radio.checked) {
			totalSpeed = totalSpeed * parseFloat(radio.value); // скорость *1, * 0.97, *0.94 
		}}
	const formatter = new Intl.NumberFormat('ru');
	totalSpeedElement.innerText = formatter.format(totalSpeed);
}

calculate();

for (const input of inputs) {
	input.addEventListener('input', function () {
		calculate();
	});
}

