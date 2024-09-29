//your JS code here. If required.
const timer=document.getElementById("timer");
function currTime() {
	let date=new Date();
	let month=date.getMonth();
	let day=date.getDate();
	let year=date.getFullYear();

	let hour=date.getHours();
	let min=date.getMinutes();
	let sec=date.getSeconds();
	let arrOfTime=convertTime(hour,min,sec)

    for(let i=0;i<=2;i++){
        arrOfTime[i]=addZero(arrOfTime[i]);
    }
     let time= `${arrOfTime[0]}:${arrOfTime[1]}:${arrOfTime[2]} ${arrOfTime[3]}`
	timer.innerText=`${month}/${day}/${year}, ${time}`
}
setInterval(currTime,1000);

function convertTime(hr,min,sec){

    if(hr>12){
        hr=hr-12;
        return [hr, min,sec,"PM"] ;
    } else if(hr==0){
        return [12, min,sec,"AM"] ;
    }
    else if(hr<12){
        return [hr, min,sec,"AM"] ;
    }else if(hr==12){
        return [hr, min,sec,"PM"] ;
    }
   
}

function addZero(k){
if(k<10){
    return "0"+k;
}else{
    return k;
}
}