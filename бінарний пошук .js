// Відсортований масив//
 let list = [20,25,30,45,55,66,77,88,99];


 function BinSeart (value, list){

    let first  = 0;
    let last = list.length -1;

    let position = -1;
    let found = false;
    let middle;


    while(found === false && first <= last){
        middle = Math.floor(( first + last )/2);
        if (list[middle]==value)
        {
            found = true;
            position = middle;
        }
        else if (list[middle]>value){
            last = middle -1;
        }
        else
        {
            first = middle +1;
        }
    }
    return position;
 }
 console.log(BinSeart(12,list))

//невідсортований масив//
 let arr = [22,32,11,23,45,43,41,1]
 function BinS(array){

for(let i = 0; i < array.length;i++){
    for(let j = 0; j <(array.length -1-i); j++) {
        if (array[j]>array[j+1]){
            let value = array [j]
            array[j] = array [j+1]
            array[j+1]=value
        }
    }

}
return array
}

 function Binary(array,el){ 
    array = BinS(array)
    let first = 0;
    let last = array.length-1;
    
    while (first<=list){
     let   middle = Math.floor((first+last)/2);
        if(array[middle]===el){
            return middle
            
        }
       else if (array[middle]<el){
        first = middle +1
       }else{
        last = middle -1
       }
        }
        return -1
    }
    console.log(BinS(arr,43))


//бінарний пошук у відсортованому масиві за віком //
let arrOBJ = [
    { name: 'Igor', age: 19 },
    { name: 'Kolya', age: 31 },
    { name: 'Oleg', age: 32 },
    { name: 'Vasya', age: 55 },
  ];
  
  arrOBJ.sort(function (k, b) {
    if (k.age > b.age) {
      return 1;
    }
    if (k.age < b.age) {
      return -1;
    }
    if (k.age == b.age) {
      return 0;
    }
  });
  console.log(arrOBJ);
  let sourch = function (arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.round((right - left) / 2) + left;
      if (num === arr[mid].age) {
        return mid;
      } else if (num < arr[mid].age) {
        right = mid - 1;
      } else if (num > arr[mid].age) {
        left = mid + 1;
      }
    }
    return -1;
  };
  console.log(`Number object: ${sourch(arrOBJ, 32)}`);