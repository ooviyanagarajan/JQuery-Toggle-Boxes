$(document).ready(function(){
   
    var count=0;
    $("#b1").click(function(){
        count++;
       if(count%2==0){
        $('div').css("background", "none");
       }else{
        $('div').css("background", "pink");
       }
       
     });
     $("#b2").click(function(){
        count++;
        if(count%2==0){
            $('div').css("border-radius", "0");
        }
        else{
            $('div').css("border-radius", "40px");
        }
      
         
    });
    $("#b3").click(function(){
    
            $('ul').append('<div  style="border:1px solid black;  display:inline-block; height:100px;width: 13%;" >&nbsp</div>')
                
    });

});