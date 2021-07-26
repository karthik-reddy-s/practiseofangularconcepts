var arr=[];
var size=5;
for(var i=0;i<size;i++){
    arr[i]=prompt("enter the element"+(i+1));

}
console.log(arr);
function secondmax(arr){
    var max=Math.max.apply(null,arr),
    maxi=arr.indexOf(max);
    arr[max]=-infinity;
    var secondMax=Math.max.apply(null,arr);
    return secondMax;

}

