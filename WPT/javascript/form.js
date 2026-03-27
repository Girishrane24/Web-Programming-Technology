

function checkAll() {

    // let fname = document.getElementById("txtName").value;
    let fname = document.formVal.fname.value;
    let regname = "^[a-zA-Z ]{2,20}$";
    let edu = document.formVal.edu;
    
    if (fname.trim() === "") {
        window.alert("this fiels is required");
        document.getElementById("txtName").focus();
        return false;
    }
    if (!fname.match(regname)) {
        window.alert("FullName must contaon only charcter min2 and max-20");
        document.getElementById("txtName").focus();
        return false;
    }
    if (edu[0].checked == false && edu[1].checked == false && edu[2].checked == false && edu[3].checked == false) {
        window.alert("Please select Your Qualification");
        return false;
    }
}