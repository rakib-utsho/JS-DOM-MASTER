/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code toa disabled input field
 * - copy the hex code from the input field by the copy button
 * - Add a Tost Message Copied
 */

// step 1 - create onload handler
window.onload = () =>{
    main();
}

function main(){

    // step 3 - collect all necessary references
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBTN = document.getElementById('copy');

        // step 4 - handel the change color click event
    btn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    // step 5 - handel the copy click event
    copyBTN.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        // Activate tost message
        generateToastMessage(`${output.value} copied`)
    })
}

// step 2 - random color generator function
function generateHEXColor(){
    // hex = #00000  #ffffff
    // 255, 255, 255 --> #FFFFFF
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg){
    const div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message'

    document.body.appendChild(div);
}