<?php
// create connection
$host= 'db.sltmqpztnjyzgiezpzae.supabase.co';
$db = 'postgres';
$user = 'postgres';
$password = 'x#Apple_pi3#x'; 
$port= '5432';

$dsn = "pgsql:host=$host;port=5432;dbname=$db;port=$port";
$pdo = new PDO($dsn, $user, $password);
?>