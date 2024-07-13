function gridCreation(noOfDivs = 16)
{
    sideLength = width / noOfDivs;
    for(let i = 1; i <= noOfDivs; i++)
    {
        count = noOfDivs;
        const row = document.createElement("div");
        row.setAttribute("class","grid");
        while(count > 0)
        {
            const div = document.createElement("div");
            div.setAttribute("class", "box");
            div.style.width = (sideLength)+"px";
            div.style.height = (sideLength)+"px";
            row.appendChild(div);
            count--;
        }
        row.setAttribute("style", "display:flex;");
        container.appendChild(row);
    }
}

function removeGrid() 
{
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        container.removeChild(grid);
    });    
}

function randomRGB()
{
    return (Math.floor(Math.random() * 256));
}

function hovering()
{
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.background = "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ","+ opaque + "%)";
            if(opaque != 100)
            {
                opaque += 10;
            }
            else
            {
                opaque = 0;
            }
        });
    });
}

let opaque = 0 ;
const width = 960;
const container = document.querySelector(".container");
gridCreation();
hovering();

const btn = document.querySelector("#grid-size");
btn.addEventListener("click", () => {
    const noOfDivsPerSide = parseInt(prompt("Enter the number of squares per side of the grid: (Input must be less than or equal to 100)"));
    removeGrid();
    gridCreation(noOfDivsPerSide);
    hovering();
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.background = "white";
    });
});