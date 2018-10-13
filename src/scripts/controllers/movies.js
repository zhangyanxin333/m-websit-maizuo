import movieTpl from "../views/movies.html";
import movieModel from "../models/movies";

const render = async() => {
    let result = await movieModel.list();
    let moviesList = result.data.films;
    console.log(moviesList);
    let template = Handlebars.compile(movieTpl);
    let html = template({ moviesList })
    $("main").html(html)
}

export default {
    render
}