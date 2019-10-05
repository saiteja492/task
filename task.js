function removeZero(arr){
    if(arr[0]==0){
        arr.shift();
    }
    if(arr[arr.length-1]==0){
        arr.pop()
    }
    return arr;
}

var k=removeZero([0,5,0,9,0,0]);
console.log(k);
var g=removeZero([0,0,1,2,0]);
console.log(g);
var l=removeZero([1,2,3,4,5]);
console.log(l);