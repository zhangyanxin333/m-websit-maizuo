import detailTpl from "../views/detail.html";
import detailModel from "../models/detail";

const render = async () => {
    let data = await detailModel.list();
    let filmdetail = data.data.film;
    let template = Handlebars.compile(detailTpl);
    let html = template(filmdetail)
    $("main>div").html(html)
}

export default {
    render
}