

function deleteBucket(){
	const deleteInput = document.querySelector('.delete-bucket-actions__input input')
	const deleteBtn = document.querySelector('.delete-bucket-actions__actions awsui-button:nth-child(2) button')
	
if(deleteBtn){
		deleteInput.value = deleteInput.placeholder 
		deleteBtn.classList.remove("awsui-button-disabled")
		deleteInput.style.backgroundColor = "#defdd4"

		setTimeout(()=>{
			deleteBtn.disabled = false
			deleteBtn.click()
		},1000)

	} 
}

function emptyBucket(){

let emptyInput = document.querySelector('.empty-bucket-actions__input input')
const emptyBtn = document.querySelector('.empty-bucket-actions__submit button')
	
if(emptyInput){
		emptyInput.value = emptyInput.placeholder 
		emptyBtn.classList.remove("awsui-button-disabled")
		emptyInput.style.backgroundColor = "#defdd4"

		setTimeout(()=>{ 
			
			emptyBtn.disabled = false
			emptyBtn.click() 
			console.log("click empty")
		},1000)
 

		setTimeout(()=>{
			existAfterEmptyBtn = document.querySelector('.empty-bucket-details__exit-button')
 
			if(existAfterEmptyBtn){
				existAfterEmptyBtn.click()
			}
		},2000)
setTimeout(()=>{
		document.querySelector('button[data-analytics="deleteButton"]')? 
			document.querySelector('button[data-analytics="deleteButton"]').click() : null	 
document.querySelector('.delete-bucket-actions__input input') ? deleteBucket() : null

		},4000)

}
}


emptyBucket()