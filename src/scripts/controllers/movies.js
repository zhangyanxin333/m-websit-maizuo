import movieTpl from "../views/movies.html";
import movieModel  from "../models/movies";
console.log(movieModel);
console.log(movieTpl)

const render = ()=>{
    $("main").html(movieTpl);
}

export default {
    render
}
