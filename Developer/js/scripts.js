function myFunction() {
   
    let val1 = document.getElementById("cal1").value;
    let val2 = document.getElementById("cal2").value;
    let val3 = document.getElementById("cal3").value;
    let val4 = document.getElementById("cal4").value;
    
 let lol = (document.getElementById("roro").innerHTML=parseFloat(val1)+parseFloat(val2)+parseFloat(val3)+parseFloat(val4))



    if (lol>=90)
 {
       document.getElementById("momo").innerHTML ="A";
     }
  
     else if (lol>=80) {
       document.getElementById("momo").innerHTML = 'B';
     }
     else if (lol>=70) {
       document.getElementById("momo").innerHTML = "C";
     }
     else if (lol>=60) {
       document.getElementById("momo").innerHTML = "D";
     }else{
       
      document.getElementById("momo").innerHTML = "F";
     }

    }


      
     