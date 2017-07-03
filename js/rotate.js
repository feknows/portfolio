var rodaImg = document.getElementById('roda');

rodaImg.onclick = function(){
    var mySrc = rodaImg.getAttribute('src');
    if(mySrc === 'img/q.png'){
        rodaImg.setAttribute('src','img/q2.png');
    } else {
        rodaImg.setAttribute('src','img/q.png');
    }
}
