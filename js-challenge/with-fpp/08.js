class Str {
    static lower(str) {
        return str.toLowerCase();
    }
    static upper(str) {
        return str.toUpperCase();
    }
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static reverse(str) {
        return str.split('').reverse().join('');
    }
    static contains(str, check) {
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
    static random(number=16) {
        let str = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < number; i++) {
            str += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(str);
    }
    static slug(str, char="-") {
        let params = /[\W_]+/g;
        let cleanStr = str.replace(params, char).slice(0, -1);
        console.log(cleanStr);
    }
    static count(str) {
        let cleanStr = str.split("");
        console.log(cleanStr.length);
    }
    static countWords(str) {
        let params = /[\W_]+/g;
        let words = str.replace(params, " ").split(" ")
        console.log(words.length);
    }
    static trim(str, numbers = 100, add="...") {
        if (str.length > numbers) console.log(str.substring(0, numbers) + add);
        else console.log(str);
    }
    static trimWords(str, numbers = 30, add = "...") {
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

Str.lower("MAKAN");
Str.upper("malam");
Str.capitalize("saya ingin makan");
Str.reverse("kasur");
Str.contains("Saya ingin makan sate", "makan");
Str.contains("Saya ingin makan sate", ["sate", "rujak"]);
Str.random();
Str.random(6);
Str.random(32);
Str.count("lorem ipsum");
Str.countWords("lorem ipsum");
const title = "JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?";
Str.slug(title); // javascript-typescript-dart-bahasa-mana-yang-akan-populer-di-2018
Str.slug(title, "_"); // javascript_typescript_dart_bahasa_mana_yang_akan_populer_di_2018
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

Str.trim("Less than 100 characters"); // Less than 100 characters

Str.trim(text); // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

Str.trim(text, 20); // Lorem ipsum dolor si...

Str.trim(text, 20, "·····"); // Lorem ipsum dolor si·····
Str.trimWords("Less than 30 words"); // Less than 30 words

Str.trimWords(text); // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

Str.trimWords(text, 3); // Lorem ipsum dolor...

Str.trimWords(text, 3, "·····"); // Lorem ipsum dolor·····