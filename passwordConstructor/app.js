function generatePassword(length, isNumber, isSmall, isCapital, isSymbol) {
    let charset = '';
    let password = '';
  
    // 숫자 포함 여부 확인
    if (isNumber) {
      charset += '0123456789';
    }
  
    // 소문자 포함 여부 확인
    if (isSmall) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    // 대문자 포함 여부 확인
    if (isCapital) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    // 특수문자 포함 여부 확인
    if (isSymbol) {
      charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }
  
    // 비밀번호 생성
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    return password;
}

document.querySelector('.pass_condition input[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    

    //각 버튼에서 사용여부 확인 
    let isNumber = document.querySelector("#number_condition").checked;
    let isSmall = document.querySelector("#small_letter_condition").checked;
    let isCapital = document.querySelector("#capital_letter_condition").checked;
    let isSymbol = document.querySelector("#symbol_condition").checked; 
    let Length = document.querySelector("#number-input").value;

    //예외처리 
    //길이가 0인경우
    //길이는 0보다크지만 체크박스가 모두 false인 경우
    if(Length == 0){
        alert('길이를 입력해주세요')
        return
    }
    //��이가 0보다 크지만 체크박스가 모두 false인 경우
    else if(Length > 0 && isNumber == false && isSmall == false && isCapital == false && isSymbol == false){
        alert('체크박스를 선택해주세요')
        return
    }
    
    console.log(isNumber, isSmall, isCapital, isSymbol, Length)
    console.log(generatePassword(Length, isNumber, isSmall, isCapital, isSymbol))

    let password = generatePassword(Length, isNumber, isSmall, isCapital, isSymbol)
    //결과를 화면에 출력
    document.querySelector('.result p').innerText = password
    
    document.querySelector('#copy').addEventListener('click', (e) => {
      navigator.clipboard.writeText(password)
    })
})




  
  // 사용 예시
//   let length = 8;
//   let isNumber = true;
//   let isSmall = true;
//   let isCapital = true;
//   let isSymbol = true;
  
//   let password = generatePassword(length, isNumber, isSmall, isCapital, isSymbol);
//   console.log('Generated Password:', password);
  