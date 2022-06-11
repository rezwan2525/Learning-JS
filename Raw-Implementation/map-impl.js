Array.prototype.myMap = function (callback) {
    let finalArr = [];
    for (let i = 0; i< this.length; i = i+1){
        finalArr[i] = callback(this[i], i , this) || this[i];
    }
    return finalArr;
}

const arr = [1,2,3];
const mappedArr = arr.myMap((item)=>item * 2);
console.log(mappedArr);