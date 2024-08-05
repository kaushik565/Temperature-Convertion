
function calculate(){
    var num = document.getElementById("numInput").value;
    
        var result=(num-32)*5/9;
        document.getElementById("Output").innerHTML=num +"°F = " +result.toFixed(2)+"°C";
    

}