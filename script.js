const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function slide() {
    idx++;
    if(idx > img.length - 1) {
        idx = 0;
    }


    imgs.style.transform = `translateX(${- idx * 1440}px)`;
}

setInterval(slide, 6000);

