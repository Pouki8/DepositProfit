const deposit = document.getElementById("deposit");
const rate = document.getElementById("rate");
const threshold = document.getElementById("threshold");
const result = document.querySelector(".result");

function DepositProfit(deposit, rate, threshold) {
  let i;
  i = 0;
  while (deposit <= threshold) {
    deposit = deposit + (deposit * rate) / 100;
    i++;
  }
  result.innerText = `Le montant sera atteint en ${i} an(s).`;
  return i;
}

calcul.addEventListener("click", () => {
  DepositProfit(
    parseInt(deposit.value),
    parseInt(rate.value),
    parseInt(threshold.value)
  );
});
