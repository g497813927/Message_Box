// Get Cookies Part Starts Here
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        //  Get Cookies Part -reference part Ends Here
        window.onload=function () {
            document.getElementById("welcomemsg").innerHTML = "Welcome again, "+ username +"!";
            document.getElementById("btn-console").innerHTML ="<a href=\"/console.php\" class=\"col-sm-4 w3-animate-top btn btn-primary\">Console Bar</a>";
            document.getElementById("islogin").innerHTML ="<a onClick=\"delCookies();\" class=\"col-sm-4 w3-animate-top btn btn-info\">Logout</a>";
        }
    }else{
        window.onload=function () {
            document.getElementById("welcomemsg").innerHTML = "Welcome, pls:";
            document.getElementById("islogin").innerHTML ="<a onClick=\"openlogin();\" class=\"col-sm-4 w3-animate-top btn btn-info\">Login\\Register</a>";
        }
    }
}
checkCookie();
// Get Cookies Part Ends Here

// Delete Cookies Part Ends Here
function delCookies (){
    var exp = new Date();
  	var cval = getCookie("username");
  	if (cval != null) {
        document.cookie = "username" + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/;";
        window.alert ("Logout Successfully~");
        location.reload();
    }
}
// Delete Cookies Part Ends Here

// Overlay Part Starts Here, Original Link: https://www.w3schools.com/howto/howto_css_fullscreen_search.asp
// Open the full screen box 
function openlogin() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen box 
  function closelogin() {
    document.getElementById("myOverlay").style.display = "none";
  }
  // Overlay Part Ends Here