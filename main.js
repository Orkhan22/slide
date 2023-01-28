const left=document.querySelector(".left")
const right =document.querySelector(".right")
const slide=document.querySelectorAll(".slick")


let say=1;

function sol(){
    if(say===0){
        say=slide.length
        say--

    }else{
        say--
    }
    slide.forEach((ss,index)=>{
        ss.style.transform=`translateX(${(index-say)*100}%)`
    })

}

sol()

left.addEventListener("click",sol)
say=0
function sag(){
    if(say==slide.length-1){
        say=0
        
    }else{
        say++
    }
    slide.forEach((ss,index)=>{
        ss.style.transform=`translateX(${(index-say)*100}%)`
    })
}
right.addEventListener("click",sag)