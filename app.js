//parseInt에 숫자만 쓰여지지 않은 string값을 넣으면 NaN을 출력!
//하지만 NaN을 typeof로 확인하면 number가 나옴

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log(age)
    console.log("please write a number.")
} else{
    console.log("Thank you for writing your age.")
}