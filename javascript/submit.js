


 //Validation fails if the input is blank

var button = document.getElementById("btn");

button.addEventListener("click", validate)


function validate(){
	var errors = "";
	errors+= allValidation();
	console.log(errors)
	capLetter($("#name").val());
	errors+= validateEmail();
	errors+= validatePass();
	

	if (errors.length > 0){
		alert(errors);
	}

}

function allValidation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confPass = document.getElementById("confPass").value;
	
	 if (name === "" || email === "" || password === "" || confPass === "") {
	 	return("\nInput is empty!");
	 }else{
	 	return("")
	 }
}



//Name validation

function capLetter(str) {
   var c = "";
   var sep = str.split(" ");

     for(var i = 0; i < sep.length; i++) {
         c+= sep[i].charAt(0).toUpperCase()+sep[i].slice(1)+" ";
}
     c.trim();
     $("#name").val("");
     $("#name").val(c);
}

// Email validation

   function validateEmail() {

	  var email = $("#email").val();

	  var match =  email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ;
	  if(match === null){
	  	return('\nPlease provide a valid email address');
	  }else{
	 	return("")
	 }
}

    


//Password and password confirmation validation.
function validatePass() { 
	var pass = document.getElementById("password").value;
	var con = document.getElementById("confPass").value;

	if(pass !== con){
		return("\nPasswords doesn't match!!!!");
	}else{
	 	return("")
	 }

}
  
  



