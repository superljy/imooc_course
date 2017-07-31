<?php

$host = "182.61.22.59";
$db_user = "root";
$db_pwd = "root";
$db_name = "ky_house";

$link = mysqli_connect($host,$db_user,$db_pwd);
mysqli_select_db($link,$db_name);

if (!$link) {
	echo "connect fail";
}else{
	echo "connect success!";
}


?>