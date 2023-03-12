import {BASE_URL} from "../utils/constants";

export function timeStampCheck (timestamp) {

        let current = (new Date()).getTime();

        return (current - timestamp) / 60000 > 1;
    }


export function getRandomInt (max) {
    return Math.floor(Math.random() * max+1);
}



