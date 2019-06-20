/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    var words = tweet.split(" ");
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(word[0] == '#')
            result.push(word.slice(1, word.length));
        }
    return result;
};
