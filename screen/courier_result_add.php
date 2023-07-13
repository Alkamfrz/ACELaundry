<?php
include_once('../db_connect_supa.php');
$result = $pdo->query("update orderes set courier = ('$_POST[courier]' WHERE oid = $_POST[id])");
header("location: courier.php");
?>