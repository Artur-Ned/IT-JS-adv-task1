

function choseFirstElem() { 
    const arrLi = document.getElementsByClassName("item");
    resetStyl();
    for (let i = 0; i < arrLi.length; i++) {
        arrLi[0].style.color = "tomato";
        // console.log(arrLi[i]);        
    }
};

function resetStyl() {
    const arrLi = document.getElementsByClassName("item");
    for (let i = 0; i < arrLi.length; i++) {
        if (arrLi[i].style.color == "tomato") {
            arrLi[i].style.color = "black";
        }       
    }
};
 
function choseLastElem() { 
    const arrLi = document.getElementsByClassName("item");
    resetStyl();    
    for (let i = 0; i < arrLi.length; i++) {
        arrLi[arrLi.length-1].style.color = "tomato";
            // console.log(arrLi[i]);        
    }
};

function choseNextElem() {
    const arrLi = document.getElementsByClassName("item");
        if (arrLi[arrLi.length - 1].style.color == "tomato") {
            arrLi[arrLi.length - 1].style.color = "black";
            arrLi[0].style.color = "tomato";
            return;
    }
    
    for (let i = 0; i < arrLi.length; i++) {
        
        if (arrLi[i].style.color == "tomato") {
            resetStyl();
            // arrLi[i].style.color = "black";
            arrLi[i+1].style.color = "tomato";
            return;
        }  else {arrLi[0].style.color = "tomato";}      
    }
}   
        
function choosPrevElem() {
    const arrLi = document.getElementsByClassName("item");
        if (arrLi[0].style.color == "tomato") {
            arrLi[0].style.color = "black";
            arrLi[arrLi.length - 1].style.color = "tomato";
            return;
    }
    
    for (let i = 0; i < arrLi.length; i++) {
        if (arrLi[i].style.color == "tomato") {
            resetStyl();
            // arrLi[i].style.color = "black";
            arrLi[i-1].style.color = "tomato";
            return;
        }        
    }

}   

function addElem() {
     let inputRef = document.querySelector("#inp");
    let value = inputRef.value; 
    let newItem = document.createElement("li");
          newItem.innerHTML = value;
          document.getElementById("myUL").appendChild(newItem);

}



// {inputRef.addEventListener('blur', foo);

// function foo(event) {
//     let inputRefValue = event.currentTarget.value.length;
//     if (inputRefValue === +inputRef.dataset.length) {
//         remove()
//          console.log("you win");
  
//         return inputRef.classList.add("valid");
      
//     } else inputRef.classList.add("invalid");
//     // let numberOfLength = inputRef.dataset.length;
    
//     console.log("you loos");
//     // inputRef.classList.add("valid");   
     
// }
  
// function remove() {
     
//     inputRef.classList.remove("valid");
//     inputRef.classList.remove("invalid");
//    }
//  }




// function append(form) {
//         if (form.input.value) {
//           var newItem = document.createElement("li");
//           newItem.innerHTML = form.input.value;
//           document.getElementById("myUL").appendChild(newItem);
//         }
//       }


