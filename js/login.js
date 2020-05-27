function usernamevalid(str) {
  if (str.length == 0) { 
    document.getElementById("username").innerHTML = "";
    return;
  	} else {
    	var xmlhttp = new XMLHttpRequest();
    	xmlhttp.onreadystatechange = function() {
      		if (this.readyState == 4 && this.status == 200) {
        		document.getElementById("username").innerHTML = this.responseText;
      		}
    	};
    xmlhttp.open("POST", "query_register.php?username=" + str, true);
    xmlhttp.send();
  }
}

function emailvalid(str) {
  if (str.length == 0) { 
    document.getElementById("email").innerHTML = "";
    return;
  	} else {
    	var xmlhttp = new XMLHttpRequest();
    	xmlhttp.onreadystatechange = function() {
      		if (this.readyState == 4 && this.status == 200) {
        		document.getElementById("email").innerHTML = this.responseText;
      		}
    	};
    xmlhttp.open("POST", "query_register.php?email=" + str, true);
    xmlhttp.send();
  }
}

// Open the full screen login box 
function openlogin() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen login box 
function closelogin() {
  document.getElementById("myOverlay").style.display = "none";
}