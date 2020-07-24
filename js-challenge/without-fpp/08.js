class Str {
    lower(str) {
        return str.toLowerCase();
    }
    upper(str) {
        return str.toUpperCase();
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    reverse(str) {
        return str.split('').reverse().join('');
    }
    contains(str, check) {
        if (Array.isArray(check)) {
            let checked = 0
            check.forEach(function(word) {
                if (str.includes(word)) checked++;
            })
            if (checked > 0) console.log(true)
            else console.log(false);
        } else {
            if (str.match(`${check}`).length > 0) console.log(true)
            else console.log(false);
        }
    }
    random(number=16) {
        let str = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < number; i++) {
            str += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(str);
    }
    slug(str, char="-") {
        let params = /[\W_]+/g;
        let cleanStr = str.replace(params, char).slice(0, -1);
        console.log(cleanStr);
    }
    count(str) {
        let cleanStr = str.split("");
        console.log(cleanStr.length);
    }
    countWords(str) {
        let params = /[\W_]+/g;
        let words = str.replace(params, " ").split(" ")
        console.log(words.length);
    }
    trim(str, numbers = 100, add="...") {
        if (str.length > numbers) console.log(str.substring(0, numbers) + add);
        else console.log(str);
    }
    trimWords(str, numbers = 30, add = "...") {
        let allStr = str.split(" ");
        let trimmedWords = [];
        if (numbers > allStr.length) console.log(str);
        else {
            for (let i = 0; i < numbers; i++) {
                trimmedWords.push(allStr[i]);
            }
            console.log(trimmedWords.join(" ") + add);
        }
    }
}

newStr = new Str;
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

//newStr.contains('Saya ingin makan sate', ['sate', 'rujak'])
//newStr.random();
//newStr.slug(title, "_");
//newStr.count('lorem ipsum')
//newStr.countWords("lorem ipsum")
//newStr.trim(text, 20, "----");
//newStr.trimWords(text, 3);