const btnDisplay = (event) => {
    event.preventDefault();
    const arr= getArray();
    let hidden=document.getElementById('container-btn');
    if(arr.includes(NaN)){
        alert('Có chứa kí tự không phải số');
    }
    else{
        if (hidden.style.display == 'none')
            hidden.style.display = 'block';
    }
}

const getArray = () => {
    let arr = document.getElementById('input').value;
    return arr.split(",").map(Number);
}

const sumPositive = (event) => {
    event.preventDefault();
    const arr= getArray();
    const sum=arr.filter(num => num>0).reduce((sum, num) => sum + num,0)
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Tổng số dương: ${sum}
        </p>
    `
}

const countPositive = (event) => {
    event.preventDefault();
    const arr= getArray();
    const count=arr.filter(num => num>0)
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Số dương: ${count.length}
        </p>
    `
}

const findMin = (event) =>{
    event.preventDefault();
    const arr= getArray();
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Số nhỏ nhất: ${Math.min(...arr)}
        </p>
    `
}

const findMinPositive = (event) =>{
    event.preventDefault();
    const arr= getArray();
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Số dương nhỏ nhất: ${Math.min(...arr.filter(num => num>0))}
        </p>
    `
}

const findLastPositive = (event) =>{
    event.preventDefault();
    const arr= getArray();
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Số chẵn cuối cùng: ${arr.filter(num => num%2===0).slice(-1)}
        </p>
    `
}

const displayNum = (event) => {
    event.preventDefault();

    let hidden=document.getElementById('container-num');
    if (hidden.style.display == 'none')
        hidden.style.display = 'block';
}

const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

const swapNum = (event) => {
    event.preventDefault();
    let arr= getArray();
    const pos1 = document.getElementById('pos1').value;
    const pos2 = document.getElementById('pos2').value;
    console.log(pos1, pos2);

    swapElements(arr, pos1, pos2);
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Chuỗi sau khi đổi: ${arr}
        </p>
    `
    
}

const sortIncrease = (event) => {
    event.preventDefault()
    const arr= getArray();
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Chuỗi sau khi sắp xếp tăng dần: ${arr.sort(function(a,b) { return a-b})}
        </p>
    `
}

const isPrime = (num) =>{
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}

console.log(isPrime(97))

const findFirstPos = (event) => {
    event.preventDefault();
    const arr = getArray();
    const temp = arr.filter(isPrime)
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Số nguyên tố đầu tiên là: ${temp[0]}
        </p>
    `
}

const countPos = (event) => {
    event.preventDefault();
    const arr = getArray();
    document.getElementById('result').innerHTML=`
        <p class="font-[20px] m-10">
            Có ${arr.filter(num=>Number.isInteger(num)).length} số nguyên
        </p>
    `
}

const countPos_Neg = (event) => {
    event.preventDefault();
    const arr = getArray();
    const temp1= arr.filter(num => num > 0)
    const temp2= arr.filter(num => num < 0)
    if(temp1.length > temp2.length){
        document.getElementById('result').innerHTML=`
            <p class="font-[20px] m-10">
                Có ${temp1.length} số nguyên dương <br>
                Có ${temp2.length} số nguyên âm <br>
                Số dương > Số âm
            </p>
        `
    }
    else{
        document.getElementById('result').innerHTML=`
            <p class="font-[20px] m-10">
                Có ${temp1.length} số nguyên dương <br>
                Có ${temp2.length} số nguyên âm <br>
                Số dương < Số âm
            </p>
        `
    }
    
}