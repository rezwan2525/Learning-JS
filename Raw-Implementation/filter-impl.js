Array.prototype.myFilter = function(callbackFn){
    const finalArr = [];
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i , this)){
            finalArr.push(this[i]);
        }
    }
    return finalArr;
}


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log(result);