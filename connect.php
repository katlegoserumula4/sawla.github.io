<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define your recipient email address
    $recipient_email = "katkilserumza4@gmail.com";

    // Get form data
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate data (you should perform more rigorous validation)
    if (empty($full_name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
    } else {
        // Set the email subject and message
        $subject = "Contact Form Submission from $full_name";
        $email_message = "Name: $full_name\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Message:\n$message";

        // Additional headers
        $headers = "From: $email";

        // Send the email
        if (mail($recipient_email, $subject, $email_message, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again later.";
        }
    }
}
?>
