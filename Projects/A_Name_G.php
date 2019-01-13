<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Fake Name Generator</title>
    <link rel="stylesheet" href="project.css">
    <link rel="stylesheet" href="../scrollbar.css">
    <link rel="stylesheet" href="../gallery/index.css">
    <link rel="stylesheet" href="../gallery/default_skin/default_skin.css">
    <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin:400,500|Raleway" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <body>
    <div id="particles-js">
    </div>
    <div class="all">
      <div class="hero" style="background-color:#121212;">
        <div class="img" style="background-image:url('../assets/projects/ang.svg')"
  >

        </div>
      </div>
      <h2 class="proj-name">Arabic Fake Name Generator With API</h2>
      <h4 class="techs">Node js - Express - Angular - Typescript - Css</h4>

      <div class="btns">
        <div class="btn hvr-bounce-to-bottom">
          View Repository
        </div>
        <div class="btn hvr-bounce-to-bottom read-btn">
          Read More
        </div>
        <a class="btn hvr-bounce-to-bottom gallery-btn" href="https://ibrahimrahhal.github.io/AANG_Deploy/" target="_blank">
          View Live Copy
        </a>
      </div>
      <div class="desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>





    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="../appp.js"></script>
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script type="text/javascript">
      $(".read-btn").click(()=>{
        $(".desc").addClass("desc-active");
        $(".read-btn").addClass("btn-deactive");
        $(".read-btn").removeClass("hvr-bounce-to-bottom");

      });

    </script>
  </body>
</html>
