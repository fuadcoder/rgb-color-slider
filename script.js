function colors() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value; 
    document.body.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("output").innerHTML = 'rgba(' + red + ','+ green + ',' + blue + ')';
}

