<!DOCTYPE html>
<?php
if(isset($_GET["type"]))
if($_GET["type"] =="message") $GLOBALS['x'] = true;
else $GLOBALS['x'] = false;
else $GLOBALS['x'] = false;


 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favico.ico">
    <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin:400,500|Raleway" rel="stylesheet">
    <link href="./contact.css" rel="stylesheet" />
    <title>Contact Me</title>
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
        if($GLOBALS['x']) echo "I’m excited to Make New Friends.";
        else echo "I’m excited to learn about your project.";

        ?>
      </div>
      <div class="contact-txt mini" >
        <?php
        if($GLOBALS['x']) echo "Leave me a message and I'll Get Back to You.";
        else echo "Ready to get started?";

        ?>

      </div>

    </div>

    <form  action="submit.php" method="post">
      <div class="black">

      </div>
      <label for="name">Given Name</label>
      <input type="text" name="name" class="input_feild" placeholder="Erwin Smith" onkeyup="joi.valfun(event)">
      <div class="name_error error">

      </div>
      <label for="email">Email</label>
      <input type="email" name="email" class="input_feild" placeholder="Levi.Ackerman@example.com" onkeyup="joi.valfun(event)">
      <div class="email_error error">

      </div>
      <label for="project">

        <?php
        if($GLOBALS['x']) echo "Your Message";
        else echo "Project Details";

        ?></label>
      <textarea name="project" rows="8" cols="3" onkeyup="joi.valfun(event)"></textarea>
      <div class="project_error error">

      </div>
      <button type="submit" id="mybtn" name="submit" class="disabled" disabled>Send</button>
    </form>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="appp.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

    <script src="form_validation.js"></script>
    <script type="text/javascript">


    </script>
<?php include 'entryEmail.php'; ?>
  </body>
</html>
