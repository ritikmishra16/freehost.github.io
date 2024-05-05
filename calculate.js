function display(value) {
    document.getElementById("shows").value += value;
}

function clear() {
    document.getElementById("shows").value = '';
}

function show() {

    var x = document.getElementById("shows").value;
    var y = eval(x);
    document.getElementById("shows").value = y;

}

function open() {
    window.open("calculate.html", "__self");
}