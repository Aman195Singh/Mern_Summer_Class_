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
    output.innerText = inputBox.value;
     console.log("output Box :"+outputBox.innerText);
    
})


console.dir(inputBox);
console.dir(output);