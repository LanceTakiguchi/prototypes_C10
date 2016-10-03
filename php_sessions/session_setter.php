<!-- Session Setter -->
<!-- ***********
Project Name: php_sessions
File Name: session_settler.php
Author: Lance Takiguchi
Date: 09/28/2016 Time: 11:35
Objective: Gets a little experience with coding PHP sessions
Prompt: https://learning-fuze.github.io/prototypes_C10/#/PHP-Sessions
 *********** -->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title> Session Settler </title>
</head>
<body>
<form action="session_reader.php">
    <?php
    session_start();
    if(isset($_SESSION['name']) && isset($_SESSION['age']) && isset($_SESSION['occupation'])){
        $name = $_SESSION['name'];
        $age = $_SESSION['age'];
        $occupation = $_SESSION['occupation'];
    }else{
        $name = '';
        $age = '';
        $occupation = '';
    }
    ?>
    <input type="text" name="name" value="<?print($name)?>">
    <input type="text" name="age" value="<?print($age)?>">
    <input type="text" name="occupation" value="<?print($occupation)?>">
    <input type="submit">
</form>
</body>
</html>