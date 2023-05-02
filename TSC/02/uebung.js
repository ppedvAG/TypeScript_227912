var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function drawPolygon() {
    var coordInputs = document.querySelectorAll('div#coordinates input');
    console.log('coordInputs :>> ', coordInputs);
    var coordInputs2 = __spreadArray([], coordInputs, true);
    var coord1 = [0, 0];
    var coord2 = [0, 0];
    var coord3 = [0, 0];
    for (var i = 0; i < coordInputs2.length; i++) {
        console.log('schleife');
        (i === 0) ? coord1[0] = +coordInputs2[i].value : 'coord1[0] = 0';
        (i === 1) ? coord1[1] = +coordInputs2[i].value : 'coord1[1] = 0';
        (i === 2) ? coord2[0] = +coordInputs2[i].value : 'coord2[0] = 0';
        (i === 3) ? coord2[1] = +coordInputs2[i].value : 'coord2[1] = 0';
        (i === 4) ? coord3[0] = +coordInputs2[i].value : 'coord3[0] = 0';
        (i === 5) ? coord3[1] = +coordInputs2[i].value : 'coord3[1] = 0';
        console.log('coord1 :>> ', coord1);
        console.log('coord2 :>> ', coord2);
        console.log('coord3 :>> ', coord3);
    }
    var mySVG = document.getElementById('svgForPolygon');
    var htmlString = "\n    <polygon points=\"\n    ".concat(coord1, "\n    ").concat(coord2, "\n    ").concat(coord3, "\n    \" style=\"fill: lime; stroke: purple; stroke-width: 3\" />");
    mySVG.innerHTML = htmlString;
}
document.getElementById('draw').onclick = drawPolygon;
var numb1 = Number('4');
var numb2 = +'4';
