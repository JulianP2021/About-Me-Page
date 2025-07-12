<script setup lang="ts">
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

</script>


<template>
    <div class="container">
        <h2>Contact Julian</h2>
        <p>Want to get in touch with Julian? Here are a few ways to reach him:</p>
        <ul>
            <li>Email: <button @click="sendEmail()"> julian@scharf.am</button></li>
            <li>Phone: +49 152 27549735</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/julian-scharf-1a6572257/">Julian Scharf</a></li>
            <li>GitHub: <a href="https://github.com/JulianP2021">Julian Scharf</a></li>
        </ul>
    </div>
</template>