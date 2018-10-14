import movieTpl from "../views/movies.html";
import movieModel from "../models/movies";
import detailTpl from "../views/detail.html";
import nextModel from "../models/nextMovie";
import nextMovieTpl from "../views/nextMovie.html";

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
    //$("main").html(html);
    $("main>div").append(html1);
    scroll();
    jumpDetail();
}

export default {
    render
}

const scroll = () => {
    let movScroll = new BScroll("main",{
        probeType: 2,
        startY: 0
    });
}
const jumpDetail = () => {
    console.log($(".movie-item"))
    $(".movie-item").on("tap",function(){
        var movieId = $(this).attr("data-id");
        console.log(movieId)
        $.ajax({
            url:"/v4/api/film/"+movieId+"?__t=1539476559380",
            success:(data) => {
                console.log(data);
                let filmdetail = data.data.film;
                let template = Handlebars.compile(detailTpl);
                let html = template(filmdetail)
                $("main>div").html(html)
                //return data;
            }
        })
    })
    console.log($(".comingSoon"))
    $(".movie-list").on("tap",function(){
        var movieId = $(this).attr("data-id");
        console.log(movieId)
        $.ajax({
            url:"/v4/api/film/"+movieId+"?__t=1539476559380",
            success:(data) => {
                console.log(data);
                let filmdetail = data.data.film;
                let template = Handlebars.compile(detailTpl);
                let html = template(filmdetail)
                $("main>div").html(html)
                //return data;
            }
        })
    })
}
