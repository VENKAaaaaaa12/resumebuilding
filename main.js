function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadyStateChange=function(){
		if(xhr.readyState=="4" && xhr.status=="200"){
			callback(xhr.responseText);

		}
	}
	xhr.send(null);
}
//json("data.json",function(text){
//	let d=JSON.parse(text);
//	console.log(d);
//	basics(d.basicdetails);
//	carrier(d.carrier);
//	edu(d.education);
//	techskills(d.skills);
//	achivements(d.achivement);
//  description(d.description);
//})
//Fetch API
fetch("data.json")
.then(function(reponse){
	return reponse.json();
})	
.then(function(d){
	console.log(d);
})
var main=document.querySelector(".first");
var l=document.createElement("div");

l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(basic){

var i=document.createElement("img");
i.src= basic.image;
i.alt="profile photo";
l.appendChild(i);	
var nam=document.createElement("h3");
nam.textContent=basic.name;
l.appendChild(nam);

var j=document.createElement("h3");
j.textContent=basic.email;
l.appendChild(j);

var k=document.createElement("h3");
k.textContent=basic.phone;
l.appendChild(k);

var add=document.createElement("h3");
add.textContent=basic.address;
l.appendChild(add);

var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
}

function edu(e){

var e1=document.createElement("div");
e1.classList.add("educa");
r.appendChild(e1);
var head=document.createElement("h2");
head.textContent="Educational Details";
e1.appendChild(head);
head.appendChild (document.createElement("HR"));
}

	for(var i = 0 ; i < e.length ; i++){
		var h=document.createElement("h2");
		h.textContent=e[i].course;
		e1.appendChild(h);
		var u=document.createElement("ul");
		e1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=e[i].college;
		u.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=e[i].percentage;
		list.appendChild(list1);
	}

function techskills(s){
	var  d=document.createElement("div");
	d.textContent="Skills Set";
	r.appendChild(d);
    var tab=document.createElement("table");
	var row="";
	for( var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);

}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	c1.appendChild(para);

}
function achivements(ach){
	var e1=document.createElement("div");
	a.appendChild(e1);
	var f1=document.createElement("f1");
	f1.textContent="achivement";
	e1.appendChild(f1);
	f1.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);

	}
}

function description(des){
	var i1=document.createElement("div");
	b.appendChild(i1);
	var b1=document.createElement("b1");
 	b1.textContent="description";
    i1.appendChild(b1);
    b1.appendChild(document.createElement("HR"));

}





