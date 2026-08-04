function bill(){ 
let prices = [1500,2500,1200,800,2200,900]; 
let total = 0; 
Thank You For Shopping!"; 
document.getElementById("cname").innerHTML = 
document.getElementById("name").value; 
    document.getElementById("cphone").innerHTML = 
    document.getElementById("phone").value; 
 
    document.getElementById("date").innerHTML = 
    new Date().toLocaleDateString(); 
 
    for(let i=1;i<=6;i++){ 
        let qty = Number(document.getElementById("q"+i).value); 
        let amount = qty * prices[i-1]; 
        document.getElementById("qq"+i).innerHTML = qty; 
 
        document.getElementById("a"+i).innerHTML = "₹" + amount; 
        total += amount; 
    } 
    let discount = 0; 
    if(document.getElementById("coupon").value.trim().toUpperCase() == "SAVE10"){ 
        discount = total * 0.10; 
    } 
    total = total - discount; 
    document.getElementById("discount").innerHTML = "₹" + discount; 
    document.getElementById("total").innerHTML = "₹" + total; 
    document.getElementById("msg").innerHTML = 
    "              Thank You For Shopping! Visit Again."; 
} 
