import homeController from './controllers/home';
import moviesController from "./controllers/movies";
import filmConstroller from "./controllers/film"
import nowplayingConstroller from "./controllers/nowplaying"
import comingsoonConstroller from "./controllers/comingsoon"
import Router from "./utils/router"

homeController.render();
// moviesController.render();
// filmConstroller.render();

const router = new Router();
router.init();
router.route('#movies',moviesController.render)
router.route('#film', filmConstroller.render)
router.route('#film/nowplaying', nowplayingConstroller.render)
router.route('#film/comingsoon', comingsoonConstroller.render)
