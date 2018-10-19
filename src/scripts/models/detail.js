const list = (movieId) => {
    return $.ajax({
        url:"/v4/api/film/"+movieId+"?__t=1539476559380",
        success:(result) => {
            return result;
        }
    })
}

export default {
    list
}