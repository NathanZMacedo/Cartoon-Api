zap = document.getElementById('zap')
zap.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" id="sendMessageBtn">'
document.getElementById("sendMessageBtn").addEventListener("click",()=>SendMessage());


function SendMessage(){
    console.log("oi")
    var phoneNumber = "12999999999";
    var message = "olá gostei muito do seu site";
    var whatsappUrl = "https://api.whatsapp.com/send?phone=";
    var apiUrl = whatsappUrl + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiUrl,"_blank")
}
