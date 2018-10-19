import loginTpl from "../views/login.html";
const render = () => {
    $("main div").html(loginTpl);
    $("input").on("input",function(){
        let phone = $(" input ").val();
        if(/^1[3578]\d{9}$/.test(phone) && phone.length == 11){
            $(".code").css("display","block");
        }else{
            $(".code").css("display","none");            
        }
    })
    sendemail();
} 
var countdown=10;
const sendemail = () => {
    var obj = $(".code");
    obj.click(function(){
        settime(obj);
    })
}
function settime(obj) { //发送验证码倒计时
    if (countdown == 0) { 
        obj.attr('disabled',false); 
        obj.html("发送验证码");
        countdown = 10; 
        return;
    } else { 
        obj.attr('disabled',true);
        obj.html("重发(" + countdown + ")");
        countdown--; 
    } 
    setTimeout(function() { 
        settime(obj) }
        ,1000) 
}

export default {
    render:render,
    sendemail:sendemail
}