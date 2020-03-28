/* 
Generate characters Pairs 
*/
const generateString = (leafs) => {
    var branches = [];
    if (leafs.length == 1) return leafs;
    for (var k in leafs) {
        var leaf = leafs[k];
        generateString(leafs.join('').replace(leaf, '').split('')).concat("").map(function (subtree) {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
};

const combo = (string) => {
    return generateString(string.split('')).map(function (str) {
        return str.join('')
    });
}

module.exports = {
    combo: combo
}