function checkAvail() {
    console.log("in the function");
    // get entry from that field
    var gid = document.getElementById("groupID").value;
    console.log("value from text box is: " + gid);

    if (gid == "group ID") {
    console.log("in the loop");
        // set "pls enter value" message visible
        document.getElementById("EnterValueError").style.display = "block";
    }

    // at this point, call a server side function to check availability





}