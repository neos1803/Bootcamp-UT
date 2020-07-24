let data = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const createObj = (data) => {
    let row = data.split("\n");
    let value = row[0].split(", ");
    let output = [];

    for (let i = 0; i < row.length; i++) {
        let obj = {};
        let column = row[i].split(", ");

        for(let j = 0; j < column.length; j++) {
            obj[value[j].toLowerCase()] = column[j];
        }
        output.push(obj);
    }

    console.log(output);
}

createObj(data);