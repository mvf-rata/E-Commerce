<?php
    $message_sent = false;
    //if email is given and not empty
    if (isset($_POST['email']) && $_POST['email'] != '') {
        //inbuild php email validation
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
            
            //the form
            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];

            //EMail address and body
            $to = 'abc@example.com';
            $body = '';

            $body .='From: '.$name. '\r\n';
            $body .='Email: '.$email. '\r\n';
            $body .='Message: '.$message. '\r\n';
            //sending the mail
            mail($to, $message, $body);

            $message_sent = true;
        }
    }
?>
          