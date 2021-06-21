/*1.  Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True
 */
function is_array(arr) {
    if(Array.isArray(arr))
        return true;
    return false;
}
console.log("ANSWER 1\n");
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log("\n");

/*2. Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
 */
function array_Clone(arr) {
    //We can use return arr.slice(0); no 2nd argument
    const clone = [].concat(arr);
    clone[0] = 10;//Here only cloned part will change not the original array
    return clone;
}
console.log("ANSWER 2\n");
const arr = [1, 2, 4, 0];
console.log(array_Clone(arr));
console.log(array_Clone([1, 2, [4, 0]]));
console.log(arr);
console.log("\n");
/* Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
 */
function first(arr,n) {
    if( n === undefined ) {
        return arr[0];
    }
    if( n <= 0 ) {
        return [];
    }
    return arr.slice(0,n);
}
console.log("ANSWER 3\n");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("\n");

/* 4.Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
 */

function join_arrayElements(arr,separator) {
    return arr.join(separator);
}
myColor = ["Red", "Green", "White", "Black"];
console.log("ANSWER 4\n");
console.log(join_arrayElements(myColor,","));
console.log(join_arrayElements(myColor,"+"));
console.log("\n");

/* Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
 */
function freq_element(arr) {
    var keyValue = {};
    for(let i = 0; i < arr.length; i++) {
        if(!keyValue[arr[i]]) {
            keyValue[arr[i]] = 1;
        }
        else  {
            keyValue[arr[i]]++;
        }
    }
    var item = arr[0];
    var max = keyValue[arr[0]];
    for(const prop in keyValue) {
        if(keyValue.hasOwnProperty(prop)) {
            if(keyValue[prop] > max) {
                item = prop;
                max = keyValue[prop];
            }
        }
    }
    console.log(item + ":",max + " times");
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log("ANSWER 5\n");
freq_element(arr1);
console.log("\n");