<?php
include_once('../../db_connect_supa.php');
$result = $pdo->query("insert into orderes (name, pieces, note, date, weight, s_id, lp_p_id) values ('$_POST[name]', '$_POST[telp]')");
header("location: create.php");
?>