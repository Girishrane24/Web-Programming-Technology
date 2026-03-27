
function check(){
    let uid = document.getElementById("userid").value;
    if(uid.trim()===""){
         document.getElementById("errmsg").innerHTML="User id is required";
         document.getElementById("errmsg").style.color="red"
         return false
    }else{
       document.getElementById("errmsg").innerHTML="valid data inserted";
         document.getElementById("errmsg").style.color="green"
         return false 
    }
}
