var seconds = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;
var input= document.getElementsByClassName('tempinput');
var increase=document.getElementsByClassName('barfill');


buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
    // document.getElementById("barfill").style.height = input+'%';
    
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});

function c(classname){
    var i;
    var cs= document.getElementsByClassName(classname);
    // console.log(input[0].value);
    
    increase[0].style.height= input[0].value+"%";
    // console.log(increase[0].style.height.value);
    
    
    // var previ= increase[0].style.height
    var vv= input[0].value;
    
    // for(i=0;i<50;i++){
    //     // console.log("hey");
        
    //      vv= parseInt(vv)+1;
    //    console.log(vv);
    //     setTimeout(()=>increase[0].style.height=vv ,1000);
    //     // increase[0].style.height=vv;
    //     // if(increase[0].style.height=="100%"){
    //     //     break;
    //     // }
    // }
    }
    


function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }
}



// $('#ipval').on('change',function(){
//     var v = $(this).val();
//     $('.stem-perct').css('height',v+'%');
//  });
 
//  $('.stem-perct').css('height',20+'%');
//  $('#ipval').val(20);