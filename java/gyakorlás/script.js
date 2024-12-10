'use strict';

const box = document.getElementById('box'); //const - olyan váltózót lehet létrehozni, amelyet később nem lehet felülírni. KONSTANSNAK nevezzük.

function colorChanged(event){
    box.style.backgroundColor = event.target.value;
}

function onWidthChanged(event){
    box.style.width = `${ event.target.value}px`; // -> Alt gr + 7
}

function onHeightChanged(event){
    box.style.height = `${ event.target.value}px`;
}

function onBorderRadiusChanged(event){
    box.style.borderRadius = event.target.value;
}

function onContentChanged(event){
    box.innerHTML = event.target.value;
}

function onMainClick(event){
    const translateX = event.clientX - (box.offsetLeft + box.offsetWidth / 2);
    const translateY = event.clientY - (box.offsetTop + box.offsetHeight / 2);
    box.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

function reset(){
    window.location.reload();
}