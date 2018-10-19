import homeTpl from "../views/home.html";

const render = async ()=>{
    await $("#root").html(homeTpl);
    changeTab()
}

const changeTab = ()=>{
    $("#slideBar").tap(function(){
        $(".sidebar").toggle();
    })
    $(".sidebar>ul>li").on("tap",function(){
        let hashs = ['#movies', '#film/nowplaying',"","","#login"]
        location.hash = hashs[$(this).index()]
        $(".sidebar").toggle();
    })
}

export default {
    render
}