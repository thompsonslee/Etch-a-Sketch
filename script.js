const container = document.querySelector('.container');
for (let i =0 ; i < 16; i++){
    columndiv =document.createElement('div');
    columndiv.setAttribute("class" , "column")
    for (let i = 0 ; i < 16 ; i++){
        rowdiv = document.createElement('div');
        rowdiv.setAttribute("class", "row")
        columndiv.appendChild(rowdiv)
    }
    container.appendChild(columndiv)


}