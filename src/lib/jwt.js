import exp from "constants";
import jsonwebtoken from "jsonwebtoken";
import util from 'util';

// Convert callback based asynchronous function to promise based asynchronous function
// export const verify = (token, secret, options) => {
//     const promise = new Promise((resolve, reject) => {
//         jsonwebtoken.verify(token, secret, options, (err, decoded) => {
//             if (err) {
//                 return reject(err);
//             }

//             resolve(decoded);
//         });
//     });
//     return promise;
// };

const verify = util.promisify(jsonwebtoken.verify);
const sign = util.promisify(jsonwebtoken.sign);

export default {
    verify,
    sign
}