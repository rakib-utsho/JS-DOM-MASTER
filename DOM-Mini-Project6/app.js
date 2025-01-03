/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code toa disabled input field
 * - copy the hex code from the input field by the copy button
 * - Add a Tost Message Copied
 * - user can type their own hex code too
 */

// Globals
let div = null;

// step 1 - create onload handler
window.onload = () =>{
    main();
}

function main(){

    // step 3 - collect all necessary references
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBTN = document.getElementById('copy-btn');

        // step 4 - handel the change color click event
    btn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    // step 5 - handel the copy click event
    copyBTN.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
        if(div != null){
            div.remove();
            div = null;
        }
        // step 11 - prevent copying hex code if it is not valid
        if(isHexValid(output.value)){
            // step 6 Activate tost message
            generateToastMessage(`${output.value} copied`)
        }else{
            alert('Invalid Color Code')
        }
        
    });

    // step 10 - implement change handler on input field
    output.addEventListener('keyup', function(e){
        const color = e.target.value;
        if(color && isHexValid(color)) {
            root.style.backgroundColor = color;
        }
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
    // step 7 - create dynamic toast message
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
            // step 8 - clear toast message
        div. addEventListener('animationend', function() {
            div.remove();
            div = null;
        });
    });
    document.body.appendChild(div);
}
// step 9 - create isHexValid Function
/**
@param {string} color: ;
*/
function isHexValid(color){
    if(color.length != 7) return false;
    if(color[0] != '#') return false;

    color = color.substring(1);
    // regex object {Regular Expression Object}
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}





