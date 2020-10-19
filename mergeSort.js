 const mergeSort = array =>{
    //  check if array can b split
     if(array.length < 2) return array;
    //  get middle index
    const middle = Math.floor(array.length/2);
    // split array into two sides;
    let leftSide = array.slice(0,middle);
    let rightSide= array.slice(middle,array.length);
    // use recursion to continue spliting
    return merge(mergeSort(leftSide),mergeSort(rightSide));

 }

 const merge = (left,right)=>{
    //  create new array
    const result = [];
    // check if either left array or right array is empty
    while(left.length && right.length){
        // find lower value
        if(left[0] <= right[0]){
            // add left value
            result.push(left.shift())
        }else{
            // add right value
            result.push(right.shift());
        }
    }
    // marge left array
    while(left.length) result.push(left.shift());
    // marge right array
    while(right.length) result.push(right.shift());
    // return result array
    return result
 }

 console.log(mergeSort([1,6,9,8,7,6,5]));
