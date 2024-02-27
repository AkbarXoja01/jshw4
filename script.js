let name = prompt("Ismingizni kiriting");
let year = +prompt("Hozirgi yilni kiriting");
let birth = +prompt("Tug'ilgan yilingizni kiriting kiriting");

function getAge(year, birth) {
  return year - birth;
}

console.log(name + ", Yoshingiz " + getAge(year, birth) + "da");

let son = prompt("Qo'ylar sonini kiriting.");
let qoylar = "";

for (let i = 1; i <= son; i++) {
  if (i == 1) {
    qoylar += i + " qo'y ";
  } else {
    qoylar += i + " qo'ylar ";
  }
}

console.log(qoylar);

let raqam = +prompt("Dioganal sonini kiriting");
let box = "";
if (raqam % 2 == 0) {
  raqam = raqam + 1;
}
for (let i = 0; i < raqam; i++) {
  for (let j = 0; j < raqam; j++) {
    if (
      i == j ||
      i == 0 ||
      j == 0 ||
      i == raqam - 1 ||
      j == raqam - 1 ||
      i == raqam - 1 - j
    ) {
      box = box + "🔳";
    } else {
      box += "◻️";
    }
  }
  console.log(box);
  box = "";
}

let value = +prompt("Nechta misol ishlamoqchisiz?");

if (value !== NaN || value !== 0) {
  misol();
}

function misol() {
  for (let i = 0; i < value; i++) {
    let randomNum1 = Math.round(Math.random() * 9 + 1);
    let randomNum2 = Math.round(Math.random() * 9 + 1);

    let symNum = Math.round(Math.random() * 3 + 1);
    let sym = "";

    let userAnswer;
    let correctAnswer;

    if (symNum == 1) {
      sym = "+";
      correctAnswer = randomNum1 + randomNum2;
      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 2) {
      sym = "-";
      correctAnswer = randomNum1 - randomNum2;
      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 3) {
      sym = "*";
      correctAnswer = randomNum1 * randomNum2;
      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 4) {
      sym = "/";
      correctAnswer = randomNum1 / randomNum2;
      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    } else if (symNum == 5) {
      sym = "%";
      correctAnswer = randomNum1 % randomNum2;
      userAnswer = +prompt(randomNum1 + sym + randomNum2);
    }

    if (userAnswer == correctAnswer) {
      console.log("Sizning javobingiz to'g'ri: " + userAnswer);
    } else {
      console.log(
        "Sizning javobingiz hato: " +
          userAnswer +
          " To'g'ri javob: " +
          correctAnswer
      );
    }
  }
}
