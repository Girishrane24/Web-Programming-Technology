

function getData() {
    //1.create object of XMLHttpRequest
    let xmlhttp = new XMLHttpRequest();
    //2.create callback method 
    xmlhttp.onload = function () {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        // console.log(data);
        let parentEl = document.getElementById("d1");
        for (let i = 0; i < data.length; i++) {

            let newTR = document.createElement("tr");
            newTR.innerHTML = `<td>${data[i].id}</td><td>${data[i].ename}</td><td>${data[i].epost}</td><td>${data[i].salary}</td>`;

            parentEl.appendChild(newTR);
        }

    }
    //   3. create request by using open()
    xmlhttp.open("GET", "http://localhost:8888/employee");
    //4. send request using send()
    xmlhttp.send();
}

// delete data function 
function deleteRecod() {
    let id = document.getElementById("uid").value;
    if (window.confirm(`are you sure to delete record with id:${id}`)) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            window.alert('record deleted successfully');
        };
        xmlhttp.open("DELETE", `http://localhost:8888/employee/${id}`);
        xmlhttp.send();
    }

}

// add data function 
function addData() {
    let empObj = {
        ename: document.getElementById("uname").value,
        epost: document.getElementById("upost").value,
        salary: document.getElementById("usalary").value,
    }
   
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function (){
        window.alert("Record Added successfully");
         document.getElementById("uname").value="";
         document.getElementById("upost").value="";
        document.getElementById("usalary").value="";
    };
    xmlhttp.open("POST","http://localhost:8888/employee");
    xmlhttp.send(JSON.stringify(empObj));
    
}
 let id;
// get request for single record 
function getSingleId(){
     id = document.getElementById("gid").value;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        document.getElementById("nname").value=data.ename;
         document.getElementById("npost").value=data.epost;
        document.getElementById("nsalary").value=data.salary;
    }
    xmlhttp.open("GET",`http://localhost:8888/employee/${id}`);
    xmlhttp.send();
}

// put request method 
function updateRecord(){
    let empObj = {
       ename:  document.getElementById("nname").value,
       epost :  document.getElementById("npost").value,
       salary: document.getElementById("nsalary").value,
    }
   let xmlhttp=new XMLHttpRequest();
   xmlhttp.onload = function(){
     window.alert("Record updated Successfully");
   }
   xmlhttp.open("PUT",`http://localhost:8888/employee/${id}`);
   xmlhttp.send(JSON.stringify(empObj));
}