import filmTpl from "../views/film.html";
import filmModel from "../models/film";

const render = ()=>{
    $("main").html(filmTpl);
}

export default {
    render
}