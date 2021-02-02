var b1=document.getElementById("ba");
var b2=document.getElementById("bb");
var b3=document.getElementById("bc");
var b4=document.getElementById("bd");
var b5=document.getElementById("be");
var b6=document.getElementById("bf");
var b7=document.getElementById("bg");
var b8=document.getElementById("bh");
var b9=document.getElementById("bi");


b1.addEventListener("click",function()
{
	b1.addEventListener("keypress",function(event)
	{	
		if(event.keyCode==120||event.keyCode==88)
			{
				b1.value="X";
				b1.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b1.value="O";
		 		b1.style.background="blue";
			 }
		 final_check();
	})
})

b2.addEventListener("click",function()
{
	b2.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b2.value="X";
				b2.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b2.value="O";
		 		b2.style.background="blue";
			 }
		 final_check();
	})
})

b3.addEventListener("click",function()
{
	b3.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b3.value="X";
				b3.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b3.value="O";
		 		b3.style.background="blue";
			 }
		final_check();
	})
})

b4.addEventListener("click",function()
{
	b4.addEventListener("keypress",function(event)
	{	
		if(event.keyCode==120||event.keyCode==88)
			{
				b4.value="X";
				b4.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b4.value="O";
		 		b4.style.background="blue";
			 }
		 final_check();
	})
})

b5.addEventListener("click",function()
{
	b5.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b5.value="X";
				b5.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b5.value="O";
		 		b5.style.background="blue";
			 }
		 final_check();
	})
})

b6.addEventListener("click",function()
{
	b6.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b6.value="X";
				b6.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b6.value="O";
		 		b6.style.background="blue";
			 }
		final_check();
	})
})

b7.addEventListener("click",function()
{
	b7.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b7.value="X";
				b7.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b7.value="O";
		 		b7.style.background="blue";
			 }
	final_check();
	})
})

b8.addEventListener("click",function()
{
	b8.addEventListener("keypress",function(event)
	{
		if(event.keyCode==120||event.keyCode==88)
			{
				b8.value="X";
				b8.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b8.value="O";
		 		b8.style.background="blue";
			 }
		 final_check();

	})
})

b9.addEventListener("click",function()
{	
	b9.addEventListener("keypress",function(event)
	{	
		if(event.keyCode==120||event.keyCode==88)
			{
				b9.value="X";
				b9.style.background="yellow";
			}
		 else if(event.keyCode==111||event.keyCode==79)
		 	{
		 		b9.value="O";
		 		b9.style.background="blue";
			 }
		final_check();
	})
})

function check(a,b,c)
{	
	if(a=="X" && b=="X" && c=="X")
		return 1;
	else if(a=="O" && b=="O" && c=="O")
		return 1;
	else 
		return 0;	
}

function final_check()
{
if(check(b1.value,b2.value,b3.value)==1)
{
	b1.value=b2.value=b3.value="*";
	b1.style.background="linear-gradient(to right,black,white)";
	b2.style.background="linear-gradient(to right,black,white)";
	b3.style.background="linear-gradient(to right,black,white)";

}

else if(check(b1.value,b4.value,b7.value)==1)
{
	b1.value=b4.value=b7.value="*";
	b1.style.background="linear-gradient(to right,black,white)";
	b4.style.background="linear-gradient(to right,black,white)";
	b7.style.background="linear-gradient(to right,black,white)";

}

else if(check(b1.value,b5.value,b9.value)==1)
{
	b1.value=b5.value=b9.value="*";
	b1.style.background="linear-gradient(to right,black,white)";
	b5.style.background="linear-gradient(to right,black,white)";
	b9.style.background="linear-gradient(to right,black,white)";

}

else if(check(b2.value,b5.value,b8.value)==1)
{
	b2.value=b5.value=b8.value="*";
	b2.style.background="linear-gradient(to right,black,white)";
	b5.style.background="linear-gradient(to right,black,white)";
	b8.style.background="linear-gradient(to right,black,white)";

}

else if(check(b4.value,b5.value,b6.value)==1)
{
	b4.value=b5.value=b6.value="*";
	b4.style.background="linear-gradient(to right,black,white)";
	b5.style.background="linear-gradient(to right,black,white)";
	b6.style.background="linear-gradient(to right,black,white)";

}

else if(check(b7.value,b8.value,b9.value)==1)
{
	b7.value=b8.value=b9.value="*";
	b7.style.background="linear-gradient(to right,black,white)";
	b8.style.background="linear-gradient(to right,black,white)";
	b9.style.background="linear-gradient(to right,black,white)";

}

else if(check(b3.value,b6.value,b9.value)==1)
{
	b3.value=b6.value=b9.value="*";
	b3.style.background="linear-gradient(to right,black,white)";
	b6.style.background="linear-gradient(to right,black,white)";
	b9.style.background="linear-gradient(to right,black,white)";

}

else if(check(b3.value,b5.value,b7.value)==1)
{
	b3.value=b5.value=b7.value="*";
	b3.style.background="linear-gradient(to right,black,white)";
	b5.style.background="linear-gradient(to right,black,white)";
	b7.style.background="linear-gradient(to right,black,white)";
	b2.style.background="white";
	b1.style.background="white";
	b4.style.background="white";
	b6.style.background="white";
	b8.style.background="white";
	b9.style.background="white";


}









}

