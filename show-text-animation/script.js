const text = document.getElementsByClassName('text');
const showText = () => {
    for(var i = 0; i < text.length; i++) {
        text[i].classList.toggle('show')
    }
}