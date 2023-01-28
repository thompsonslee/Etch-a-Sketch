const container = document.querySelector('.container');
const button = document.getElementById('change-dimensions')
button.addEventListener("click",askuser)
function askuser(){
    let dimensions = parseInt(prompt("Dimensions"))
    if (dimensions > 0 && dimensions < 100){

    

    for (let i =0 ; i < dimensions; i++){
        columndiv =document.createElement('div');
        columndiv.setAttribute("class" , "column")
    
        for (let i = 0 ; i < dimensions ; i++){
            let rowdiv = document.createElement('div')
            rowdiv.addEventListener("mouseover",
            e => e.target.classList.add("hovered"))
            rowdiv.setAttribute("class", "row")
            columndiv.appendChild(rowdiv)
        }
        container.appendChild(columndiv)

        }
    }
}
