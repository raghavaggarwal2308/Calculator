
var numbers = document.getElementsByClassName("number");
var his="";
var num="";
var result = document.getElementById("result");
var exp = document.getElementById("history");
for(var i=0;i<numbers.length;i++)
{
    numbers[i].addEventListener('click',function(){
        // alert("number clicked");
        his = his+this.id;
        num=num+this.id;
        result.innerText=num;
        exp.innerText=his;
        // console.log(this.id);
    });
}

var operators = document.getElementsByClassName("operator");
for(var i=0;i<operators.length;i++)
{
    operators[i].addEventListener('click',function(){
        // alert("number clicked");
        his=his+this.id;
        num="";
        exp.innerText=his;
        // console.log(this.id);
    });
}

var equals = document.getElementById("eq").addEventListener('click',function(){
    console.log("equal");
    exp.innerText=his;
    res = eval(his);
    result.innerText=`=${res}`;
    his=res;
});

var clear= document.getElementById("CE").addEventListener('click',function(){
    exp.innerText="";
    result.innerText="";
    his = "";
    res="";
});

var del = document.getElementById("del").addEventListener('click',function(){
    his = his.substring(0, his.length - 1);
    exp.innerText=his;
    result.innerText="";
});

var on = document.getElementById("ON").addEventListener('click',function(){
    if(result.innerText=="")
        result.innerText="Welcome";
        his = "";
        res="";
});

var off = document.getElementById("OFF").addEventListener('click',function(){
    if(result.innerText!=""){
        exp.innerText="";
        result.innerText="";
        his = "";
        res="";
    }
});