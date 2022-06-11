Array.prototype.myEvery = function(callbackFn){
    for(let i = 0; i<this.length; i++){
        if(!callbackFn(this[i], i , this)){
            return false;
        }
    }
    return true;
}

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 44, 13];
console.log(array1.every(isBelowThreshold));