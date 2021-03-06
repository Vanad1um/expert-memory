let adList = [
    {
        id: '1',
        description: 'Best Chairs',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '15%',
        hashTags: ['furniture', 'chairs'],
        rating: '',
        reviews: []
    },

    {
        id: '2',
        description: 'Best Tables',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://cooltables.com',
        vendor: 'Table Service',
        photoLink: 'https://images.app.goo.gl/dgAF435EduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '32%',
        hashTags: ['furniture', 'tables'],
        rating: '',
        reviews: []
    },

    {
        id: '3',
        description: 'Best Sofas',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolsofas.com',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP35EduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '18%',
        hashTags: ['furniture', 'sofas'],
        rating: '',
        reviews: []
    },

    {
        id: '4',
        description: 'Best Wardrobes',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolwardrobes.com',
        vendor: 'Wardrobe Service',
        photoLink: 'https://images.app.goo.gl/dgAFy242fekJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '31%',
        hashTags: ['furniture', 'wardrobe'],
        rating: '',
        reviews: []
    },

    {
        id: '5',
        description: 'Super Sofas',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sofassuper.com',
        vendor: 'SofasSuper',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '53%',
        hashTags: ['furniture', 'sofas'],
        rating: '',
        reviews: []
    },

    {
        id: '6',
        description: 'Chair of white birch!',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com/214',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAF2156kJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '7%',
        hashTags: ['furniture', 'chairs'],
        rating: '',
        reviews: []
    },

    {
        id: '7',
        description: 'Only one last chair left',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com/245',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cE13UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '66%',
        hashTags: ['furniture', 'chairs'],
        rating: '',
        reviews: []
    },

    {
        id: '8',
        description: 'SuperSushi Set "McDonalds"',
        createdAt: new Date('2021-02-19T18:59:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAFyP2425JUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '17%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '9',
        description: 'SuperSushi Set "Vyhino"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cE2525UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '32%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '10',
        description: 'SuperSushi Set "Perlovka"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgA2536dgas4gs3E2525UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '38%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '11',
        description: 'SuperSushi Set "Vyhino"',
        createdAt: new Date('2021-01-15T23:45:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAFyP232cE252sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '32%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '12',
        description: 'SuperSushi Set "Plachyschiaya Deva"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAF245fd232cE252sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '13%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '13',
        description: 'SuperSushi Set "Palindrom"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAFy25g352235cE252sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '22%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '14',
        description: 'SuperSushi Set "Ploskodonnyi"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushimax.com',
        vendor: 'SushiMax',
        photoLink: 'https://images.app.goo.gl/dgAFyP232dsg24f2252sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '19%',
        hashTags: ['food', 'sushi'],
        rating: '',
        reviews: []
    },

    {
        id: '15',
        description: 'Set "4seasons" + "Margarita"',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://propizza.com',
        vendor: 'ProPizza',
        photoLink: 'https://images.app.goo.gl/dgAFyP232cfsgE252sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '33%',
        hashTags: ['food', 'pizza'],
        rating: '',
        reviews: []
    },

    {
        id: '16',
        description: '-20% for every Dish',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://restaurantus.com',
        vendor: 'RestaurantUs',
        photoLink: 'https://images.app.goo.gl/dgAFy22f432gd256fdsdg22sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['food', 'restaurants'],
        rating: '',
        reviews: []
    },

    {
        id: '17',
        description: 'Best salmon',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://restaurantus.com',
        vendor: 'RestaurantUs',
        photoLink: 'https://images.app.goo.gl/dgAFydgf32ds352sdfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '36%',
        hashTags: ['food', 'restaurants'],
        rating: '',
        reviews: []
    },

    {
        id: '18',
        description: 'Lays 3 for 2',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://lays.com',
        vendor: 'Lays',
        photoLink: 'https://images.app.goo.gl/dgAFy23123dfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '33%',
        hashTags: ['food', 'products'],
        rating: '',
        reviews: []
    },

    {
        id: '19',
        description: 'Minecraft for 25%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://minecraft.com',
        vendor: 'Minecraft',
        photoLink: 'https://images.app.goo.gl/dgAFy425ds33dfd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '75%',
        hashTags: ['computers', 'games'],
        rating: '',
        reviews: []
    },

    {
        id: '20',
        description: 'Civilization III + IV + V + VI Bundle -70%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://firaxis.com',
        vendor: 'Firaxis Studios',
        photoLink: 'https://images.app.goo.gl/dgA25db3ffd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '70%',
        hashTags: ['computers', 'games'],
        rating: '',
        reviews: []
    },
];

function sortingFunction(firstDate, lastDate) {
    return new Date(firstDate.createdAt) - new Date(lastDate.createdAt);
}

function getAds(skip, top, filterConfig) {
    if (!(typeof skip === 'number'
        && typeof top === 'number'
        && skip >= 0
        && top > 0)) {
        return null;
    }

    let adListSorted;
    let bufList = adList;

    if (filterConfig) {
        if (typeof filterConfig === 'object') {
            if (filterConfig.vendor) {
                bufList = adList.filter(function (config1) {
                    return (config1.vendor === filterConfig.vendor);
                })
            }
            if (filterConfig.createdAt) {
                bufList = adList.filter(function (config2) {
                    return (config2.createdAt === filterConfig.createdAt);
                })
            }
        } else return null;
    }

    adListSorted = bufList.sort(sortingFunction);
    return adListSorted.slice(skip, skip + top);
}

console.log('getAds(0, 10)', getAds(0, 10));
console.log('getAds(10, 5)', getAds(10, 5));
console.log('getAds(0, 10, {vendor: \'Chair Service\'})', getAds(0, 10, {vendor: 'Chair Service'}));
console.log('getAds(-1, 10)', getAds(-1, 10));
console.log('getAds(0, 10, 16)', getAds(0, 10, 16));

function getAd(id) {
    if (typeof id === 'string') {
        for (let i = 0; i < adList.length; i++) {
            if (adList[i].id === id)
                return adList[i];
        }
    } else return null;
}

console.log('getAd(\'1\')', getAd('1'));
console.log('getAd(\'18\')', getAd('18'));
console.log('getAd(1)', getAd(1));

function validateAd(adItem) {
    return !!(typeof adItem.id === 'string'
        && typeof adItem.description === 'string'
        && typeof adItem.createdAt === 'object'
        && typeof adItem.validUntil === 'object'
        && typeof adItem.link === 'string'
        && typeof adItem.vendor === 'string'
        && typeof adItem.discount === 'string'
        && typeof adItem.hashTags === 'object'
        && ((adItem.photoLink && typeof adItem.photoLink === 'string') || !adItem.photoLink)
        && ((adItem.rating && typeof adItem.rating === 'number') || !adItem.rating)
        && ((adItem.reviews && typeof adItem.reviews === 'object') || !adItem.reviews));
}

let testItem = {
        id: '27',
        description: 'Civilization Bundle -70%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://firaxis.com',
        vendor: 'Firaxis Studios',
        photoLink: 'https://images.app.goo.gl/dgA25db3ffd25UP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '70%',
        hashTags: ['computers', 'games'],
        rating: '',
        reviews: []
    };
let testItem2 = {
    id: '27',
    description: 'Civilization Bundle -70%',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'https://firaxis.com',
    vendor: 'Firaxis Studios',
    photoLink: 'https://images.app.goo.gl/dgA25db3ffd25UP9',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: 70,
    hashTags: ['computers', 'games'],
    rating: '',
    reviews: []
};
console.log('validateAd(testItem)', validateAd(testItem));
console.log('validateAd(testItem2)', validateAd(testItem2));

function addAd(adItem) {
    if (validateAd(adItem)) {
        adList.push(adItem)
        return true;
    }
    return false;
}

console.log('addAd(testItem)', addAd(testItem));
console.log('addAd(testItem2)', addAd(testItem2));
console.log('getAds(0, 22)', getAds(0, 22));

function editAd(id, adItem) {
    if (!(typeof id === 'string') || !(typeof adItem === 'object')) {
        return false;
    }
    let indexByID;

    if(adItem.id || adItem.vendor || adItem.createdAt){
        return false;
    }

    for (let i = 0; i < adList.length; i++) {
        if (adList[i].id === id) {
            indexByID = i;
        }
    }
    if (typeof indexByID === 'undefined')
        return false;

    let tempObject = adList[indexByID];
    if (adItem.descriprion) {
        tempObject.descriprion = adItem.descriprion;
    }
    if (adItem.link) {
        tempObject.link = adItem.link;
    }
    if (adItem.photoLink) {
        tempObject.photoLink = adItem.photoLink;
    }
    if (adItem.hastags) {
        tempObject.hastags = adItem.hastags
    }
    if (adItem.discount) {
        tempObject.discount = adItem.discount;
    }
    if (adItem.validUntil) {
        tempObject.validUntil = adItem.validUntil;
    }
    if (adItem.rating) {
        tempObject.rating = adItem.rating;
    }
    if (adItem.reviews) {
        tempObject.reviews = adItem.reviews;
    }

    if (validateAd(tempObject)) {
        adList[indexByID] = tempObject;
        return true;
    } else return false;
}

console.log('getAd(\'1\')', getAd('1'));
console.log('editAd(\'1\', {link: \'shishky.by\'})', editAd('1', {link: 'shishky.by'}));
console.log('editAd(\'1\', {id: 500})', editAd('1', {id: '500'}));
console.log('getAd(\'1\')', getAd('1'));

function removeAd(id) {
    if (typeof id === 'string') {
        for (let i = 0; i < adList.length; i++) {
            if (adList[i].id === id) {
                adList.splice(i, 1);
                return true;
            }
        }
    }
    return false;
}

console.log('removeAd(27)', removeAd(27));
console.log('removeAd(\'27\')', removeAd('27'));
console.log('getAds(0, 22)', getAds(0, 22));