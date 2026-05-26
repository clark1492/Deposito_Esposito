function upperCase(text) {
    return text.toUpperCase();
}

function countCharacters(text) {
    return text.length;
}

function containsCharacter(text, character) {
    return text.includes(character);
}

module.exports = {
    upperCase,
    countCharacters,
    containsCharacter
};