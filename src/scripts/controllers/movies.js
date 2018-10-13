import movieTpl from "../views/movies.html";
import movieModel from "../models/movies";

const render = async() => {
    let result = await movieModel.list();
    let moviesList = result.data.films;
    let template = Handlebars.compile(movieTpl);
    let html = template({ moviesList })
    $("main").html(html)
    scroll();
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
