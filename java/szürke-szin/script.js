function createCodos(){
    for(let i = 0; i<16;i++){
        let code = "#" + i.toString(16)+ i.toString(16) + i.toString(16);
        document.getElementById("codes").innerHTML += code + " "

    }
}
createCodos();