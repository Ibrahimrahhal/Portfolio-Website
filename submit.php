<!DOCTYPE html>
<?php
if(isset($_POST["submit"])){
$GLOBALS['x'] = true;
$servername = "shareddb-k.hosting.stackcp.net";
$username = "Emails-39375fdf";
$password = "730jh9op5p";
$dbname = "Emails-39375fdf";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO Messages (Name, Email, MESSAGE)
VALUES ('{$_POST["name"]}', '{$_POST["email"]}', '{$_POST["project"]}')";
// echo "<script>console.log('{$_POST["project"]}')</script>";
if (mysqli_query($conn, $sql)) {
  $GLOBALS['xx'] = true;

}

mysqli_close($conn);
}
else{ $GLOBALS['x'] = false;}



 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favico.ico">
    <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin:400,500|Raleway" rel="stylesheet">
    <link href="./contact.css" rel="stylesheet" />
    <title>Submit</title>
  </head>
  <body>
    <div id="particles-js">
    </div>
    <div class="no_support">
Your Screen Size is Not Suppoted
    </div>
    <div class="everything">
      <div class="full-page-hero">
      <div class="circle">

      </div>
      <div class="contact-txt">
        <?php
        if($GLOBALS['x'] && $GLOBALS['xx'] ) echo "Your Record Has Been Saved";
        else echo "Error Has Occured";

        ?>
      </div>
      <div class="contact-txt mini" >
        <?php
        if($GLOBALS['xx'] ) echo "Thank You very much";
        else echo "Database Connection Error";

        ?>

      </div>

    </div>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="appp.js"></script>
  </body>
</html>
