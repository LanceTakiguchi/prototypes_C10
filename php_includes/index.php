<!-- ***********
Project Name: php_includes
File Name: index.php
Author: Lance Takiguchi
Date: 09/27/2016 Time: 12:36
Objective: Get to know php includes
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Includes
 *********** -->

<!-- Feature Set 1 -->
<?php
$a = 1;
$b = 5;
include('includes/data.php');
$result = $a * $b;
print("<br>Result is $result");
?>

