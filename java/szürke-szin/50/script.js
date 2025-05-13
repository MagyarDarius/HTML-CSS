function createBricks(){
    for(let i = 1; i <= 8; i++){
        let code = `#${i}0${(i*2).toString(16)}000`;
        document.getElementById("bricks").innerHTML += `<div class='brick' style='background-color: ${code}' title='${code}'></div>`;
    }
}
createBricks();