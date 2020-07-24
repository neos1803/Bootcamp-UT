const palindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
    if (cleanStr.split("").reverse().join('') === cleanStr) console.log(`${str} is Palindrome`);
    else console.log(`${str} is not Palindrome`);
}

palindrome("ibu ratna antar ubi");
palindrome("kasur ini rusak");
palindrome("A nut for a jar of tuna.");
palindrome("Borrow or rob?");
palindrome("Was it a car or a cat I saw?");
palindrome("Yo, banana boy!");
palindrome("UFO tofu?")