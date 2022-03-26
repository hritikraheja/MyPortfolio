function copyPhoneNumberToClipBoard(){
    navigator.clipboard.writeText("6398945909");
    var a = document.getElementById('copied_message');
    a.style.display = "block";
    setTimeout(function(){
        a.style.display = "none";
    }, 1300);
}