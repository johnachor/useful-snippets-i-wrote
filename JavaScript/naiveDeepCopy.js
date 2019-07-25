/* 
Accepts: anything
Returns: the input value if not an object, or a naive deep clone of an array or object.
Does not preserve prototypal inheritance or reference pointers; assumes a tree.
*/

const naiveDeepCopy = (input) => {

    if (Array.isArray(input)) return input.map(naiveDeepCopy);

    if (typeof input === "object") return Object.entries(input).reduce((agg, curr) => {
        agg[curr[0]] = naiveDeepCopy(curr[1]);
        return agg;
    }, {});

    return input;
}