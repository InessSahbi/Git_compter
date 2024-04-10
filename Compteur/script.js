var btp,btm,nb
btm=document.getElementById("btmoins")
btp=document.getElementById("btplus")
nb=document.getElementById("nb")
cpt=parseInt(nb.innerHTML)

btp.addEventListener("click",()=>{
    cpt++
    nb.innerHTML=cpt
})
btm.addEventListener("click",()=>{
    cpt--
    nb.innerHTML=cpt
})
