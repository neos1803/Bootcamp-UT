const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

class Cipher {
    // setPassword(password) {
    //     this.password = password;
    //     return this;
    // }
    
    static encrypt(text, password) {
        let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        this.password = password;
        return {iv: iv.toString("hex"), encryptedText: encrypted.toString("hex"), password};
    }

    static decrypt(text, password) {
        if (password == this.password) {
            let iv = Buffer.from(text.iv, "hex");
            let toDecrypt = Buffer.from(text.encryptedText, "hex");
            let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
            let decrypted = decipher.update(toDecrypt);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            console.log(decrypted.toString());
        } else {
            console.log("Wrong Password");
        }
    }
}

let message = "Ini aku";
message = Cipher.encrypt(message, "aaaaa");
Cipher.decrypt(message, "sssss");