function createTables(){
    for(let i = 0; i< 16;i++){
        let g = i.toString(16);
        for(let j = 0; j < 16;j++){
            let r = j.toString(16);
            document.getElementById("colortable").innerHTML += `<div class='square' style='background-color: #${r}${g}0'></div>`;

        }
        document.getElementById("colortable").innerHTML += "<br>";
    }
    
}
createTables();