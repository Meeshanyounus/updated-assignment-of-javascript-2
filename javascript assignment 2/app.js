//question 1
// function num1(no) {
//     function num2(n) {
//       return n + no;
//     }
//     return num2;
//   }
//   let adding = num1(70);
//   let output = adding(10);  // result will be 15

//   console.log(output)
//--------------OR---------------------
// let input$1 = +prompt("enter no 1");
// let input$2 = +prompt("enter no 2");

// function parent(value1){
//     return function child(value2){
//         console.log(value1 + value2);
        
//     }
// }

// let function_123 = parent(input$1);
// let function_23 = function_123(input$2);
//quesion 2
// let array = [1, 6, 7, 8, 9];
// function searchArray(array, val) {
//     if (array.length === 0) {
//       return false;
//     }
    
//     if (array[0] === val) {
//       return true;
//     } else {
//       return searchArray(array.slice(1), val);
//     }
//   }

//  console.log(searchArray(array, 9));  
//  console.log(searchArray(array, 7));  
  
// question 3
// function addParagh(text) {
//     const para = document.createElement("p");
// para.innerHTML = "hey how are you.";

// document.body.appendChild(para);

//   }
//   addParagh();

// question 4
// function addListItem(text) {
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     const textNode = document.createTextNode(text);
//     li.appendChild(textNode);
//     ul.appendChild(li);
//   }
  

//question 5
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  
//   function changeColor() {
//     const myDiv = document.querySelector('#my-div');
//     changeBackgroundColor(myDiv, 'blue');
//   }
//questiom 6
// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObject = { name: 'John', age: 30 };
//   saveToLocalStorage('myKey', myObject);
//   const savedObject = JSON.parse(localStorage.getItem('myKey'));
 //question 7   
//  function save(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
  
//   function FromLocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return JSON.parse(item);
//   }
  
//   const Object = { name: 'meeshan', age: 16 };
//   save('myKey', Object);
  
//   const retrievedObj = FromLocalStorage('myKey');
//   console.log(retrievedObj); 
  //question 8
  // function saveinLocalStorage(obj) {
    // Loop through the object's properties
  //   for (let property in obj) {
      
  //     localStorage.setItem(property, obj[property]);
  //   }
  
    
  //   let newObj1 = {};
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let property = localStorage.key(i);
  //     let value = localStorage.getItem(property);
  //     newObj1[property] = value;
  //   }
  
  //   return newObj1;
  // }
  // let myObj = { name: "areeba", age: 30, city: "karachi" };
  // let newObj1 = saveinLocalStorage(myObj);
  // console.log(newObj1); 
    




