document.getElementById("sendMessageBtn").addEventListener("click",()=>SendMessage());

function SendMessage(){
    console.log("oi")
    var phoneNumber = "12999999999";
    var message = "olá gostei muito do seu site";
    var whatsappUrl = "https://api.whatsapp.com/send?phone=";
    var apiUrl = whatsappUrl + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiUrl,"_blank")
}
