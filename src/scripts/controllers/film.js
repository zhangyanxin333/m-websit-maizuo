import filmTpl from "../views/film.html";
import nowplayingConstroller from "../controllers/nowplaying"
import comingsoonConstroller from "../controllers/comingsoon"
import Router from "../utils/router"

const render = async() => {
    await $("main").html(filmTpl);
    nowplayingConstroller.render();
    location.hash = "#film/nowplaying"
    changeTab()
}

const changeTab = ()=>{
    $(".title>span").on("tap",function(){
        let hashs = ['#film/nowplaying', '#film/comingsoon']
        location.hash = hashs[$(this).index()]
    })
}

export default {
    render
}