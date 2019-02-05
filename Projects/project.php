
<!DOCTYPE html>
<html lang="en" dir="ltr">
<?php
require 'Partials/projects_Objects.php';
require 'Partials/phpflie.php';

if( isset($_GET["project"]) ) {
    $objects = $GLOBALS["objectArray"];
     $name =  $_GET["project"] ;
     $GLOBALS["object"] = NULL;
     $found =false;
     foreach ($objects as $object) {

       if($object->name == $name){

         $GLOBALS["objectx"] = $object;
         $found =true;

       }
     }
     if($found ){} else {exit();}
  } else {exit();
  }




 ?>
 <link rel="icon" type="image/x-icon" href="../favico.ico">

<head>
  <meta charset="utf-8">
  <title>
<?php
echo  $GLOBALS["objectx"]->mainTitle;
 ?>

  </title>
  <link rel="stylesheet" href="gallery/default_skin/default_skin.css">
  <link rel="stylesheet" href="Gulped.css">

  <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin:400,500|Raleway" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>


<body>
  <div id="particles-js">
  </div>
  <div class="all">
    <?php
    $GLOBALS["objectx"]->renderProject();
     ?>
  </div>


  <?php
  $object = $GLOBALS["objectx"];

if(!($object->live)){

  $object->renderSlider();


}


   ?>



  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script src="../appp.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="gallery/Swiper.js"></script>
  <script type="text/javascript">
    $(".read-btn").click(() => {
      $(".desc").removeClass("desc-deactive");
      $(".desc").addClass("desc-active");
      $(".read-btn").addClass("btn-deactive");
      $(".read-btn").removeClass("hvr-bounce-to-bottom");

  });

      <?php
      $object = $GLOBALS["objectx"];

    if(!($object->live)){

    $object->renderSliderScript();


    }


       ?>



  </script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <?php include "../entryEmail.php"; ?>
</body>

</html>
