// 구구단 계산 함수
function calculateMultiplicationTable(inputNumber) {
  if (inputNumber >= 2 && inputNumber <= 9) {
    let output = '';

    for (let i = 1; i <= 9; i++) {
      output += `${inputNumber} * ${i} = ${inputNumber * i}\n`;
    }

    return output;
  } else {
    return '2부터 9까지의 숫자를 입력해주세요.';
  }
}

// 터미널에서 사용자 입력 받기
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('원하는 단 입력 (2부터 9까지): ', (input) => {
  const inputNumber = parseInt(input, 10);

  // 입력값이 숫자인지 확인
  if (!isNaN(inputNumber)) {
    const result = calculateMultiplicationTable(inputNumber);
    console.log(result);
  } else {
    console.log('숫자를 입력해주세요.');
  }

  readline.close();
});
