import detailTpl from "../views/detail.html";
import detailModel from "../models/detail";

const render = async () => {
    let movieId = location.hash.slice(1)
    let result =(await detailModel.list(movieId)).data.film
    let template = Handlebars.compile(detailTpl);
    let html = template(result)
    $("main>div").html(html)
}

export default {
    render
}