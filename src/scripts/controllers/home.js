import homeTpl from "../views/home.html";
console.log(homeTpl)
const render = ()=>{
    $("#root").html(homeTpl);
}
export default {
    render
}