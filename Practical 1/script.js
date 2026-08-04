function displayData(){

let name=document.getElementById("name").value;
let prn=document.getElementById("prn").value;
let email=document.getElementById("email").value;
let dept=document.getElementById("dept").value;

document.getElementById("output").innerHTML=`

<h3>Student Details</h3>

<p><strong>Student Name :</strong> ${name}</p>

<p><strong>PRN Number :</strong> ${prn}</p>

<p><strong>Email Address :</strong> ${email}</p>

<p><strong>Department :</strong> ${dept}</p>

`;

}

function clearData(){

document.getElementById("name").value="";
document.getElementById("prn").value="";
document.getElementById("email").value="";
document.getElementById("dept").selectedIndex=0;
document.getElementById("output").innerHTML="";

}