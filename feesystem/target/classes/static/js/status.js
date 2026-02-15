function checkStatus() {

    let id = document.getElementById("studentId").value;
    let result = document.getElementById("statusResult");

    if(id === "") {
        result.style.color = "red";
        result.innerText = "Enter Student ID";
        return;
    }

    result.style.color = "blue";
    result.innerText = "Checking status...";

    setTimeout(() => {
        let paid = Math.random() > 0.5;

        if(paid) {
            result.style.color = "green";
            result.innerText = "Fees Paid ✅";
        } else {
            result.style.color = "red";
            result.innerText = "Fees Pending ❌";
        }
    }, 1000);
}

function checkNoDue() {

    let result = document.getElementById("statusResult");

    result.style.color = "blue";
    result.innerText = "Checking No-Due...";

    setTimeout(() => {
        let cleared = Math.random() > 0.5;

        if(cleared) {
            result.style.color = "green";
            result.innerText = "No-Due Cleared ✅";
        } else {
            result.style.color = "red";
            result.innerText = "No-Due Pending ❌";
        }
    }, 1000);
}