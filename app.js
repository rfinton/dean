import { MDCRipple } from '@material/ripple';
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';
import { gsap } from "gsap";

const generateEfcid = () => {
	return 'FUEL-DA' + Math.floor(Math.random() * (999999 - 100000) + 100000);
};

const checkboxes = Array.from(document.querySelectorAll('.mdc-checkbox'));
checkboxes.forEach(e => {
	e = new MDCCheckbox(e);
});

const formfields = Array.from(document.querySelectorAll('mdc-form-field'));
formfields.forEach((e,i) => {
	e = new MDCFormField(e);
	e.input = checkboxes[i];
});

const selectAll = () => {
	Array.from(document.querySelectorAll('section input[type=checkbox]')).forEach(e => {
		e.checked = true;
	});
};

const deselectAll = () => {
	Array.from(document.querySelectorAll('section input[type=checkbox]')).forEach(e => {
		e.checked = false;
	});
};

const cka = document.querySelector('#check-all');
cka.addEventListener('change', function() {
	if (this.checked) {
		selectAll();
	}
	else {
		deselectAll();
	}
});

const buttons = document.querySelectorAll('.mdc-button');
Array.from(buttons).forEach(button => {
	new MDCRipple(button);
});

document.forms[0].addEventListener('submit', function(evt) {
	evt.preventDefault();
	document.querySelector('#efcid').value = generateEfcid();
	document.querySelector('#seed').value = true;
	this.submit();
});