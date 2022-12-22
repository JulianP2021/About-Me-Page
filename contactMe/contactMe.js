function sendEmail() {
	// Compose the email message
	const recipient = "julian@scharf.am";
	const subject = "Conatct Julian";
	const body = ""
		

	// Encode the message as a URI component
	const email = `mailto:${recipient}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;

	// Open the email client with the composed message
	window.location.href = email;
}
