//  linear search

let array=[20,30,40,5,10,22];

function linerSearch(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === elem){
            return i;
        
        }
    }
}

console.log(linerSearch(array,5));