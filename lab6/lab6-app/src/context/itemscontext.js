import React, { createContext, useState } from 'react';
import Passat from "./images/passatb2.jpg";
import Polo from './images/polo.jpg'
import Alien from './images/alien.jpg'
import BigFoot from './images/bigfoot.jpg'
import Junk from './images/junk.jpg'
import Tesla from './images/tesla.jpg'
import Supra from './images/supra.jpg'
import Civic from './images/civic.jpg'
import M3 from './images/e30.jpeg'
import GWagon from './images/gclass.jpg'
import Camaro from './images/camaro.jpg'
import Mustang from './images/gt5.jfif'
import Skyline from './images/r34.jpg'
import Carrera from './images/930.jpg'
import RX7 from './images/rx7.jpeg'
import WRX from './images/wrx.jpg'
import Charger from './images/charger.jpg'
import XType from './images/xtype.jfif'
import Miata from './images/miata.jfif'
import Genesis from './images/hyundai.jfif'
import disiel from './images/disiel.jpg'



export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Volkswagen Passat B8',
            color: "dark",
            year: 1992,
            price: 1500,
            available: true,
            image: Passat,
        },
        {
            id: 2,
            name: 'Polo amg',
            color: "bright",
            year: 2000,
            price: 800,
            available: false,
            image: Polo
        },
        {
            id: 3,
            name: 'Audi Alien',
            color: "normal",
            year: 2055,
            price: 15000,
            available: true,
            image: Alien
        },
        {
            id: 4,
            name: 'Big Foot на город',
            color: "dark",
            year: 2005,
            price: 10000,
            available: false,
            image: BigFoot
        },
        {
            id: 5,
            name: 'Легенькі підфарбування',
            color: "dark",
            year: 2014,
            price: 6000,
            available: true,
            image: Junk
        },
        {
            id: 6,
            name: 'газ + бензин',
            color: "bright",
            year: 2023,
            price: 100,
            available: true,
            image: Tesla
        },
        {
            id: 7,
            name: 'Toyota Supra MK4',
            color: "classic",
            year: 1998,
            price: 13999,
            available: true,
            image: Supra
        },
        {
            id: 8,
            name: 'Honda Civic Type R',
            color: "bright",
            year: 2019,
            price: 1200,
            available: true,
            image: Civic
        },
        {
            id: 9,
            name: 'BMW M3 E30',
            color: "classic",
            year: 1990,
            price: 15001,
            available: false,
            image: M3
        },
        {
            id: 10,
            name: 'Mercedes G-Wagon',
            color: "dark",
            year: 2001,
            price: 13333,
            available: true,
            image: GWagon
        },
        {
            id: 11,
            name: 'Chevrolet Camaro',
            color: "bright",
            year: 2010,
            price: 1100,
            available: true,
            image: Camaro
        },
        {
            id: 12,
            name: 'Ford Mustang GT',
            color: "bright",
            year: 2015,
            price: 9770,
            available: true,
            image: Mustang
        },
        {
            id: 13,
            name: 'Nissan Skyline GT-R',
            color: "dark",
            year: 1999,
            price: 16579,
            available: false,
            image: Skyline
        },
        {
            id: 14,
            name: 'Porsche 911',
            color: "classic",
            year: 1995,
            price: 14596,
            available: true,
            image: Carrera
        },
        {
            id: 15,
            name: 'Mazda RX-7',
            color: "normal",
            year: 2002,
            price: 12345,
            available: true,
            image: RX7
        },
        {
            id: 16,
            name: 'Subaru WRX',
            color: "normal",
            year: 2010,
            price: 9500,
            available: true,
            image: WRX
        },
        {
            id: 17,
            name: 'Dodge Charger',
            color: "dark",
            year: 2008,
            price: 8000,
            available: true,
            image: Charger
        },
        {
            id: 18,
            name: 'Jaguar X-Type',
            color: "classic",
            year: 2005,
            price: 7000,
            available: true,
            image: XType
        },
        {
            id: 19,
            name: 'Mazda Miata MX-5',
            color: "bright",
            year: 2003,
            price: 5500,
            available: true,
            image: Miata
        },
        {
            id: 20,
            name: 'Hyundai Genesis',
            color: "normal",
            year: 2012,
            price: 14345,
            available: false,
            image: Genesis
        },
        {
            id: 21,
            name: 'Дізільний бус',
            color: "bright",
            year: 2011,
            price: 20000,
            available: true,
            image: disiel
        }
    ]);



    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};
