const p1=document.getElementById("player-1");
const p2=document.getElementById("player-2");
const boxs=document.querySelectorAll(".box");
const messagebox=document.querySelector(".message");

let c1="";
let c2="";
let tem0=true;
const subbtn=document.getElementById("submit");
subbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(p1.value === "" || p2.value === "") {
        alert("Both fields are required");
        return;
    }
    c1=p1.value
    c2=p2.value
    console.log(c1,c2);
    messagebox.innerText=`${c1}, you're up`;
    tem0=false;
    enableBoxs();
})

let winnerPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxs.forEach((box)=>{
box.addEventListener("click", ()=>{
    if(tem0){
         box.innerText="X";
         tem0=false;
         messagebox.innerText=`${c1}, you're up`;
    }else{
         box.innerText="0";
         tem0=true;
         messagebox.innerText=`${c2}, you're up`
    }
   winnerfn();
   
})
})

const disableBoxs=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enableBoxs=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner, tem0)=>{
    if(tem0){
        messagebox.innerText=`${c2} congratulations you won!`
    }else{
        messagebox.innerText=`${c1} congratulations you won!`
    }
    disableBoxs();

}

function winnerfn(){
    for(let pattern of winnerPattern){
        let value1= boxs[pattern[0]].innerText;
        let value2= boxs[pattern[1]].innerText;
        let value3= boxs[pattern[2]].innerText;
        if(value1 != "" && value2!= "" && value3!=""){
            if(value1===value2 && value2===value3){
                // console.log("winner")
                showWinner(value1)
                boxs[pattern[0]].style.backgroundColor="green";
                boxs[pattern[1]].style.backgroundColor="green"
                boxs[pattern[2]].style.backgroundColor="green"
            }
        }
    }
}