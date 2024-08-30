<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2; 
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'juanvaldesdavid@gmail.com';
    $mail->Password   = '1006233048';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('juanvaldesdavid@gmail.com', 'Juan David Valdes');
    $mail->addAddress('destinatario@example.com');

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de tu formulario';
    

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['_replyto']);
    $message = htmlspecialchars($_POST['message']);

    $mail->Body    = "<p><strong>Nombre:</strong> $name</p>
                      <p><strong>Email:</strong> $email</p>
                      <p><strong>Mensaje:</strong><br>$message</p>";

    $mail->send();
    echo 'El mensaje ha sido enviado.';
} catch (Exception $e) {
    echo "No se pudo enviar el mensaje. Error: {$mail->ErrorInfo}";
}
?>



