function alert_hide_flash(obj){
  	var alert_flash= document.getElementById("alert-flash");
    alert_flash.classList.add("fade");
	alert_flash.classList.remove("show");
    setTimeout(function(){alert_flash.parentNode.removeChild(alert_flash);},800)
  }
function alert_hide_live_offline(obj){
  	var alert_live_offline= document.getElementById("alert-live-offline");
    alert_live_offline.classList.add("fade");
	alert_live_offline.classList.remove("show");
    setTimeout(function(){alert_live_offline.parentNode.removeChild(alert_live_offline);},800)
  }
function alert_hide_comment(obj){
  	var alert_comment= document.getElementById("alert-comment");
    alert_comment.classList.add("fade");
	alert_comment.classList.remove("show");
    setTimeout(function(){alert_comment.parentNode.removeChild(alert_comment);},800)
  }