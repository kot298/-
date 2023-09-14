let dot = `
<div class="dot" id="dot" style="left: 100px; top: 100px;">
100
    </div>
`

let dotNode = document.querySelector(`#dot`);
let pNode = document.querySelector(`#p`);
let mainNode = document.querySelector(`#main`);
let num = 0;

document.addEventListener(`click`, function(event){
    num++
    let X = event.clientX - 18;
    let Y = event.clientY - 18;

    main.innerHTML += `
    <div
        class="dot"
        id="dot" style="left: ${X}px; top: ${Y}px;">
        ${num}
    </div>
    `

    
});