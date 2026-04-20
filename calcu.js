var val1=0;
var val2=0;
var op='';
var res=0;
var displayval='';
function getvalue(x)
{   
    displayval=displayval+x;
    if(op!='')
    {
        val2=val2*10+x;
    }
    else
    {
        val1=val1*10+x;  
    }
    document.getElementById('result').innerText=displayval;
    
}
function getoperator(o)
{
    displayval=displayval+o;
    op=o;
    document.getElementById('result').innerText=displayval;

}
function calculate()
{
    if(op=='+')
    {
        res=val1+val2;
    }
    else if(op=='-')
    {
        res=val1-val2;
    }
    else if(op=='X')
    {
        res=val1*val2;
    }
    else if(op=='/')
    {
        res=val1/val2;
    }
    displayval=displayval+"="+res;
    document.getElementById('result').innerText=displayval;
}
function cl()
{
    val1=0;
    val2=0;
    op='';
    res=0;
    displayval='';
    document.getElementById('result').innerText=0;
}
