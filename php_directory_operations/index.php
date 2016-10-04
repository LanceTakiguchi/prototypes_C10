<!-- ***********
Project Name: php_directory_operations
File Name: index.html
Author: Lance Takiguchi
Date: 10/03/2016 Time: 18:07
Objective: Get used to accessing directories with PHP
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Directory-Operations
 *********** -->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title> Help me I'm scared! </title>
</head>
<body>
<!--Feature Set 1-->
<div>
    <?php
    $album = glob("images/*");
    foreach ($album as $photo){
        echo "<img src='$photo''>";
    }
    ?>
</div>
</body>
</html>