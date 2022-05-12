
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

 
 
// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('delete')) {
//       const id = event.target.getAttribute('delete');
  
//       const response = await fetch(`/api/images/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/libary');
//       } else {
//         alert('Failed to delete image');
//       }
//     }
//   };