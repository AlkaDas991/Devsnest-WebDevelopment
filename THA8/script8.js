let parentDiv = document.createElement('div');
parentDiv.id = 'frame';
for(let i = 1; i <= 400; i++) {
    var childDiv = document.createElement('div');
    childDiv.className = 'box';
    if( i >=128 && i <= 132  ||
        i >= 189 && i<= 192  ||
        i == 148 || i == 168 || 
        i == 188 || i ==208  || 
        i == 228 || i == 152 ||
        i == 172 || i == 212 ||
        i == 232 || i == 252 || i == 272
      ) {
        childDiv.className = 'selected';
    }
    parentDiv.appendChild(childDiv);
}
document.body.appendChild(parentDiv);
/* yaha pe id likhne pe kaam kr rha, class name pe nhi kr rha  */
var elements = document.getElementById("frame").children;
console.log(elements);
var myFunction = function() {
    var childClass = this.className;
    console.log(childClass);
    if( childClass === 'selected') 
        this.className = 'box';
    else if( childClass == 'box')
        this.className = 'selected';
};
for( let i = 0; i< elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
