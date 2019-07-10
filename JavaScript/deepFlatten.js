/*  
Accepts: any object (including arrays)
Returns: a 1D array containing all values of all keys at any depth
Note that object keynames will be lost.
*/

const deepFlatten = (obj) => {
    return Object.values(obj).reduce((agg, curr) => {
        if (typeof curr !== "object") {
            return agg.concat(curr);
        } else {
            return agg.concat(deepFlatten(curr));
        }
    }, []);
};

