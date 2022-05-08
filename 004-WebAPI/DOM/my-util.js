function setDivClickChangeBg(id, initColor) {
    let d = document.getElementById(id)
    d.style.backgroundColor = initColor
    d.onclick = function() {
        d.style.backgroundColor = 'red'
    }
 }