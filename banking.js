// make a function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputAmountText = inputField.value;
    const newInputAmount = parseFloat(newInputAmountText);
    // clear the deposit input field
    inputField.value = '';
    return newInputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const previousTotalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);
    const newTotal = previousTotalAmount + amount;
    totalElement.innerText = newTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }

}



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(newDepositAmount);
    // const newDepositAmount = getInputValue('deposit-input');

    // get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;
    // updateTotalField('deposit-total', newDepositAmount);

    // update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }


    // clear the deposit input field
    // depositInput.value = '';
});

// handle withdraw handle event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log('new value is' + newWithdrawAmount);
    // const newWithdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    // updateTotalField('withdraw-total', newWithdrawAmount);

    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previouseBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previouseBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }


    // // clear withdraw input
    // withdrawInput.value = '';




});