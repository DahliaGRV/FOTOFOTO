
console.log("linked")
document.querySelectorAll(".delete").forEach((deleteBtn)=>{
    deleteBtn.addEventListener("click",e=>{
        e.preventDefault()
        const id = e.target.getAttribute("id")
        fetch(`/api/images/${id}`,{
            method:"DELETE",
        }).then(res=>{
            console.log(res)
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")
            }
        })  
})
})

 
 