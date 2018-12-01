function checkAvail() {

    // get entry from that field
    var gid = document.getElementById("groupID").value;
    console.log("value from text box is: " + gid);

    if (gid == "group ID") {
        // set "pls enter value" message visible
        document.getElementById("EnterValueError").display = "block";
    }



}