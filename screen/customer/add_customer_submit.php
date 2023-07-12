<?php
                    include_once('../../db_connect_supa.php');
                    $result = $pdo->query("insert into member (name, telp) values ('$_POST[name]', '$_POST[telp]')");
                    header("location: customer_list.php");
                    ?>