<?php
$a=$_GET['json'];
$b=$_GET['json2'];
$c=$_GET['json3'];

$decoded = unserialize($a);
$decoded2 = unserialize($b);
$decoded3 = unserialize($c);

print_r($decoded);
print_r($decoded2);
print_r($decoded3);
print_r($_COOKIE);
?>

