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

/* const render = async () => {
    let result = await positionModel.list()
    let list = result.content.data.page.result
    let template = Handlebars.compile(positionTpl)
    let html = template({ list })
    $('main').html(html)
  } */