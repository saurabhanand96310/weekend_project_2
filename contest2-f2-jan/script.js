let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  arr.map((dev) =>{
    if(dev.profession==="developer"){
      console.log(dev);
    }
  })
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
  let newEmp= { id: 4, name: 'saus', age: 23, profession: 'analyst' };
  arr.push(newEmp);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  let remainingEmp =arr.filter((rest)=>{
   return rest.profession !== "admin";
  })
  console.log(remainingEmp);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: 'rahul', age: 19, profession: 'developer' },
    { id: 6, name: 'mukesh', age: 30, profession: 'HR' },
    { id: 7, name: 'ritik', age: 29, profession: 'CEO' },
  ];
  let total=arr.concat(arr1);
  console.log(total);
  
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
