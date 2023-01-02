let prayerRequest = document.querySelector(".prayerRequest");
let prayerRequestForm = document.querySelector(".pleasantry #sendPrayerRequest");
let contactForms = document.querySelector(".contactForms");
let close = document.querySelector(".prayerRequest div a")
let pleasantry = document.querySelector(".pleasantry");
let wrapper = document.querySelector(".wrapper")
let footer = document.querySelector("footer")
let getPrayerRequestForm = ()=> { 
    prayerRequest.style.transform = "scale(1)"
    prayerRequest.style.visibility = "visible"
   prayerRequest.style.position = "fixed"
}
prayerRequestForm.addEventListener("click",getPrayerRequestForm);

let ungetPrayerRequestForm = (e)=> { 
    e.preventDefault;
    prayerRequest.style.transform = "scale(0.1)";
    prayerRequest.style.visibility = "hidden";
    contactForms.style.visibility = "visible";
    pleasantry.style.visibility = "visible";
    wrapper.style.height = "auto"
};
close.addEventListener("click",ungetPrayerRequestForm);