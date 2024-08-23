let bill = document.getElementById('bill');
let people = document.getElementById('people');
let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total-amount');
let errorMessage = document.getElementById('error-message');
let selectedTip = 10;

function selectTip(tip) {
    selectedTip = tip;
    calculate();
}

function calculate() {
    let billValue = parseFloat(bill.value);
    let peopleValue = parseInt(people.value);

    if (peopleValue === 0) {
        errorMessage.style.display = 'block';
        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = '$0.00';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    let tipPerPerson = (billValue * (selectedTip / 100)) / peopleValue;
    let totalPerPerson = (billValue / peopleValue) + tipPerPerson;

    tipAmount.innerHTML = `$${tipPerPerson.toFixed(2)}`;
    totalAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

function reset() {
    bill.value = '';
    people.value = '';
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    selectedTip = 10;
}

bill.addEventListener('input', calculate);
people.addEventListener('input', calculate);
