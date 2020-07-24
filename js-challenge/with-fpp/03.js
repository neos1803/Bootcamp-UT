const fs = require("fs");

const csvConverter = (csv) => {
    const [header, ...array] = csv.split("\n");

    const newData = array.map(value => {
        const items = value.split(", ")
        const data = {}

        header.split(", ").map(value => value.toLowerCase()).forEach((value, index) => {
            if (value === "price") {
                data[value] = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(parseInt(items[index]));
            } else {
                data[value] = items[index];
            }
        })
        return data;
    })
    console.log(typeof newData)
    return newData;
}

fs.readFile("03.csv", "utf8", (err, value) => {
    if(err) console.log(err);
    else console.log(csvConverter(value));
})