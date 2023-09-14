function myChangeBackgroundColor(){
    const width = window.innerWidth;
    const htmlElement = document.querySelector('html');

    if(width >= 1337){
        htmlElement.style.background = '#ffb703';
    }else if(width>= 505 && width<= 1336){
        htmlElement.style.background = '#d90429';
    }else if(width <= 504){
        htmlElement.style.background = '#003049';
    }
}

// call the function on page load and when the widow is resized

window.addEventListener('load', myChangeBackgroundColor);
window.addEventListener('resize', myChangeBackgroundColor)

//Initial call to set the background color

myChangeBackgroundColor();