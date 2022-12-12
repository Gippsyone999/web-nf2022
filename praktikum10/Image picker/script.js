function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "Ronaldo") {
        images.src = "Cr7.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Cr7.jpg";
        alert("Ini adalah gambar Cr7.jpg");
    } else if (picker == "Messi") {
        images.src = "Messi.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Messi.jpg";
        alert("Ini adalah gambar Messi.jpg");
    } else if (picker == "Benzema") {
        images.src = "karim-benzema.jpeg";
        images.width = 300;
        images.alt = "Ini adalah gambar karim-benzema.jpeg";
        alert("Ini adalah gambar karim-benzema.jpeg");
    } else if (picker == "Neymar") {
        images.src = "Neymar.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Neymar.jpg";
        alert("Ini adalah gambar Neymar.jpg");
    } else if (picker == "Beckham") {
        images.src = "beckham.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar beckham.jpg";
        alert("Ini adalah gambar beckham.jpg");
    } else if (picker == "Hazard") {
        images.src = "hazar.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar hazard.jpg";
        alert("Ini adalah gambar hazard.jpg");
    } else if (picker == "Navas") {
        images.src = "navas.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar navas.jpg";
        alert("Ini adalah gambar navas.jpg");
    } else if (picker == "Pogba") {
        images.src = "pogba.jfif";
        images.width = 300;
        images.alt = "Ini adalah gambar pogba.jfif";
        alert("Ini adalah gambar pogba.jfif");
    } else {
        alert("Gagal");
    }
}