<?php
	/*
		Techzjc Message Box
		Copyright (c) 2019 Jiacheng Zhao
		This repo uses anti-996 MIT license
	*/
	$servername = "localhost";  //If you are not use sql locally, pls add your sql location
	$sqlusername = "";          //Add your SQL username here
	$sqlpwd = "";		    //Add your SQL password
	$connect = mysqli_connect($servername, $sqlusername, $sqlpwd);
	if (!$connect) {
    	die("Connection failed: " . mysqli_connect_error());
	}
?>
