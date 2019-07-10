/*
    Returns true on finding a shared substring of length seekLength, else returns false.
*/

const checkForSharedSubstring = (primaryString, comparedString, seekLength) => {
    if (comparedString.length < seekLength) return false;
    if (primaryString.includes(comparedString.substr(0, seekLength))) return true;
    
    return checkForSharedSubstring(primaryString, comparedString.slice(1), seekLength);
}