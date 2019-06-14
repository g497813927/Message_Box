    var text1="                                                ";
    var text2="   m                  #                \"         ";
    var text3=" mm#mm   mmm    mmm   # mm   mmmmm   mmm    mmm  ";
    var text4="   #    #\"  #  #\"  \"  #\"  #     m\"     #   #\"  \" ";
    var text5="   #    #\"\"\"\"  #      #   #   m\"       #   #     ";
    var text6="   \"mm  \"#mm\"  \"#mm\"  #   #  #mmmm     #   \"#mm\" ";
    var text7="                                       #         ";
    var text8="                                     \"\"          ";
    var text9="This image is created by Linux toilet shell.";
    console.log (text1);
    console.log (text2);
    console.log (text3);
    console.log (text4);
    console.log (text5);
    console.log (text6);
    console.log (text7);
    console.log (text8);
    console.log (text9);
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

var handlerEmbed = function (captchaObj) {
    $("#embed-submit").click(function (e) {
        var validate = captchaObj.getValidate();
        if (!validate) {
            $("#notice")[0].className = "show";
            setTimeout(function () {
                $("#notice")[0].className = "hide";
            }, 2000);
            e.preventDefault();
        }
    });
    // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
    captchaObj.appendTo("#embed-captcha");
    captchaObj.onReady(function () {
        $("#wait")[0].className = "hide";
    });
    // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
};
$.ajax({
    // 获取id，challenge，success（是否启用failback）
    url: "/web/StartCaptchaServlet.php?t=" + (new Date()).getTime(), // 加随机数防止缓存
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data);
        // 使用initGeetest接口
        // 参数1：配置参数
        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            new_captcha: data.new_captcha,
            product: "float", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
            width: '100%',
            https: true,
            lang: "en"
            // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
        }, handlerEmbed);
    }
});

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