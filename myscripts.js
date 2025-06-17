const Button1 = document.getElementById("btn1");
console.dir(Button1);
const Button2 = document.getElementById("btn2");
console.dir(Button2);

function tradationalFn(){
    console.log(" Tradational function called");
}
const arrowFn = () => {
    console.log("Arrow function called");
}

tradationalFn();
arrowFn();


// ------------------------------------------------------------------------------------------------------------------------------------------


function namePrintFn(){
    console.log("Hello My Name is Aman Singh");
}

// const namePrintFn =()=> {
//     console.log("Hello My Name is Aman Singh");
// }

function loopfrom0to100(){
    for(let i =0 ; i<=100 ;i++){
        console.log(i+",");
    }
}

// const loopfrom0to100 = () => {
//     for(let i =0 ; i<=100 ;i++){
//         console.log(i+",");
//     }
// }

function taskdone(){
    console.log("Task is done ");
}

// const taskdone =() => {
//     console.log("Task is done ");
// }


Button1.addEventListener("click",function(e){
    // console.log("Hello My Name is Aman Singh");
    //  for(let i =0 ; i<=100 ;i++){
    //     console.log(i+",");
    // }
    //  console.log("Task is done ");

    namePrintFn();
    loopfrom0to100();
    taskdone();
});

Button2.addEventListener("click",function(e){
    console.log("Aman Singh");
});



// -------------------------------------------------------------------------------------------------------------------------------------------


const inputBox = document.getElementById("input");
const subBtn = document.getElementById("submit");
const output = document.getElementById("output");


subBtn.addEventListener("click",function(e){
    console.log("Input Box :"+inputBox.value);
    output.innerText = inputBox.value;// to extract the data from  console to "DIV" innerText   .
     console.log("output Box :"+outputBox.innerText);
    
})


console.dir(inputBox);
console.dir(output);// to know the directory 

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

const inBox = document.getElementsByClassName("inputBox");

// if(inBox){
inBox[0].addEventListener("input",function(e){
    // console.log(inBox);
    console.log("INPUT VALUE BY INPUT EVENT : " + e.target.value);
});
inBox[1].addEventListener("change",function(e){
    // console.log(inBox);
    console.log("INPUT VALUE BY CHANGE EVENT : " + e.target.value);
});
// }else{
    // console.warn("no inbox is found.");
// }
console.dir(inBox);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

const ipBx1 =document.getElementsByClassName("ipBx1");
console.dir(ipBx1);
const ipBx2 =document.getElementsByClassName("ipBx2");
console.dir(ipBx2);
const ipBx3 =document.getElementsByClassName("ipBx3");
console.dir(ipBx3);
const outputBox =document.getElementsByClassName("outputBox");
console.dir(outputBox);

ipBx1[0].addEventListener("input",function(e){
    console.log("INPUT VALUE OF ipBx1 BY INPUT EVENT : " + e.target.value);
    outputBox[0].innerText =e.target.value;
})
ipBx2[0].addEventListener("change",function(e){
    console.log("INPUT VALUE OF ipBx2 BY CHANGE EVENT : " +  e.target.value);
   outputBox[1].innerText = e.target.value;
})
ipBx3[0].addEventListener("change",function(e){
    console.log("INPUT VALUE OF ipBx3  BY CHANGE EVENT : " +  e.target.value);
    outputBox[2].innerText = e.target.value;
})