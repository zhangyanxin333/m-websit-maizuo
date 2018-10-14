import nowplayingTpl from "../views/nowplaying.html";
import filmModel from "../models/film";

var datasource = []
var pageNo = 1

const render = async() => {
    let filmList = datasource = (await filmModel.nowlist()).data.films;
    await renderList(filmList)
    console.log(filmList);
    scroll();
}

const scroll = ()=>{
    let filmScroll = new BScroll('main',{
        probeType:2,
        startY:0
    })

    let footImg = $(".foot img");

    // 绑定滚动事件(领图标变化))
    filmScroll.on("scroll",function(){
        let y = this.y;
        let maxY = this.maxScrollY-y

        if(maxY>=0){
            footImg.addClass('down')
        }
    })
    // 绑定滚动结束事件
    filmScroll.on("scrollEnd",async function(){
        let y = this.y;
        let maxY = this.maxScrollY-y

        //尾部上拉加载更多操作
        if(maxY >= -40 && maxY < 0){
            this.scrollTo(0, this.maxScrollY + 40,1000)
        }else if(maxY>=0){
            footImg.attr("src","/images/ajax-loader.gif")

            let result = await filmModel.nowloadmore(++pageNo);
            let list = datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(list)
            this.refresh()
            footImg.attr("src","/images/arrow.png").removeClass('down')
            this.scrollTo(0, this.maxScrollY + 40,1000)
        }

    })
}

const renderList = (list)=>{
    let template = Handlebars.compile(nowplayingTpl);
    let html = template({list})
    $("#filmlist").html(html);
}

export default {
    render
}