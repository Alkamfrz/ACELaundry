<?php
include_once('../../db_connect_supa.php');
$result = $pdo->query("insert into orderes (name, pieces, note, date, weight, s_id, lp_p_id) values ('$_POST[name]', '$_POST[pieces]', '$_POST[note]', '$_POST[date]', '$_POST[weight]', '$_POST[s_id]', '$_POST[lp_p_id]')");
header("location: pending.php");
?>