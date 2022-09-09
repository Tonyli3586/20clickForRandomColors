const bb = document.querySelectorAll('button')

const rc = () => {
    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z= Math.floor(Math.random()*255);
    return `rgb(${x}, ${y}, ${z})`;
}

for (let b of bb) {b.addEventListener('click', function(){b.style.backgroundColor= rc()} )}

