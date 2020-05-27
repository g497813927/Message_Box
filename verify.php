// Preconditions:
//      1. Server contains SQL software
//      2. There is a database created which only used for test purpose
//      3. Inside the database, there is a table and the table at least contains three columns: username, email_addr, and pwd

<?php
error_reporting(0);
session_start();
$connect = mysqli_connect("localhost", "username", "pwd", "database_name"); // For this line, please enter your database's login address in the first quotation mark, login username in the second quotation mark, password in the third mark, the database name for test in the third quotation mark.
$username = $_POST['username'];
$pwd=$_POST['pwd'];
$sql = "SELECT * FROM `tmb_user_profile` WHERE (`username` = '$username' OR `email_addr` = '$username') AND `pwd` = '$pwd' "; // For this line, please enter your table name between ``
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
	echo "<script>location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
}else{
	echo "<script>alert(\"The username or password that you entered is wrong, pls enter again!\");location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
}
?>

