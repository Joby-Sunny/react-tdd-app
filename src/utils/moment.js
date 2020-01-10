const moment = require('moment');
const TIME_FROM_NOW_DEFAULT = 'Some Time Ago';

export function timeFromNow(timeStamp) {
    try {
        return moment(timeStamp).fromNow();
    } catch (error) {
        console.log('Recieved Invalid Time', timeStamp);
        return TIME_FROM_NOW_DEFAULT;
    }
}
