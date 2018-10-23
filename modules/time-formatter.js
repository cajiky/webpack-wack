const moment = require('moment');

const giveCurrentTime = () => {
    moment().format("MMMM Do YYYY");
}

export default giveCurrentTime;