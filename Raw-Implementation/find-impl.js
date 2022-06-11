Array.prototype.myFind = function(callbackFn){
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i , this)){
            return this[i];
        }
    }
    return undefined;
}

const array1 = [5, 12, 8, 130, 44];
const found = array1.myFind(element => element > 1000);
console.log(found);