let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let ngbtn=document.querySelector("#new");
let msgcon=document.querySelector(".msg-contain");
let msg=document.querySelector("#msg");
let turno=true;//playerx,playero;

const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turno)
        {
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwin();
    });
});

const disablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const unablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner =(win) =>
{
    msg.innerText=`congratulaton winner is ${win}`;
     msgcon.classList.remove("hide");
     disablebtn();
};
 
function checkwin() {
    for (let p of winp) {
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
             }
        }

    }

}

const resetgame =()=>
{
    turno=true;
    unablebtn();
    msgcon.classList.add="hide";
}

ngbtn.addEventListener("click",resetgame);
rbtn.addEventListener("click",resetgame);




