//your JS code here. If required.
function  onClickSubmit(e) {
	e.preventDefault();
	console.log("click");
	let first = document.getElementById("firstName");
	let last = document.getElementById("lastName");
	let phone = document.getElementById("phoneNumber");
	let email = document.getElementById("emailId");
	alert(`First Name: ${first.value} Last Name: ${last.value} Phone Number: ${phone.value} Email ID: ${email.value}`);
}