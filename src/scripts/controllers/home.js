import homeTpl from "../views/home.html";

const render = async ()=>{
    await $("#root").html(homeTpl);
    /* console.log($("#slideBar"))
    $(document).ready(function(){
        $("#slideBar").tap(function(){
            $(".sidebar").animate({opacity:1},0);
            
            console.log([$])
        })
    }) */
    $("#slideBar").tap(function(){
        $(".sidebar").toggle();
    })
}
export default {
    render
}