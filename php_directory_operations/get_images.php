<?php
/**
 * Created by PhpStorm.
 * User: Lance
 * Date: 30-Sep-16
 * Time: 15:52
 */

$private_collection = glob("images/*.jpg");

//print_r($private_collection);
print(file_exists($private_collection[0]));
//$output;

foreach ($private_collection as $piece){
    echo "<img src='$piece'>";
}

?>