import { AboutController } from "./controllers/AboutController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: PlayersController,
    view: /*html*/`
    <div>It's time for players</div>
    <section class="row" id="players"></section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]