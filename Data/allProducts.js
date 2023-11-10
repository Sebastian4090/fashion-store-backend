const all_products = [
    {
        _id: 1,
        name: "Placeholder 1",
        category: "kids",
        image: "assets/allProducts/photos/k1_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 2,
        name: "Placeholder 2",
        category: "kids",
        image: "assets/allProducts/photos/k2_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 3,
        name: "Placeholder 3",
        category: "kids",
        image: "assets/allProducts/photos/k3_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 4,
        name: "Placeholder 4",
        category: "kids",
        image: "assets/allProducts/photos/k4_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 5,
        name: "Placeholder 5",
        category: "kids",
        image: "assets/allProducts/photos/k5_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 6,
        name: "Placeholder 6",
        category: "men",
        image: "/photos/m1_img.jpg",
        new_price: 92.00,
        old_price: 92.00
    }, 
    {
        _id: 7,
        name: "Placeholder 7",
        category: "men",
        image: "/photos/m2_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 8,
        name: "Placeholder 8",
        category: "men",
        image: "/photos/m3_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 9,
        name: "Placeholder 9",
        category: "men",
        image: "/photos/m4_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 10,
        name: "Placeholder 10",
        category: "men",
        image: "/photos/m5_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 11,
        name: "Placeholder 11",
        category: "men",
        image: "/photos/m6_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 12,
        name: "Placeholder 12",
        category: "men",
        image: "/photos/m7_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 13,
        name: "Placeholder 13",
        category: "men",
        image: "/photos/m8_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 14,
        name: "Placeholder 14",
        category: "men",
        image: "/photos/m9_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 15,
        name: "Placeholder 15",
        category: "men",
        image: "/photos/m10_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 16,
        name: "Placeholder 16",
        category: "men",
        image: "/photos/m11_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    },
    {
        _id: 17,
        name: "Placeholder 17",
        category: "men",
        image: "/photos/m12_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 18,
        name: "Placeholder 18",
        category: "men",
        image: "/photos/m13_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 19,
        name: "Placeholder 19",
        category: "women",
        image: "/photos/m14_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    },  
    {
        _id: 20,
        name: "Placeholder 20",
        category: "women",
        image: "/photos/w1_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    },
    {
        _id: 21,
        name: "Placeholder 21",
        category: "women",
        image: "/photos/w2_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 22,
        name: "Placeholder 22",
        category: "women",
        image: "/photos/w3_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 23,
        name: "Placeholder 23",
        category: "women",
        image: "/photos/w4_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 24,
        name: "Placeholder 24",
        category: "women",
        image: "/photos/w5_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 25,
        name: "Placeholder 25",
        category: "women",
        image: "/photos/w6_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 26,
        name: "Placeholder 26",
        category: "women",
        image: "/photos/w7_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 27,
        name: "Placeholder 27",
        category: "women",
        image: "/photos/w8_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 28,
        name: "Placeholder 28",
        category: "women",
        image: "/photos/w9_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 29,
        name: "Placeholder 29",
        category: "women",
        image: "/photos/w10_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 30,
        name: "Placeholder 30",
        category: "women",
        image: "/photos/w11_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 31,
        name: "Placeholder 31",
        category: "women",
        image: "/photos/w12_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 32,
        name: "Placeholder 32",
        category: "women",
        image: "/photos/w13_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }, 
    {
        _id: 33,
        name: "Placeholder 33",
        category: "women",
        image: "/photos/w14_img.jpg",
        new_price: 46.00,
        old_price: 92.00
    }  
];


module.exports = {
    all_products
} 