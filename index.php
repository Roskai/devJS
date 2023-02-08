<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">


    </script>
    <title>Yay</title>
  </head>
  <body>
    <?php
        $dir = opendir('.');
        while($file = readdir($dir)){
            if($file != '.' && $file != '..' && $file != 'index.php' && $file != 'html'){
                echo '<a href="'.$file.'">'.$file.'</a><br>';
            }
        }
    ?>
  </body>
</html>
