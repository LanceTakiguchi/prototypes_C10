<?php
/**
 * Created by PhpStorm.
 * User: Lance
 * Date: 03-Oct-16
 * Time: 18:31
 */


$album = glob("images/*");
$output = [];
$output['success'] = false;
$output['error'] = 'success';
$output['files'] = $album;
print(json_encode($output));
?>