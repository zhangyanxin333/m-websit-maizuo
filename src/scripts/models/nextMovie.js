const list = ()=>{
    return $.ajax({
        url:"v4/api/film/coming-soon?__t=1539439261820&page=1&count=3",
        success:(data) => {
            return data;
        }
    })
}

export default {
    list
}