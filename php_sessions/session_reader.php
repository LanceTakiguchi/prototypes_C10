<!-- Session Reader -->
<!-- ***********
Project Name: php_sessions
File Name: session_reader.php
Author: Lance Takiguchi
Date: 09/28/2016 Time: 11:41
Objective: Gets a little experience with coding PHP sessions
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Sessions
 *********** -->
<?php
session_start();
echo $_GET['name'];
echo $_GET['age'];
echo $_GET['occupation'];
$_SESSION['name'] = $_GET['name'];
$_SESSION['age'] = $_GET['age'];
$_SESSION['occupation'] = $_GET['occupation'];
?>