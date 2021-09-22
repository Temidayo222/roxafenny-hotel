AOS.init();
$(document).ready(function () {
    
})

let myBtn = document.getElementById('myBtnn');


window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none';
    }
};

myBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});