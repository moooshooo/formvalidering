import swal from "sweetalert2"

const tryMe = document.getElementById("tryMe")
const response = document.getElementById("response")
const responseForm = document.getElementById("responseForm")

tryMe.onclick = (e) => {
    e.preventDefault()
    
    if(response.value === "7") {
        swal.fire({
        title: "Fan va bra!",
        text: "Du kunde inte hålla dig!",
        icon: "success"
        });
    } else {
        swal.fire({
        title: "Du suger!",
        text: "du är en sopa",
        icon: "error"
        });
    }
    responseForm.reset()
}