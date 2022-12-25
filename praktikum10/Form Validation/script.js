function registrasi() {
    event.preventDefault
    let sumbit = document.getElementById("username").value;
    let time = document.getElementById("time").value;

    if (sumbit == true) {
        location.replace("sucess.html");
        alert("Registrasi Berhasil");
    }  else {
        alert("Registrasi Berhasil");
    }

}