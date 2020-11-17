
var numbers = document.getElementsByClassName("number");
var his="";
var num="";
var onof = 0;
var res;
var result = document.getElementById("result");
var exp = document.getElementById("history");
var sent = document.getElementById("screen");
sent.scrollRight += sent.scrollWidth;
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
for(var i=0;i<numbers.length;i++)
{
    numbers[i].addEventListener('click',function(){
        // alert("number clicked");
        if(onof==1){

            his = his+this.id;
            num=num+this.id;
            result.innerText=num;
            exp.innerText=his;
            result.scrollLeft=result.scrollWidth;
        }
        // console.log(this.id);
    });
}

var operators = document.getElementsByClassName("operator");
for(var i=0;i<operators.length;i++)
{
    
    operators[i].addEventListener('click',function(){
        if(onof==1){
            if(isNaN(his[his.length-1]) && this.id!='-'){
                his = his.substring(0, his.length - 1);}
            if(exp.innerText!=""){
                his=his+this.id;
                num="";
                exp.innerText=his;
                result.innerText="";
            }
        }
    });
}

var equals = document.getElementById("eq").addEventListener('click',function(){
    console.log("equal");
    exp.innerText=his;
    res = eval(his);
    // var intr = parseInt(num, 10);
    console.log(typeof(res));
    if(isFloat(res))
         result.innerText=res.toFixed(2);
    else
        result.innerText=res;
    // `=${res}`;
    his=`${res}`;
    console.log(his);
    num=`${res}`;
});

var clear= document.getElementById("CE").addEventListener('click',function(){
    exp.innerText="";
    result.innerText="0";
    his = "";
    res="";
    num="";
});

var del = document.getElementById("del").addEventListener('click',function(){
    his = his.substring(0, his.length - 1);
    num = num.substring(0, num.length - 1);
    exp.innerText=his;
    result.innerText=num;

});

document.onkeydown=function(e){
    if((e.keyCode >=106 && e.keyCode<=111) && e.keyCode!=110){
        console.log("entered if 1");
        if(onof==1){
            console.log("entered if 2");
            if(isNaN(his[his.length-1]) && e.key!='-'){
                console.log("enterd if 3");
                his = his.substring(0, his.length - 1);
            }
            if(exp.innerText!=""){
                console.log("entered if 4");
                his=his+e.key;
                console.log(e.key);
                num="";
                exp.innerText=his;
                result.innerText="";
            }
        }
    }
    if (e.keyCode === 13) {
        console.log("equal");
        exp.innerText = his;
        res = eval(his);
        console.log(typeof res);
        if (isFloat(res)) result.innerText = res.toFixed(2);
        else result.innerText = res;
        his = `${res}`;
        console.log(his);
        num = `${res}`;
      } 

    if(e.keyCode==8){
        his = his.substring(0, his.length - 1);
        num = num.substring(0, num.length - 1);
        exp.innerText=his;
        result.innerText=num;
    }
    if(e.keyCode==27){
        exp.innerText="";
        result.innerText="";
        his = "";
        res="";
        num="";
    }
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)||e.keyCode==110){
        if(onof==1){
            his = his+e.key;
            num=num+e.key;
            result.innerText=num;
            exp.innerText=his;
            result.scrollLeft=result.scrollWidth;
        }
    }
        console.log(e.key);
        console.log("ok");
    // if((e.keyCode >=106 && e.keyCode<=111) && e.keyCode!=110){
    //     console.log("entered if 1");
    //     if(onof==1){
    //         console.log("entered if 2");
    //         if(isNaN(his[his.length-1]) && e.key!='-'){
    //             console.log("enterd if 3");
    //             his = his.substring(0, his.length - 1);
    //         }
    //         if(exp.innerText!=""){
    //             console.log("entered if 4");
    //             his=his+e.key;
    //             console.log(e.key);
    //             num="";
    //             exp.innerText=his;
    //             result.innerText="";
    //         }
    //     }
    // }
    // if (e.keyCode === 13) {
    //     console.log("equal");
    //     exp.innerText = his;
    //     res = eval(his);
    //     console.log(typeof res);
    //     if (isFloat(res)) result.innerText = res.toFixed(2);
    //     else result.innerText = res;
    //     his = `${res}`;
    //     console.log(his);
    //     num = `${res}`;
    //   } 
    // if(e.keyCode==16){
    //     console.log("equal");
    //     exp.innerText=his;
    //     res = eval(his);
    //     // var intr = parseInt(num, 10);
    //     console.log(typeof(res));
    //     if(isFloat(res))
    //          result.innerText=res.toFixed(2);
    //     else
    //         result.innerText=res;
    //     // `=${res}`;
    //     his=`${res}`;
    //     console.log(his);
    //     num=`${res}`;
    //     }
};

var on = document.getElementById("ON").addEventListener('click',function(){
    if(result.innerText==""&&onof==0){
        onof=1;
        result.innerText="0";
        his = "";
        res="";
        num="";}
});

var off = document.getElementById("OFF").addEventListener('click',function(){
    onof=0;
    if(result.innerText!=""){
        exp.innerText="";
        result.innerText="";
        his = "";
        res="";
        num="";
    }
});