var icr= document.getElementById('icon1'),ic1 = document.getElementById('icon2');
var arry = ["countprag1","countprag2","countprag3","countprag4","countprag5"];
var ash = [4,8,30];
var count = 0,coubt2=0;
 var cler1;
ic1.onmousedown = function(){
    count2=count;
   if(count == 0)
      count = 5;
     count--;
        playlist();
};
icr.onmousedown = function(){
    count2=count;
    if(count == 4)
     count = 1;
     count++; 
     playlist();
};
function playlist(){
    console.log(count);
    document.getElementById(arry[count2]).style.display = "none";
    document.getElementById(arry[count]).style.display = "block";
}

document.getElementById("video-div").onmousedown = function() {
    console.log(1);
   document.getElementById("vid").autoplay= true;
    document.getElementById("vid").load();
   document.getElementById("icpl").style.display = "none";
};
document.getElementById("getstart").onmousedown = function() {
    
   cler1= setInterval(function(){ shdowbox(); 200});
  
};
 function shdowbox (){
     
     console.log(ash[0]);
   document.getElementById("getstart").style.boxShadow = (--ash[0] +"px")  (--ash[1] +"px")  (--ash[2] +"px") +""  ;  
     if(ash[0] <= 0 &&  ash[1] <= 0 && ash[2] <= 0 )
         {
             clearInterval( cler1);
    
         }
 }