/* 
Accepts: anything
Returns: the input value if not an object, or a naive deep clone of an array or object.
Does not preserve prototypal inheritance or reference pointers; 
multiple references to the same value will become multiple unrelated new copies.
*/

const naiveDeepCopy = (input) => {

    if (Array.isArray(input)) return input.map(naiveDeepCopy);

    if (typeof input === "object") return Object.entries(input).reduce((agg, curr) => {
        agg[curr[0]] = naiveDeepCopy(curr[1]);
        return agg;
    }, {});

    return input;
}