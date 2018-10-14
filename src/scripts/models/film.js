const nowlist = ()=>{
    return $.ajax({
        url:"/v4/api/film/now-playing?page=1&count=7",
        success:(data) => {
            return data;
        }
    })
}

const comlist = ()=>{
    return $.ajax({
        url:"/v4/api/film/coming-soon?page=1&count=7",
        success:(data) => {
            return data;
        }
    })
}

const nowloadmore = (pageNo)=>{
    return $.ajax({
        url:"/v4/api/film/now-playing?page="+pageNo+"&count=7",
        success:(result)=>{
            return result;
        }
    })
}

const comloadmore = (pageNo)=>{
    return $.ajax({
        url:"/v4/api/film/coming-soon?page="+pageNo+"&count=7",
        success:(result)=>{
            return result;
        }
    })
}

export default {
    nowlist,
    nowloadmore,
    comlist,
    comloadmore
}