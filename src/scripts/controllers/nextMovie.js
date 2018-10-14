import nextMovieTpl from "../views/nextMovie.html";
import nextModel from "../models/nextMovie";
const render = async() => {
    let list = await nextModel.list();
    let upcoming = list.data.films;
    let template = Handlebars.compile(nextMovieTpl);
    let html = template({ upcoming });
    $("main>div").append(html);
}

export default {
    render
}