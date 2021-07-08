function timerStart() {
    var time = prompt("Enter time in milliseconds (1000 millisecond = 1 second)", 1000)
    document.getElementById("timer").innerHTML = time;
    function text() {
        document.getElementById("timer").innerHTML = time - 1;
    }
    var interval = setInterval(text(), 1);
    setTimeout(function(){
        clearInterval(interval);
        alert("DONE!");
    }, time);
}
function donate() {
    var donate = prompt("Enter the amount you want to donate (in USD)", "$")
    alert("Success! Press Close to finish.")
}
function convert1() {
    var minutes = prompt("Enter time in minutes")
    var result = minutes * 60000
    alert(result)
}
function convert2() {
    var hours = prompt("Enter time in hours")
    var result = hours * 3600000
    alert(result)
}
function sub() {
    alert("Subscribing for $50/hour...")
}