function makePayment() {
    document.getElementById("successMsg").innerText = "Payment Successful!";


    let id = document.getElementById("sid").value;
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (id === "" || name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    // Generate transaction ID
    let txn = "TXN" + Math.floor(Math.random() * 1000000);

    // Show receipt section
    document.getElementById("receipt").style.display = "block";

    document.getElementById("rId").innerText = "Student ID: " + id;
    document.getElementById("rName").innerText = "Name: " + name;
    document.getElementById("rAmount").innerText = "Amount Paid: ₹" + amount;
    document.getElementById("rTxn").innerText = "Transaction ID: " + txn;

    // Add to payment history
    let history = document.getElementById("historyList");
    let li = document.createElement("li");
    li.innerText = name + " paid ₹" + amount + " (" + txn + ")";
    history.appendChild(li);

    alert("Payment Successful!");
}

function downloadReceipt() {
    alert("Receipt Downloaded (Demo)");
}
// Clear form after payment
document.getElementById("sid").value = "";
document.getElementById("name").value = "";
document.getElementById("amount").value = "";
let now = new Date();
document.getElementById("rTime").innerText =
    "Date & Time: " + now.toLocaleString();
