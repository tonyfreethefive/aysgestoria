<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email']; 
  $message = $_POST['message'];
  
  $text = "Nota: Estos correos son escritos solamente usando el formulario de Contacto del Sitio Web con url: www.aysgestoria.com/pages/contact/";

	$email_subject = $_POST['subject'];

	$email_body = "Ha recibido un mensaje de la web con nombre: $name\n\n".    
                            "Asunto: $email_subject\n\n".
                            "Contenido del Mensaje:\n\n $message\n\n".
                            $text;

                            
  $to = "web-soporte@aysgestoria.com";
  //$forward = "tonyfreethefive@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to, $visitor_email, $email_body);
  //mail($forward, $visitor_email, $email_body);
  // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
?>