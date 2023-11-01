function fun()
{
a=document.getElementById("search1")

if(a.value=="idli")
{
location.href="idli.html"
}
else if(a.value=="dosa")
{
location.href="dosa.html"
}
else if(a.value=="pongal")
{
location.href="pongal.html"
}
else if(a.value=="bisi bele bath")
{
location.href="bisibelebath.html"
}
else if(a.value=="kesari bath")
{
location.href="kesaribath.html"
}
else if(a.value=="south indian thali")
{
location.href="sthali.html"
}
else if(a.value=="chole bhature")
{
location.href="chole.html"
}
else if(a.value=="biryani")
{
location.href="biryani.html"
}
else if(a.value=="tandoori roti")
{
location.href="tandooriroti.html"
}
else if(a.value=="butternaan")
{
location.href="butternaan.html"
}
else if(a.value=="dalmakhni")
{
location.href="dalmakhni.html"
}
else if(a.value=="north indian thali")
{
location.href="nthali.html"
}
else if(a.value=="baby corn manchurian")
{
location.href="bmunchurian.html"
}
else if(a.value=="veg hakka noodles")
{
location.href="noodles.html"
}
else if(a.value=="veg macroni pasta")
{
location.href="pasta.html"
}
else if(a.value=="veg momos")
{
location.href="momos.html"
}
else if(a.value=="italian pizza")
{
location.href="pizza.html"
}
else if(a.value=="veg burger")
{
location.href="burger.html"
}
else if(a.value=="samosa")
{
location.href="samosa.html"
}
else if(a.value=="aloo tikki")
{
location.href="alootikki.html"
}
else if(a.value=="vadapav")
{
location.href="vadapav.html"
}
else if(a.value=="veg frankie")
{
location.href="frankie.html"
}
else if(a.value=="chocolate cake")
{
location.href="cake.html"
}
else if(a.value=="grilled sandwich")
{
location.href="sandwich.html"
}
else if(a.value=="")
{
alert("Please enter the cusine name")
}
else
{
alert("Entered item not available");
}

}


function fun2()

{
if(confirm("Are you sure of ordering the selected item"))
{

if(document.getElementById('upi').checked==true)
{
location.href="upi.html"
}
if(document.getElementById('nb').checked==true)
{
location.href="nb.html"
}
if(document.getElementById('dc').checked==true)
{
location.href="dc.html"
}
}
else
{
alert("Order Cancelled")
}
}

function fun4()
{
city=prompt("Enter your city name")

if(city=="Bengaluru")
{
window.open('order.html','_self')
}

else
{
alert("Service not available in this location")
}
}

function fun5()
{
var a= document.getElementById('password')
var b= document.getElementById('cpassword')
if(b.value==a.value)
{
alert('Successfully signed in')
}
else
{
alert('password and confirm password are not the same')
}
}