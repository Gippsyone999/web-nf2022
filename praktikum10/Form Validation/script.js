function registrasi() {
    event.preventDefault
    let sumbit = document.getElementById("username").value;

    if (sumbit == true) {
        location.replace("suxess.html");
        alert("Registrasi Berhasil");
    }  else {
        alert("Registrasi berhasil");
    }

}