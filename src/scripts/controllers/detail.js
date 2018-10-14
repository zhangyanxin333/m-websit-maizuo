import detailTpl from "../views/detail.html";
import detailModel from "../models/detail";
console.log(detailTpl);
console.log(detailModel);


const render = async () => {
    let data = await detailModel.list();
    console.log(data);
    let filmdetail = data.data.film;
    console.log(filmdetail)
    let template = Handlebars.compile(detailTpl);
    let html = template(filmdetail)
    $("main>div").html(html)
}


export default {
    render
}