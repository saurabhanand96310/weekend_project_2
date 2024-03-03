

fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
.then(response => response.json())
.then(data =>{
    console.log(data);
    let table=document.getElementById("table");
    data.forEach(rd=>{
         const row=document.createElement("tr")

         const id=document.createElement("td").textContent=rd.id;
         const name=document.createElement("td").textContent=rd.first_name+rd.last_name;
         const gender=document.createElement("td").textContent=rd.gender;
         const class1=document.createElement("td").textContent=rd.class;
         const marks=document.createElement("td").textContent=rd.marks;
         const passing=document.createElement("td").textContent=rd.passing?"Passed":"Failed";
         const email=document.createElement("td").textContent=rd.email;
       
         row.appendChild(id)
         row.appendChild(name)
         row.appendChild(gender)
         row.appendChild(class1)
         row.appendChild(marks)
         row.appendChild(passing)
         row.appendChild(email)
          
         table.appendChild(row)
    })

})
.catch(error => {
    console.error('Error fetching JSON:', error);
})








let search=document.getElementById("input");
let sortA_Z=document.getElementById("sortA_Z");
let sortZ_A=document.getElementById("sortZ_A");
let sbm=document.getElementById("SBM");
let sbp=document.getElementById("SBP");
let sbc=document.getElementById("SBC");
let sbg=document.getElementById("SBG");


search.addEventListener("click",()=>{
    if(search.value==)
})

sbm.addEventListener("click",()=>{
    
})










