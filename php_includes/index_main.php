<!-- ***********
Project Name: php_includes
File Name: index_main.php
Author: Lance Takiguchi
Date: 09/27/2016 Time: 12:40
Objective: Learn how to use includes regarding html
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Includes
 *********** -->

<!-- Feature Set 2 -->
<?php
include('main.php');
?>
<div>I'm not in the main content or the footer</div>
<?php
include('footer.php');
?>