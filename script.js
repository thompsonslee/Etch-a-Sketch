const container = document.querySelector('.container');
for (let i =0 ; i < 16; i++){
    columndiv =document.createElement('div');
    columndiv.setAttribute("class" , "column")
    
    for (let i = 0 ; i < 16 ; i++){
        let rowdiv = document.createElement('div')
        rowdiv.addEventListener("mouseover",
        e => e.target.classList.add("hovered"))
        rowdiv.setAttribute("class", "row")
        columndiv.appendChild(rowdiv)
    }
    container.appendChild(columndiv)


}
