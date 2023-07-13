<?php
include_once('../../db_connect_supa.php');
$result = $pdo->query("insert into laundry_price_pcs (item, i_price) values ('$_POST[item]', '$_POST[price]')");
header("location: item_price.php");
?>