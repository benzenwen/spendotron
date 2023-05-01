const windfallInput = document.getElementById("windfall-amount");
const submitButton = document.getElementById("submit-amount");
const suggestionsContainer = document.getElementById("suggestions-container");
const suggestionsList = document.getElementById("suggestions-list");

function generateSpendingOptions(amount) {
  // Here, you can define different categories and their respective ratios based on the amount.
  // This is just an example, and you can customize it as needed.
  const categories = [
    { name: 'Investments', ratio: 0.5 },
    { name: 'Savings', ratio: 0.2 },
    { name: 'Charity', ratio: 0.1 },
    { name: 'Debt Repayment', ratio: 0.1 },
    { name: 'Experiences', ratio: 0.1 }
  ];

  return categories.map(category => ({
    name: category.name,
    amount: (amount * category.ratio).toFixed(2)
  }));
}

submitButton.addEventListener("click", () => {
  const windfallAmount = parseFloat(windfallInput.value);

  if (isNaN(windfallAmount) || windfallAmount < 50 || windfallAmount > 5000000) {
    alert("Please enter a valid amount between $50 and $5,000,000.");
    return;
  }

  const spendingOptions = generateSpendingOptions(windfallAmount);

  suggestionsList.innerHTML = '';
  spendingOptions.forEach(option => {
    const listItem = document.createElement("li");
    listItem.textContent = `${option.name}: $${option.amount
