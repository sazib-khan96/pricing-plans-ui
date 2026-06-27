

const togggleBtn = document.getElementById('checkbox');
const monthText = document.querySelector(".monthly_text")
const yearText = document.querySelector(".yearly_text")
console.log

function containerToggle (id){
    const container = document.querySelectorAll('.container');
    for(let cont of container){
      cont.style.display = "none"
    }
    document.getElementById(id).style.display = "flex";
}


togggleBtn.addEventListener("change",()=>{

   if(togggleBtn.checked){
     containerToggle('yearly')
     yearText.classList.add("active")
     monthText.classList.add('active')
   }
   else{
    containerToggle("monthly")
    monthText.classList.remove('active')
    yearText.classList.remove("active")
   }
    
})