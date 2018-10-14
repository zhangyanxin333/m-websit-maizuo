const list = () => {
    return $.ajax({
        url:"/v4/api/film/4419?__t=1539476559380",
        success:(data) => {
            return data;
        }
    })
}

export default {
    list
}