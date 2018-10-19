function Router(){
    this.routes = {}
    this.currentHash = ""
}

var noop = function(){}

//路由注册
Router.prototype.route = function(hash,cb){
    this.currentHash = hash;
    this.routes[this.currentHash] = cb || noop
    // console.log("注册了路由")
}

//路由舒刷新
Router.prototype.refresh = function(){
    let hash = location.hash || "#movies"
    this.currentHash = hash
    // console.log(this.routes)
    this.routes[this.currentHash]()
    this.switchTabbar()
}

//tabbar switch
Router.prototype.switchTabbar = function(){
    let hashs = ['#film/nowplaying', '#film/comingsoon']
    let index = hashs.indexOf(this.currentHash)
    $('.title>span').eq(index).addClass('active').siblings().removeClass('active')
}

// 路由切换监听
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this))
    window.addEventListener('hashchange', this.refresh.bind(this))
}

export default Router