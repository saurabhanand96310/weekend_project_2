let p1=new Promise((resolve,reject)=>{
    let parentsAgree=false;
    if(parentsAgree){
        resolve("go to goa");
    }else{
        reject("never go");
    }
});

console.log(p1);