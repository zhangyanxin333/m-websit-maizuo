import filmTpl from "../views/film.html";
import nowplayingConstroller from "../controllers/nowplaying"
import comingsoonConstroller from "../controllers/comingsoon"
import Router from "../utils/router"

const render = async() => {
    await $("main").html(filmTpl);
    nowplayingConstroller.render();
    changeTab()
}

const changeTab = ()=>{
    $(".title>span").on("tap",function(){
        let hashs = ['#film', '#film/comingsoon']
        location.hash = hashs[$(this).index()]
    })
}

export default {
    render
}