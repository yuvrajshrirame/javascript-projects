let imgBox = document.getElementById("imgBox");
let QR_Image = document.getElementById("QR_Image");
let QR_Text = document.getElementById("QR_Text");

function generateQR(){
    if(QR_Text.value.length > 0){
        QR_Image.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QR_Text.value;
        imgBox.classList.add("showImage");
    } else {
        QR_Text.classList.add("error");
        setTimeout(() => {
            QR_Text.classList.remove("error");
        }, 1000);
    }
}