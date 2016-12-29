   function evaluar(){
    var aNum = parseInt(document.getElementById("a").value);
    var bNum = parseInt(document.getElementById("b").value);
    var negative = document.getElementById("negative").value;
    var salida = document.getElementById("salida");
    var isNegative = false;
       if (negative == 1)
           isNegative == true;
       
    if (a < 0 && b > 0 && !isNegative || a > 0 && b < 0 && !isNegative){
        salida.innerHTML = "1";
    }else{
        if(a < 0 && b < 0 && isNegative){
            salida.innerHTML = "1";
        }else{
            salida.innerHTML = "0";
        }
            
    }   
   
}
