let ar = []
let inptel = document.getElementById("input-el")
let inptbtn = document.getElementById("btn-el")
let ulel = document.getElementById("ul-el")
let dlbtn=document.getElementById("btn-dl")
let svbtn=document.getElementById("btn-sv")
let vals=JSON.parse(localStorage.getItem("ar"))
if(vals){
    ar=vals
    submit()
}
inptbtn.addEventListener("click", function () {
    ar.push(inptel.value)
    inptel.value=""
    localStorage.setItem("ar",JSON.stringify(ar))
    submit()
})
dlbtn.addEventListener("dblclick",function () {
    localStorage.clear()
    ar=[]
    submit()
})
svbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        ar.push(tabs[0].url)
        localStorage.setItem("ar",JSON.stringify(ar))
        submit()
    })
})
function submit() {
    let items=""
    for (let i = 0; i < ar.length; i++) {
        items += "<li><a target='_blank' href=' "+ar[i]+"'>" + ar[i] + "</a></li>"
    }
    ulel.innerHTML=items
}
