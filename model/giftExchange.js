const { BadRequestError, NotFoundError } = require("../utils/error");

class GiftExchange {
    static pairs(obj) {
        const pairs_of_users = [];
        const arr = obj.names;

        if (arr === undefined) {
            throw new BadRequestError(
                "You must have a names array in request.body"
            );
        }

        if (arr.length % 2 == 1) {
            throw new BadRequestError(
                "Your names array must have an even amount of elements"
            );
        }

        for (let i = 0; i < arr.length; i += 2) {
            const pair = [-1, -1];
            pair[0] = GiftExchange.matchPairs(arr);
            pair[1] = GiftExchange.matchPairs(arr);
            pairs_of_users.push(pair);
        }
        return pairs_of_users;
    }

    static matchPairs(arr) {
        let rng = Math.floor(Math.random() * arr.length);
        return arr[rng];
    }

    static traditional(arr) {
        const res = [];
        const hasGiven = " is giving a gift to ";
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr[i].length - 1; j++) {
                res.push(arr[i][j] + hasGiven + arr[i][j + 1]);
                res.push(arr[i][j + 1] + hasGiven + arr[i + 1][j]);
            }
        }
        const last_row = arr.length - 1;
        res.push(arr[last_row][0] + hasGiven + arr[last_row][1]);
        res.push(arr[last_row][1] + hasGiven + arr[0][0]);
        return res;
    }
}

module.exports = GiftExchange;
