//your JS code here. If required.

const inputs = document.querySelectorAll(".code");

inputs.forEach((input,index) =>{
	input.addEventListener("input",() =>{
		
			if(input.value && !isNaN(input.value)){
				if(index < inputs.length -1){
					inputs[index+1].focus();
				}
				
			}else{
				input.value="";
			}			
				
		
	});

	input.addEventListener("keydown", (e) =>{
		if(e.key === "Backspace"){
			if(input.value ===""){
				if(index >0){
					inputs[index-1].focus();
				}
				
			}
		}else{
			if(input.value.length >=1){
				e.preventDefault();
			}
		}
	});
});
