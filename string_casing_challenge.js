
var name = prompt("What is your name");
var s = name.slice(0,1);
var uppercase_s = s.toUpperCase();
var restofname = name.slice(1,name.length);
var final_Name = uppercase_s + restofname;
alert("Hello " + final_Name);