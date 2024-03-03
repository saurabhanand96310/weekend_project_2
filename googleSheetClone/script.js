const container = document.getElementById("container");


let selectedCells=new set();
function handleCellClick(eventDetails, cell){
      if(!eventDetails.ctrlKey && !eventDetails.metaKey ){
           selectedCells.forEach(cell => cell.classList.remove{"cell-selected"})
           selectedCells.clear();
      }

      if(selectedCells.has(cell)){
        cell.classList.remove("cell-selected");
        selectedCells.delete(cell);
      }else{
        cell.classList.add("cell-selected");
        selectedCells.add(cell);
      }

}



function columnIndexToLetter(index){
    return String.fromCharCode(64+index);
}
 
const columnHeaderRow = document.createElement('div')
for(let col=0;col<=26;col++){
    const headerCell=document.createElement('div');
    headerCell.className='cell';
    if(col>0){
        headerCell.textContent = columnIndexToLetter(col);
    }else{
        headerCell.textContent="00 "
    }
    
    columnHeaderRow.append(headerCell);
}
container.append(columnHeaderRow);

for (let row = 1; row <= 20; row++) {
  const rowElement = document.createElement("div");

    const rowHeader=document.createElement('div')
    rowHeader.className='cell'
    rowHeader.textContent=row;
    rowElement.append(rowHeader);
    rowElement.id='row-1'

  for(let col=1;col<=26;col++){
    const cell=document.createElement('div');
    cell.className='cell';
    cell.setAttribute('data-row', row)
    cell.setAttribute('data-col', col)
    cell.contentEditable=true;
    cell.addEventListener("click", (eventDetails) => handleCellClick(eventDetails, cell));
    rowElement.append(cell);

  }
  container.append(rowElement);
}




//bold logic
const boldButton= document.getElementById('bold-button');
boldButton.addEventListener('click', ()=>{
    selectedCells.forEach(cell => {
        if(cell.style.fontStyle ==="italic"){
            cell.style.fontWeight="normal"
        }else{
            cell.style.fontWeight="bold"
        }
        
    })
})


//italic logic
const italicButton=document.getElementById('italic-button');
italicButton.addEventListener('click', ()=>{
    selectedCells.forEach(cell => {
        if(cell.style.fontStyle ==="italic"){
            cell.style.fontStyle="normal"
        }else{
            cell.style.fontStyle="italic";
        }
       
    })
})

//change text color logic

const textColorPicker = document.getElementById('text-color-picker');
textColorPicker.addEventListener("change", ()=>{
    selectedCells.forEach(cell =>{
        cell.style.color=textColorPicker.value;
    })
})


//formula bar(regex )

function getValuesFromRange(range){
    const values=[]
     
}


