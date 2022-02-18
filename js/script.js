console.log('click')

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    // inputField.value = '';
    return inputValue;
}

// Calculate Btn Event Handler Add
document.getElementById('calc-btn').addEventListener('click', function() {
    //get income field value and parse to float
    const income = getInputValue('income-field');

    //get food, rent, cloths field value & parse to float
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');
    const totalCost = foodCost + rentCost + clothCost;

    console.log(totalCost);
    if (foodCost > 0 && rentCost > 0 && clothCost > 0 && income > totalCost) {
        const getTotalCost = document.getElementById('total-balance');
        getTotalCost.innerText = totalCost;

        //set balance
        const getCurrentBalance = document.getElementById('current-balance');
        getCurrentBalance.innerText = income - totalCost;
    } else if (totalCost > income) {
        alert("SOrry! Income can't be less than expenses.");
    } else {
        alert('Sorry! Please input a accurate number');
    }
})

document.getElementById('saving-btn').addEventListener('click', function() {
    const saving = getInputValue('saving-field');
    const income = getInputValue('income-field');

    const getsavingField = document.getElementById('saved-amount');
    const savingAmount = (income / 100) * saving;

    const currentBalanceText = document.getElementById('current-balance').innerText;
    const currentBalance = parseFloat(currentBalanceText);

    if (saving > 0 && savingAmount < currentBalance) {
        getsavingField.innerText = savingAmount;

        const remainingBalance = currentBalance - savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    } else if (saving < 0) {
        alert('Please input valid number');
    } else {
        alert('Sorry! Your saving can not be bigger than your current balance');
    }
})