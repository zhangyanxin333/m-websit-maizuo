const list = ()=>{
    return $.ajax({
        url:"/v4/api/film/now-playing?page=1&count=7",
        success:(data) => {
            return data;
        }
    })
}

const loadmore = (pageNo)=>{
    return $.ajax({
        url:"/v4/api/film/now-playing?page="+pageNo+"&count=7",
        success:(result)=>{
            return result;
        }
    })
}

export default {
    list,
    loadmore
}