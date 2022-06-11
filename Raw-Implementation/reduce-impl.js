Array.prototype.myReduce = function(callbackFn, initialValue){
  if(!this.length && !initialValue){
    throw new TypeError("TypeError: Reduce of empty array with no initial value");
  }
  let lastValue = initialValue?initialValue: this[0];
  for(let i = initialValue?0:1; i<this.length;i++){
    lastValue = callbackFn(lastValue, this[i], i, this);
  }
  return lastValue;
}

const array1 = [1];
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(sumWithInitial);