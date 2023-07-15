import { home, getTodayDate, getMonthsName,getPeople } from '../controllers/controller.js';
// set up the routing
const routes = (app) => {
    // home page
    app.route('/')
        .get(home)
    // GET home page.
    app.route('/home')
        .get(home)
    // Get today's date
    app.route('/today')
        .get(getTodayDate)
    // get list of month names
    app.route('/months')
        .get(getMonthsName)
    // get list of People
    app.route('/people')
        .get(getPeople)
}
// export the route
export default routes;