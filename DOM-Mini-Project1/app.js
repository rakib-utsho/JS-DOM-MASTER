/**
 * Project Requirements:
 * - Change the background color by generating random rgb color by clicking a button
 */

// step 1 - create onload handler
window.onload = () =>{
    main();
}

function main(){

    // step 3 - collect all necessary references
    const root = document.getElementById('root');
    const btn = document.getElementById('change-color');

        // step 4 - handel the click event
    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

// step 2 - random color generator function
function generateRGBColor(){
    // min -> rgb(0,0,0), max -> rgb(255,255,255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

