

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


let texxID = document.getElementById("inp");
console.log(texxID);

let texxx = document.getElementsByClassName("text-inp");
console.log(texxx);
console.log(texxx.value);



function append(form) {
        if (form.input.value) {
          var newItem = document.createElement("li");
          newItem.innerHTML = form.input.value;
          document.getElementsByClassName("text-inp").appendChild(newItem);
        }
}