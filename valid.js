
function checkForm(){
	if(document.getElementById('name').value == ""){
		alert('first name is required');
		return false;
	}else if(document.getElementById('lastname').value== ""){
		alert('last name is required');
		return false;
	}else if(document.getElementById('email').value==""){
		alert('enter a valid email address');
		return false;
	}else if(document.getElementById('text').value == ""){
		alert("you must enter a message");
		return false;
	}
}

/*If have order #, order # field is required (if else statement?)*/
