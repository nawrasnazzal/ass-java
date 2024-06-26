function convertCurrency(event) {
    event.preventDefault();
    
    const amountInput = document.querySelector('input[name="amount"]');
    const amount = parseFloat(amountInput.value);
    const exchangeType = document.querySelector('select[name="exchange"]').value;
    let result = 0;

    if (isNaN(amount) || amount <= 0) {
        document.querySelector('.result').textContent = "Please enter a valid amount.";
        return;
    }

    if (exchangeType === "dollar") {
        result = amount / 3.5;
    } else if (exchangeType === "dinar") {
        result = amount / 5;
    } else {
        document.querySelector('.result').textContent = "Please select a valid currency.";
        return;
    }

    document.querySelector('.result').textContent = `Converted amount: ${result.toFixed(2)} ${exchangeType === 'dollar' ? 'USD' : 'JOD'}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.exchangeForm').addEventListener('submit', convertCurrency);
});