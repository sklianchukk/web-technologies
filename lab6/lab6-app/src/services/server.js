const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5005;


app.use(cors());
app.use(express.json());
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

let products = [
    {
        id: 1,
        name: 'Volkswagen Passat B8',
        color: 'dark',
        year: 1992,
        price: 1500,
        available: true,
        image: './images/passatb2.jpg',
    },
    {
        id: 2,
        name: 'Polo amg',
        color: 'bright',
        year: 2000,
        price: 800,
        available: false,
        image: './images/polo.jpg',
    },
    {
        id: 3,
        name: 'Audi Alien',
        color: 'normal',
        year: 2055,
        price: 15000,
        available: true,
        image: './images/alien.jpg',
    },
    {
        id: 4,
        name: 'Big Foot на город',
        color: 'dark',
        year: 2005,
        price: 10000,
        available: false,
        image: './images/bigfoot.jpg',
    },
    {
        id: 5,
        name: 'Легенькі підфарбування',
        color: 'dark',
        year: 2014,
        price: 6000,
        available: true,
        image: './images/junk.jpg',
    },
    {
        id: 6,
        name: 'газ + бензин',
        color: 'bright',
        year: 2023,
        price: 100,
        available: true,
        image: './images/tesla.jpg',
    },
    {
        id: 7,
        name: 'Toyota Supra MK4',
        color: 'classic',
        year: 1998,
        price: 13999,
        available: true,
        image: './images/supra.jpg',
    },
    {
        id: 8,
        name: 'Honda Civic Type R',
        color: 'bright',
        year: 2019,
        price: 1200,
        available: true,
        image: './images/civic.jpg',
    },
    {
        id: 9,
        name: 'BMW M3 E30',
        color: 'classic',
        year: 1990,
        price: 15001,
        available: false,
        image: './images/e30.jpeg',
    },
    {
        id: 10,
        name: 'Mercedes G-Wagon',
        color: 'dark',
        year: 2001,
        price: 13333,
        available: true,
        image: './images/gclass.jpg',
    },
    {
        id: 11,
        name: 'Chevrolet Camaro',
        color: 'bright',
        year: 2010,
        price: 1100,
        available: true,
        image: './images/camaro.jpg',
    },
    {
        id: 12,
        name: 'Ford Mustang GT',
        color: 'bright',
        year: 2015,
        price: 9770,
        available: true,
        image: './images/gt5.jfif',
    },
    {
        id: 13,
        name: 'Nissan Skyline GT-R',
        color: 'dark',
        year: 1999,
        price: 16579,
        available: false,
        image: './images/r34.jpg',
    },
    {
        id: 14,
        name: 'Porsche 911',
        color: 'classic',
        year: 1995,
        price: 14596,
        available: true,
        image: './images/930.jpg',
    },
    {
        id: 15,
        name: 'Mazda RX-7',
        color: 'normal',
        year: 2002,
        price: 12345,
        available: true,
        image: './images/rx7.jpeg',
    },
    {
        id: 16,
        name: 'Subaru WRX',
        color: 'normal',
        year: 2010,
        price: 9500,
        available: true,
        image: './images/wrx.jpg',
    },
    {
        id: 17,
        name: 'Dodge Charger',
        color: 'dark',
        year: 2008,
        price: 8000,
        available: true,
        image: './images/charger.jpg',
    },
    {
        id: 18,
        name: 'Jaguar X-Type',
        color: 'classic',
        year: 2005,
        price: 7000,
        available: true,
        image: './images/xtype.jfif',
    },
    {
        id: 19,
        name: 'Mazda Miata MX-5',
        color: 'bright',
        year: 2003,
        price: 5000,
        available: true,
        image: './images/miata.jfif',
    },
    {
        id: 20,
        name: 'Hyundai Genesis',
        color: 'normal',
        year: 2012,
        price: 14345,
        available: false,
        image: './images/hyundai.jfif',
    },
    {
        id: 21,
        name: 'Дізільний бус',
        color: 'bright',
        year: 2011,
        price: 20000,
        available: true,
        image: './images/disiel.jpg',
    }
];


app.get('/api/products/', (req, res) => {
    const { search, sort, color, price } = req.query;

    let filteredProducts = products;

    if (search) {
        const withoutSpace = search.trim().toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(withoutSpace)
        );
    }

    if (sort === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (color) {
        filteredProducts = filteredProducts.filter(product =>
            product.color === color
        );
    }

    if (price) {
        const maxPrice = parseInt(price, 10);
        filteredProducts = filteredProducts.filter(product =>
            product.price <= maxPrice
        );
    }

    res.json(filteredProducts);
});


app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
