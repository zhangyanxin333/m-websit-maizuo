import movieTpl from "../views/movies.html";
import movieModel  from "../models/movies";

const render = ()=>{
    $("main").html(movieTpl);
}

export default {
    render
}
