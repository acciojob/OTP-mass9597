//your JS code here. If required.

const inputs = document.querySelectorAll(".code");

inputs.forEach((input,index) =>{
	input.addEventListener("input",() =>{
		setTimeout(() =>{
			if(input.value !=="" && index < inputs.length-1){
			   inputs[index+1].focus();
		    }
		},0);
		
	});

	input.addEventListener("keydown", (e) =>{
		if(e.key === "Backspace"){
			if(input.value ==="" && index >0){
				inputs[index-1].focus();
				inputs[index-1].value="";
			}
		}
	});
});
