const transpose = function(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArr.push(matrix.map(m => m[i]))
    };
    return(newArr);
};

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch