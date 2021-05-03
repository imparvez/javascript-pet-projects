function changeColor() {
    document.body.style.backgroundColor = 
    'rgba(' + Math.round(Math.random() * 255 ) + 
    ','  + Math.round(Math.random() * 255 ) + 
    ','  + Math.round(Math.random() * 255 ) + ')';
}