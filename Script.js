//inline block will fill div, zero padding, zero margin
//Function create ROW: 
//Function create Collumn


// @ts-check

let slider = document.querySelector('#myRange');
let output = document.querySelector('#BoxValue');
   output.innerHTML = 'Gridsize: '+ slider.value;

  function createGrid() {
  let grid = document.getElementById("grid");
  let numberOfRows = slider.value;
  let x = numberOfRows * numberOfRows;
    document.documentElement.style.setProperty("--columns-row", numberOfRows);
    for (let i =  0; i < x ; i++) {
      var cell = document.createElement("div");
      cell.className = 'cell'
      document.getElementById("grid").appendChild(cell);
  }
}

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

function color(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


slider.oninput = function(){
  output.innerHTML = 'Gridsize: '+ this.value;
  console.log(slider.value);
  removeAllChildNodes(grid);
  createGrid();
  attachEvents();
};
 
createGrid();
attachEvents();

//All

function attachEvents(){

let cell = document.querySelectorAll('.cell')
.forEach(cell => cell.addEventListener("mouseenter", function(){
    if(cell.className == 'cell') {
        cell.classList.add("cell2");
        cell.classList.remove("cell");
      } else if(cell.classList.contains('cell2')){
        cell.classList.add("cell3");
        cell.classList.remove("cell2");
      } else if(cell.className == 'cell3'){
        cell.classList.add("cell");
        cell.classList.remove("cell3");
      }}));


let reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
  removeAllChildNodes(grid);
  createGrid();
  attachEvents2();
  })

let Rainbow = document.querySelector('.rainbow');
Rainbow.addEventListener('click', function(){
  let cell = grid.children;
  let numberOfRows = slider.value;
  let x = numberOfRows * numberOfRows;
  for(let i=0; i<x; i++){
  cell[i].addEventListener('mouseover', function(){
    cell[i].style.setProperty('background-color', color());
    console.log(color())})}
  });
  
let RGB = document.querySelector('.RGB');
RGB.addEventListener('click', function(){
  let cell = grid.children;
  let numberOfRows = slider.value;
  let x = numberOfRows * numberOfRows;
  let newColor = document.getElementById('colorpicker').value;
  for(let i=0; i<x; i++){
  cell[i].addEventListener('mouseover', function(){
      cell[i].style.setProperty('background-color', newColor)})}
});

};

function attachEvents2(){

  let cell = document.querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener("mouseenter", function(){
      if(cell.className == 'cell') {
          cell.classList.add("cell4");
          cell.classList.remove("cell");
        } else if(cell.classList.contains('cell4')){
          cell.classList.add("cell5");
          cell.classList.remove("cell2");
        } else if(cell.className == 'cell3'){
          cell.classList.add("cell");
          cell.classList.remove("cell3");
        }}));
  
  
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', function(){
    removeAllChildNodes(grid);
    createGrid();
    attachEvents();
    })
  };

