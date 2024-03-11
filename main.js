let isDOBopen = false;

let dateofbirth = "";

const settingcog = document.getElementById("icon");

const settingcontent = document.getElementById("setting-conmtent");

const intialTextE1 = document.getElementById("intial-DOB");

const afterTextE2 = document.getElementById("after-DOB");
const dobPreview=document.getElementById("dob-preview")
const dobbtn = document.getElementById("dobbtn")

const dobinput= document.getElementById('dobinput')

const yearE1 = document.getElementById("YEAR")
const mounthE1 = document.getElementById("mounth")
const dayE1 = document.getElementById("day")
const hoursE1 = document.getElementById("hours")

const minuteE1 = document.getElementById("minutes")

const secoundsE1 = document.getElementById("secounds")
const makeTwodigitNumber = (number) =>{
    return number > 9 ? number : `0${number}`
}


const toggleDOb = () => {
  if (isDOBopen) {
    settingcontent.classList.add("hide");
  } else {
    settingcontent.classList.remove("hide");
  }
  isDOBopen = !isDOBopen;

  console.log("toogle" ,isDOBopen);
};
const updateAge =()=>{
    const curentdate = new Date();
    const datediff = curentdate - dateofbirth
    const year = Math.floor(datediff/(1000 * 60 * 60*24 *365));
    const mounth = Math.floor((datediff/(1000 * 60 * 60*24 *365))%12);
    const day = Math.floor((datediff/(1000 * 60 * 60*24 ))%30);
    const hour = Math.floor((datediff/(1000 * 60 * 60))%24);
    const minute = Math.floor(datediff / (1000 * 60)) % 60;
    const secound = Math.floor(datediff/1000)%60;
    

  yearE1.innerHTML =makeTwodigitNumber(year);

  mounthE1.innerHTML =makeTwodigitNumber(mounth);

   dayE1.innerHTML =makeTwodigitNumber(day);

   hoursE1.innerHTML=makeTwodigitNumber(hour);
   secoundsE1.innerHTML=makeTwodigitNumber(secound);
   minuteE1.innerHTML = makeTwodigitNumber(minute);


}

const setdobhaandler = () =>{
    const datestring = dobinput.value;

    dateofbirth = new Date(datestring);

    if (dateofbirth) {
        intialTextE1.classList.add("hide");
        afterTextE2.classList.remove("hide");
        dobPreview.classList.remove("hide")
        updateAge();
        setInterval(()=>updateAge(),1000)
        
    } else {
        afterTextE2.classList.remove("hide");
        intialTextE1.classList.add("hide");
        dobPreview.classList.add("hide")
    }

}

// setdobhaandler();







 



settingcog.addEventListener("click", toggleDOb);

dobbtn.addEventListener("click", setdobhaandler);