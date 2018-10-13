const list = ()=>{
    return $.ajax({
        url:"/v4/api/film/now-playing?__t=1539393478126&page=1&count=5",
        success:(data) => {
            return data;
        }
    })
}

export default {
    list
}