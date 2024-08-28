const bodyElement = document.querySelector('body');


bodyElement.addEventListener('mousemove', (e) => {
    // console.log(e.offsetY);

    const xPosition = e.offsetX;
    const yPosition = e.offsetY;

    const spanElement = document.createElement('span'); //createElement() 

    spanElement.style.left = xPosition + "px";
    spanElement.style.top = yPosition + "px";

    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
   
    setTimeout(() => {
        spanElement.remove();
    }, 5000);
})
