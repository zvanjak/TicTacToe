const boardWidth = 300;
const boardHeight = 300;

function startNewGame(e)
{
    alert("Nova igra!");
}
function whichElement(e)
{
    var targ;

    if (!e) e = window.event;

    if (e.target) {
        targ = e.target;
    }
    else if (e.srcElement) targ = e.srcElement;

    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;

    var tname;
    tname=targ.tagName;
    alert("You clicked on a " + tname + " element.");
}

function userClicked(event)
{
    event = event || window.event;

    var canvas = document.getElementById('canvasOne'),
        x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;

    alert(x + ' ' + y);
}

function drawScreen() {
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    for( i=0; i<3; i++ )
        for( j=0; j<3; j++ )
        {
            context.strokeStyle = "#000000";
            context.lineWidth = 5;
            context.strokeRect(i*100+5, j*100+5, 100, 100);
        }
}

function drawBoard () {
    if (!canvasSupport()) {
        return;
    }
    Debugger.log("Drawing Canvas");

    drawScreen();
}