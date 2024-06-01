// _______ Functions _________

function myFunction(){
    console.log("wellcom to coding life");
    console.log("I am learning JavaScript!");
}
myFunction(); // function ko cal karni se print hoga !
myFunction(); // agr 2 bar cal karo to 2bar print hoga __ yani jitni bar cal karogi utni bar cal hoga!

function myFunction1(msg){
    console.log(msg);
}
myFunction1("I love JS"); // ham cal mein b likh sakty as tarah

// ________ Arrow Functions _____

const arrowSum = (a, b) => {
       console.log(a + b); // as mein aap koi b math ka kam kar sakty ho !
}
arrowSum(7, 5);


function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count ++;
        }
    }
    console.log(count);
}
countVowels("jamali");


// _________forEach -- Loop in Arrays _________

let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
arr.forEach(function printVal(val){
    console.log(val);
});

let arr1 = [ "Imambux jamali", "Gandakha", "Shahdadkott", "Qubo Saeed Khan", "Kamber", "Larkana"];
arr1.forEach((val, indx, arr1) => {
    console.log(val.toUpperCase(),indx, arr1);
});


let nums = [2, 3, 25, 12, 6, 45, 4, 8, 7];
nums.forEach((num) => {
    console.log(num * num);
});


//______________ Map _________

let nums1 = [ 58, 54, 52, 56, 22, 87, 33, 44,];
nums1.map((val) => {
    console.log(val);
});



let number = [ 22, 20, 10, 30, 52, 65, 32, 15]; 
let newArr = number.map((val) => {
         return val + val; 
})
console.log(newArr);


// __________ Filter ____

let arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let evenArr = arr2.filter((val) => {
    return val % 2 === 0; 
})
console.log(evenArr);


let arro = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let oddArr = arro.filter((val) => {
    return val % 2 !== 0; 
})
console.log(oddArr);


let marks = [ 22, 33, 44, 55, 66, 77, 88];
let toppers = marks.filter((val) => {
    return val > 75;

}); 
console.log(toppers); // 77/88



// __________ Reduce _________

let sub = [ 1, 2, 3, 4, 5, 6, 7, 8];
const subt = sub.reduce((res, curr) => {
    return res + curr; 
});
console.log(subt); // 36


let bigN = [ 11, 22, 33, 44, 55, 66, 77, 88];
const big = bigN.reduce((res,curr) => {
    return res > curr ? res: curr;
}); 
console.log(big); // 88 

let smlN = [ 11, 22, 33, 44, 55, 66, 77, 88];
const small = smlN.reduce((res,curr) => {
    return res < curr ? res: curr;
}); 
console.log(small); // 11




// _________________________ \\


let n = prompt("Enter a Number:");
n = Number(n);  // Convert the input to a number
let arrow = [];  // Correct variable declaration

for (let i = 1; i <= n; i++) {
    arrow[i - 1] = i;
}

console.log(arrow);  // Corrected console.log

let sum = arrow.reduce((ress, curr) => {
    return ress + curr; // as mein kuch b add kar sakty hen jise________ /,  *,  -,  %
});

console.log(sum);
