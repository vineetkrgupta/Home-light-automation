const matrix = ['Wake up. Neo...', 'The Matrix has you...', 'Follow the white rabbit...', 'Knock, Knock, Neo.'];
let paragraf = document.querySelector("#typed_text");
document.getElementById("the_matrix").style.display = 'none';

let line = 0;
let letter = 0;
let outhtml = '';

function typeLine() {
    var interval = setTimeout(function() {
        outhtml += matrix[line][letter];
        paragraf.innerText = outhtml;
        letter++;

        if (letter >= matrix[line].length) {
            next_step = 0;
            line++;
            letter = 0;
            outhtml = '';

            if (line == matrix.length) {
                clearTimeout(interval);
                document.getElementById("tt_container").style.display = 'none';
                document.getElementById("the_matrix").style.display = 'block';
                MatrixTextDisplay();
                return true;
            }
        }
        typeLine();
    }, 300);
}

typeLine();

function MatrixTextDisplay() {
    var c = document.getElementById("the_matrix");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //alphabet characters - taken from the unicode charset
    var alphabet = "QWERTYUIOPLKJHGFDSAZXCVBNM田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑qwertyuiopasdfghjklzxcvbnm";
    //converting the string into an array of single characters
    alphabet = alphabet.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            //a random alphabet character to print
            var text = alphabet[Math.floor(Math.random() * alphabet.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}