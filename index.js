// Write your code here!
let elem = document.getElementById('main') ;
elem.parentNode.removeChild(elem);
let newHeader = document.createElement('h1');
newHeader.id='victory';
newHeader.textContent ='YOUR-NAME is the champion';
document.body.appendChild(newHeader);