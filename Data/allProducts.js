const k1_img = require('./photos/k1_img.jpg');
const k2_img = require('./photos/k2_img.jpg');
const k3_img = require('./photos/k3_img.jpg');
const k4_img = require('./photos/k4_img.jpg'); 

const k5_img = require('./photos/k5_img.jpg'); 

const m1_img = require('./photos/m1_img.jpg'); 
const m2_img = require('./photos/m2_img.jpg'); 
const m3_img = require('./photos/m3_img.jpg'); 
const m4_img = require('./photos/m4_img.jpg'); 
const m5_img = require('./photos/m5_img.jpg'); 
const m6_img = require('./photos/m6_img.jpg'); 
const m7_img = require('./photos/m7_img.jpg'); 
const m8_img = require('./photos/m8_img.jpg'); 
const m9_img = require('./photos/m9_img.jpg'); 
const m10_img = require('./photos/m10_img.jpg'); 
const m11_img = require('./photos/m11_img.jpg'); 

const m12_img = require('./photos/m12_img.jpg'); 
const m13_img = require('./photos/m13_img.jpg'); 
const m14_img = require('./photos/m14_img.jpg'); 

const w1_img = require('./photos/w1_img.jpg'); 
const w2_img = require('./photos/w2_img.jpg'); 
const w3_img = require('./photos/w3_img.jpg'); 
const w4_img = require('./photos/w4_img.jpg'); 
const w5_img = require('./photos/w5_img.jpg'); 
const w6_img = require('./photos/w6_img.jpg'); 
const w7_img = require('./photos/w7_img.jpg'); 
const w8_img = require('./photos/w8_img.jpg'); 
const w9_img = require('./photos/w9_img.jpg'); 
const w10_img = require('./photos/w10_img.jpg'); 

const w11_img = require('./photos/w11_img.jpg'); 
const w12_img = require('./photos/w12_img.jpg'); 
const w13_img = require('./photos/w13_img.jpg'); 
const w14_img = require('./photos/w14_img.jpg'); 




let all_products = [
    {
        name: "Placeholder 1",
        category: "kids",
        image: k1_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 2",
        category: "kids",
        image: k2_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 3",
        category: "kids",
        image: k3_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 4",
        category: "kids",
        image: k4_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 5",
        category: "kids",
        image: k5_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 6",
        category: "men",
        image: m1_img,
        new_price: 92.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 7",
        category: "men",
        image: m2_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 8",
        category: "men",
        image: m3_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 9",
        category: "men",
        image: m4_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 10",
        category: "men",
        image: m5_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 11",
        category: "men",
        image: m6_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 12",
        category: "men",
        image: m7_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 13",
        category: "men",
        image: m8_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 14",
        category: "men",
        image: m9_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 15",
        category: "men",
        image: m10_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 16",
        category: "men",
        image: m11_img,
        new_price: 46.00,
        old_price: 92.00
    },
    {
        name: "Placeholder 17",
        category: "men",
        image: m12_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 18",
        category: "men",
        image: m13_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 19",
        category: "women",
        image: m14_img,
        new_price: 46.00,
        old_price: 92.00
    },  
    {
        name: "Placeholder 20",
        category: "women",
        image: w1_img,
        new_price: 46.00,
        old_price: 92.00
    },
    {
        name: "Placeholder 21",
        category: "women",
        image: w2_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 22",
        category: "women",
        image: w3_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 23",
        category: "women",
        image: w4_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 24",
        category: "women",
        image: w5_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 25",
        category: "women",
        image: w6_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 26",
        category: "women",
        image: w7_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 27",
        category: "women",
        image: w8_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 28",
        category: "women",
        image: w9_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 29",
        category: "women",
        image: w10_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 30",
        category: "women",
        image: w11_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 31",
        category: "women",
        image: w12_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 32",
        category: "women",
        image: w13_img,
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        name: "Placeholder 33",
        category: "women",
        image: w14_img,
        new_price: 46.00,
        old_price: 92.00
    }  
];


module.exports = {
    all_products
} 