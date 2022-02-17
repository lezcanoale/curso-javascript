const btn= document.getElementById("btn");
btn.onclick= function(){
    const pass1 = document.getElementById("password");
    const pass2 = document.getElementById("new-password");
    if (pass1.value===pass2.value){
        alert("Password create correctly");
    }else{
        alert("The passwords are not the same ):");
    }
    
}
