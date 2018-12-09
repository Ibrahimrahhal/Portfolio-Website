<?php
/**
 *
 */
class skill
{
  public $skill_img;
  public $skill_title;
  public $skill_level;
  function __construct($skill_title,$skill_img,$skill_level)
  {
    $this->skill_img =$skill_img;
    $this->skill_title =$skill_title;
    $this->skill_level =$skill_level;
  }
}
require 'skills_array.php';

 function renderone($skill)
{
  $templete = "

  <div class=\"skill\">
    <div class=\"skill-img\" style=\"background-image:url('{$skill->skill_img}');\">

    </div>
    <h3 class=\"skill-title\">{$skill->skill_title}</h3>
    <h5 class=\"skill-level\">{$skill->skill_level}</h5>
  </div>

  ";
  echo $templete;
}

 function renderall($skills)
{
foreach ($skills as $skill) {
renderone($skill);
}
}




 ?>
