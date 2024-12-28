const inputTitle=document.getElementById("title");
const inputAuthor=document.getElementById("author");
const inputIsbn=document.getElementById("isbn");
const submitbtn=document.getElementById("submit");
const records=document.getElementById("records")
let bookArray=[];
let obj=localStorage.getItem('user')
if(obj!=null){
    bookArray=JSON.parse(obj)
}
Display();
    
        submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
	let titleValue=inputTitle.value;
	let authorValue=inputAuthor.value;
	let isbnValue=inputIsbn.value;
    if(titleValue!='' &&authorValue!=''&& isbnValue!=''){
    bookArray.push({'title':titleValue,'author':authorValue,'isbn':isbnValue})
	console.log(bookArray);
    saveInfo(bookArray);
    titleValue='';
	authorValue='';
	isbnValue='';
} else {
    alert("Please fill all fields.");
  }
})

function saveInfo(bookArray){
let str=JSON.stringify(bookArray);
localStorage.setItem('user',str)
Display();
}

function Display(){
    let statement='';
    bookArray.forEach((book,i) => {
        statement+=`<tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td id="delete" onclick='DeleteInfo(${i})'>X</td>
                    </tr>`
    });
    records.innerHTML=statement;
}

function DeleteInfo(i){
bookArray.splice(i,1);
saveInfo(bookArray);
Display()
}