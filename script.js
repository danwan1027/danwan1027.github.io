var winningNumbersElement = document.getElementById("winningNumbers");

function checkNumbers() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var number3 = parseInt(document.getElementById("number3").value);

  // 輸入檢查
  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("請輸入有效數字！");
    reset();
    return;
  }

  if (number1 < 1 || number1 > 10 || number2 < 1 || number2 > 10 || number3 < 1 || number3 > 10) {
    alert("數字範圍必須在 1 到 10 之間！");
    reset();
    return;
  }

  if (number1 === number2 || number1 === number3 || number2 === number3) {
    alert("輸入的數字不能重複！");
    reset();
    return;
  }

  // 產生得獎號碼
  var winningNumber1 = Math.floor(Math.random() * 10) + 1;

  do{
    var winningNumber2 = Math.floor(Math.random() * 10) + 1;
  }while(winningNumber2 == winningNumber1);
  
  do{
    var winningNumber3 = Math.floor(Math.random() * 10) + 1;
  }while(winningNumber3 == winningNumber1 || winningNumber3 == winningNumber2);


  // 顯示抽中號碼
  winningNumbersElement.innerHTML = "抽中的號碼：" + winningNumber1 + "，" + winningNumber2 + "，" + winningNumber3;

  // 檢查獎項
  var prize = 0;
  if (number1 === winningNumber1 && number2 === winningNumber2 && number3 === winningNumber3) {
    prize = 1; // 頭獎
  } else if (
    (number1 === winningNumber1 && number2 === winningNumber2) ||
    (number1 === winningNumber1 && number3 === winningNumber3) ||
    (number2 === winningNumber2 && number3 === winningNumber3)
  ) {
    prize = 2; // 貳獎
  } else if (
    number1 === winningNumber1 ||
    number1 === winningNumber2 ||
    number1 === winningNumber3 ||
    number2 === winningNumber1 ||
    number2 === winningNumber2 ||
    number2 === winningNumber3 ||
    number3 === winningNumber1 ||
    number3 === winningNumber2 ||
    number3 === winningNumber3
  ) {
    prize = 3; // 參獎
  }

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (prize > 0) {
    var prizeAmount = getPrizeAmount(prize);
    resultElement.innerHTML = "恭喜您中了" + getPrizeName(prize) + "！獎金金額：" + prizeAmount + "元";
  } else {
    resultElement.innerHTML = "很遺憾，您未中獎。";
  }
}

function getPrizeName(prize) {
  switch (prize) {
    case 1:
      return "頭獎";
    case 2:
      return "貳獎";
    case 3:
      return "參獎";
    default:
      return "";
  }
}

function getPrizeAmount(prize) {
  switch (prize) {
    case 1:
      return 1000;
    case 2:
      return 500;
    case 3:
      return 100;
    default:
      return 0;
  }
}

function reset() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("number3").value = "";
  document.getElementById("result").innerHTML = "";
  winningNumbersElement.innerHTML = "";
}
