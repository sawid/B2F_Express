<?php
include('connect_db.php');
$texts  = $_POST['texts'];
if (strlen((string)$texts) == 0) {
   echo "emptytextbox";
}
else {
   $sql = " INSERT INTO [data_comment]
   ([texts]
    )
    VALUES(
    '$texts'
    ) ";

$stmt = sqlsrv_query($conn, $sql);
if ($stmt === false) {
die(print_r(sqlsrv_errors(), true));
}
echo 'textboxsuccess' ;
}