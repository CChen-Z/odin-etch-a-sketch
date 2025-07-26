const container=document.querySelector(".container");
const btn=document.querySelector(".btn");
let rowList=[];
let columnList=[];
createGrid(16);
painting();

btn.addEventListener("click",()=>{
    deleteGrid();
    do{ numberPerSide=parseInt(prompt("Please enter the number of squares per side (max.100)",'10'));
    }while(numberPerSide>100 || numberPerSide<=0);
    createGrid(numberPerSide);
    painting();
})

function createGrid(numberPerSide){
    for(let j=0;j<numberPerSide;j++){
        columnList[j]=document.createElement("div");
        columnList[j].classList="column";
        container.appendChild(columnList[j]);
        for(let i =0;i<numberPerSide;i++){
            rowList[i]=document.createElement("div");
            rowList[i].classList="row";
            columnList[j].appendChild(rowList[i]);
        }
    }
}

function deleteGrid(){
    columnList.length=0;
    rowList.length=0;
    container.innerHTML = "";
}

function painting(){
    const squares = document.querySelectorAll(".column > .row");
    squares.forEach((square)=>{
        square.addEventListener("mouseenter",(e)=>{
            let r=Math.floor(Math.random()*255);
            let g=Math.floor(Math.random()*255);
            let b=Math.floor(Math.random()*255);
            e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
            let currentOpacity = parseFloat(e.target.style.opacity)||1;
            currentOpacity = Math.max(currentOpacity - 0.1, 0.1);
            e.target.style.opacity = currentOpacity;
        });
    })
}