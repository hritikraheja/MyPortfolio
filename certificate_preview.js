function hideCredential(){
    var d = document.getElementById('pre');
    d.style.display = 'none';
}

function showCredential(url){
    var d = document.getElementById('pre');
    var i = document.getElementById('pre2');
    i.setAttribute('src', url);
    d.style.display = 'block';
}