Array.prototype.mySome = function(callbackFn){
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i , this)){
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));