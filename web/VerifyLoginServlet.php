<?php 
/**
 * 输出二次验证结果,本文件示例只是简单的输出 Yes or No
 */
/*
error_reporting(0);
require_once dirname(dirname(__FILE__)) . '/lib/class.geetestlib.php';
require_once dirname(dirname(__FILE__)) . '/config/config.php';
session_start();
$connect = mysqli_connect("localhost", "message", "CSP_create_task", "message");
$GtSdk = new GeetestLib(CAPTCHA_ID, PRIVATE_KEY);

$data = array(
        "user_id" => $_SESSION['user_id'], # 网站用户id
        "client_type" => "web", #web:电脑上的浏览器；h5:手机上的浏览器，包括移动应用内完全内置的web_view；native：通过原生SDK植入APP应用的方式
        "ip_address" => "127.0.0.1" # 请在此处传输用户请求验证时所携带的IP
    );

if ($_SESSION['gtserver'] == 1) {   //服务器正常
    $result = $GtSdk->success_validate($_POST['geetest_challenge'], $_POST['geetest_validate'], $_POST['geetest_seccode'], $data);
    if ($result) {
        $username=$_POST['username'];
        $pwd=$_POST['password'];
        $sql = "SELECT * FROM `tmb_user_profile` WHERE (`username` = '$username' OR `email_addr` = '$username') AND `pwd` = '$pwd' ";
        $result = mysqli_query($connect, $sql);
        if (!$result) {
            printf("Error: %s\n", mysqli_error($connect));
            exit();
        }
        echo $pwd;
        if (mysqli_num_rows($result) >= 1) {
            $row = mysql_fetch_array($result);
            $username=$row['username'];
            echo $username;
            echo '{"status":"success"}';}
        } else{
            echo '{"status":"fail"}';
        }
}else{  //服务器宕机,走failback模式
    if ($GtSdk->fail_validate($_POST['geetest_challenge'],$_POST['geetest_validate'],$_POST['geetest_seccode'])) {
      	$username=$_POST['username'];
        $pwd=$_POST['password'];
        echo '{"status":"success"}';
    }else{
        echo $pwd;
        echo '{"status":"fail"}';
    }
}
*/
?>
<?php 
/*
*	Geetest Demo reference Starts Here
*/
error_reporting(0);
require_once dirname(dirname(__FILE__)) . '/lib/class.geetestlib.php';
require_once dirname(dirname(__FILE__)) . '/config/config.php';
session_start();
$GtSdk = new GeetestLib(CAPTCHA_ID, PRIVATE_KEY);

$data = array(
        "user_id" => $_SESSION['user_id'],
        "client_type" => "web",
        "ip_address" => "127.0.0.1"
    );


if ($_SESSION['gtserver'] == 1) {   //Geetest is running
    $result = $GtSdk->success_validate($_POST['geetest_challenge'], $_POST['geetest_validate'], $_POST['geetest_seccode'], $data);
    if ($result) {
      	$connect = mysqli_connect("localhost", "message", "CSP_create_task", "message"); //For safety reason, I will NOT grant the database to be access in outside of my server. However, I'll capture a screenshot of the table in the APPENDIX part
        $username = $_POST['username'];
      	$pwd=$_POST['pwd'];
        $sql = "SELECT * FROM `tmb_user_profile` WHERE (`username` = '$username' OR `email_addr` = '$username') AND `pwd` = '$pwd' ";
        $sql_result = mysqli_query($connect, $sql);
        if (!$sql_result) {
            printf("Error: %s\n", mysqli_error($connect));
            exit();
        }
        if (mysqli_num_rows($sql_result) >= 1) {
            $row = mysqli_fetch_array($sql_result);
            $username = $row['username'];
            echo 'Login succeed! Now sending you back';
          	setcookie("username",$username,time() + (86400), "/");
            echo "<script>location.href='".$_SERVER["HTTP_REFERER"]."';</script>"; //Back to the site and refresh, original link:https://blog.csdn.net/cg20/article/details/78589178
        }
      else{
        echo "<script>alert(\"The username or password that you entered is wrong, pls enter again!\");location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
        }
        } else{
            echo "<script>alert(\"You have not finish Captcha yet!\");location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
        }
}else{  //If Geetest Server Fails, go to fallback mode
    if ($GtSdk->fail_validate($_POST['geetest_challenge'],$_POST['geetest_validate'],$_POST['geetest_seccode'])) {
      	$connect = mysqli_connect("localhost", "message", "CSP_create_task", "message");
        $username = $_POST['username'];
      	$pwd=$_POST['pwd'];
        $sql = "SELECT * FROM `tmb_user_profile` WHERE (`username` = '$username' OR `email_addr` = '$username') AND `pwd` = '$pwd' ";
        $sql_result = mysqli_query($connect, $sql);
        if (!$sql_result) {
            printf("Error: %s\n", mysqli_error($connect));
            exit();
        }
        if (mysqli_num_rows($sql_result) >= 1) {
            $row = mysqli_fetch_array($sql_result);
            $username = $row['username'];
          	echo 'Login succeed! Now sending you back';
          	setcookie("username",$username,time() + (86400), "/");
            echo "<script>location.href='".$_SERVER["HTTP_REFERER"]."';</script>"; //Back to the site and refresh, original link:https://blog.csdn.net/cg20/article/details/78589178
        }
      else{
            echo "<script>alert(\"The username or password that you entered is wrong, pls enter again!\");location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
        }
    }else{
        echo "<script>alert(\"You have not finish Captcha yet!\");location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
    }
}
?>

