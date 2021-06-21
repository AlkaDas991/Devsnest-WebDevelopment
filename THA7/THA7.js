/* /* 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
 */

function getProps(obj) {
    for(const prop in obj) {
        console.log(prop);
    }
    console.log('Using Object.keys: ',Object.keys(obj));
}
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log('Answer 1\n');
getProps(student);
/* 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };  */

function delProps(obj) {
    delete obj.rollno;
}
var student1 = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log('\nAnswer 2\n');
console.log('Before delete: ',student1);
delProps(student1);
console.log('After delete: ',student1);

/* 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
 */

console.log('\nAnswer 3\n');
var student3 = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student3).length);
/* 
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];  */

function display(obj) {
    for(let i=0;i<obj.length; i++) {
        for(const prop in obj[i]) {
            console.log(prop,': ',obj[i][prop]);
        }
        console.log('\n');
    }
}
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
console.log('\nAnswer 4\n');
display(library);

/* 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased  */

var cylinder = {
    radius: 0,
    height: 0,
    get getVolume() {
        return (Math.pow(this.radius,2)*this.height*Math.PI).toFixed(4);
    },
    set setRadius(r) {
        this.radius = r;
    },
    set setHeight(h) {
        this.height = h;
    }
}
cylinder.setRadius = 3;
cylinder.setHeight = 4.4;
console.log('Volume Of Cylinder with radius:',cylinder.radius, ' and height:',cylinder.height,' is: ',cylinder.getVolume);
/* 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Steve Jobs', author: 'Walter Isaacson', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
 */ 
var library1 = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Steve Jobs', author: 'Walter Isaacson', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library1.sort(function(a, b) {
    /* see the mdn docs */
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if( x < y) {
        return -1;
    }
    if( x > y ) {
        return 1;
    }
    return 0;
});
console.log(library1);
