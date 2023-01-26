const container = document.querySelector('#container');
for (let i =0 ; i < 16; i++){
    columndiv =document.createElement('div');
    columndiv.setAttribute("id" , "column")
    for (let i = 0 ; i < 16 ; i++){
        rowdiv = document.createElement('div');
        rowdiv.setAttribute("id", "row")
        columndiv.appendChild(rowdiv)
    }
    container.appendChild(columndiv)


}