let sentence = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const wordsObj = {
    dolor: "*****", 
    elit: "****", 
    quis: "****", 
    nisi: "****", 
    fugiat: "******", 
    proident: "********", 
    laborum: "*******"
};

sentence = sentence.replace(/dolor|elit|quis|nisi|fugiat|proident|laborum/gi, function(word){
    return wordsObj[word];
});
console.log(sentence);
