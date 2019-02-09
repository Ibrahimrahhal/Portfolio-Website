<script>

var ip = '<?php
function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
echo getRealIpAddr();
 ?>';
 var link = "http://api.ipstack.com/"+ip+"?access_key=f085c49c37ff1058a10ac797bbb3086d"
axios(link).then((Data) => {
  data = Data.data;
  data.page=document.title;
  data.ref = document.referrer;
  axios.post('https://ibrahimrahhal.herokuapp.com/newvisit',data).then((data) => {});


});

</script>
