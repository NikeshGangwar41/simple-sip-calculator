let totalAmount;
let profit;

function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const investmentTenure = parseInt(document.getElementById('investmentTenure').value);
  
    const monthlyRate = (annualRate / 100) / 12;
    const totalMonths = investmentTenure * 12;
    totalAmount = monthlyInvestment * totalMonths; // Assign the value to totalAmount
  
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    profit = (futureValue-totalAmount).toFixed(0);
  
    displayResult(futureValue.toFixed(0));
}

function displayResult(result) {
    document.getElementById('futureValue').textContent = `Expected Amount: ₹${result}`;
    document.getElementById('AmountInvested').textContent = `Amount Invested: ₹${totalAmount}`;
    document.getElementById('WealthGain').textContent = `Wealth Gain: ₹${profit}`;
}
