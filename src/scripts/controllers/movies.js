import movieTpl from "../views/movies.html";
import nextMovieTpl from "../views/nextMovie.html";
import movieModel from "../models/movies";
import nextModel from "../models/nextMovie";
import detailController from "../controllers/detail";
import Router from "../utils/router"
import filmConstroller from "../controllers/film"
const render = async() => {
    let result = await movieModel.list();
    let moviesList = result.data.films;
    let template = Handlebars.compile(movieTpl);
    let html = template({ moviesList })
    $("main>div").html(html)
    let list = await nextModel.list();
    let upcoming = list.data.films;
    let template1 = Handlebars.compile(nextMovieTpl);
    let html1 = template1({ upcoming });
    $("main>div").append(html1);
    scroll();
    rooters();
}

const scroll = () => {
    let movScroll = new BScroll("main",{
        probeType: 2,
        startY: 0
    });
}

//注册路由
const rooters = ()=>{
    $(".movie-item,.movie-list").on("tap", async function(){
        let movieId = $(this).attr("data-id");
        location.hash = "#"+movieId;

        const router = new Router();
        router.init();
        router.route(`#${movieId}`,detailController.render)
    })
}

export default {
    render
}