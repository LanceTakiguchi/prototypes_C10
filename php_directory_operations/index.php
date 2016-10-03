<!-- ***********
Project Name: Directory Operations
File Name: index.php
Author: Lance Takiguchi
Date: 09/30/2016 Time: 15:23
Objective: Use PHP to manipulate files
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Directory-Operations
 *********** -->
<!doctype html>
<?php
$private_collection = glob("images/*.jpg");
?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title> ALL YOUR FILE ARE BELONG TO US </title>
</head>
<body>
<!-- Feature Set 1 -->
<div id="image_container">
    <?php
        foreach ($private_collection as $piece){
            echo "<img src='$piece'>";
        }
    ?>
</div>
</body>
</html>