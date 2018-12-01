function checkAvail() {

    // get entry from that field
    var gid = document.getElementbyID("groupID").value;

    if (gid == "group ID") {
        // set "pls enter value" message visible
        document.getElementbyID.display = "block";
    }

    // first step: get the class of a moused over element (and highlight that element)
    var classes = this.getAttribute('class').split(" ");

    // second step: find all other elements, in all other languages, that match that class
    for (i = 0; i < classes.length; i++) {
        var same = document.getElementsByClassName(classes[i])
        for (j = 0; j < same.length; j++) {
            //third step: highlight them!
            same[j].style.backgroundColor='pink';
        }

    }

}