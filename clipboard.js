function copyToClipBoard() {

    var content = document.getElementById('btn');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}