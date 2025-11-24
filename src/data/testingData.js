import weatherIcons from "./weatherIcons";

const weeklyForecast = [
    {
    min:25,
    max:65,
    humid:6,
    precip:10,
    wind:2,
    gust:10,
    conditions:'scattered showers',
    desc:'sunny miday with storms forming in the afternoon.',
    icon:weatherIcons[9].src,
    precipDetails: [
        {
            title:'Precipitation Chance',
            data: '10%'
        },
        {
            title: 'Precipitation Type',
            data: 'Rain'
        },
        {
            title: 'Precipitation Amount',
            data: '2 inches'
        }
    ],
    windDetails: [
        {
            title: 'Wind Speed',
            data: '2 mph'
        },
        {
            title: 'Wind Gusts',
            data: '10 mph'
        },
        {
            title: 'Wind Direction',
            data: 'Northwest'
        }
    ]
    },
    {
    min:'-15',
    max:0,
    humid:6,
    precip:85,
    wind:2,
    gust:10,
    conditions:'sooo much hail',
    desc:'strong hailstorms dominate the day\'s outlook',
    icon:weatherIcons[6].src,
    },
    {
    min:100,
    max:212,
    humid:100,
    precip:100,
    wind:25,
    gust:80,
    conditions:'boiling surfaces abound',
    desc:'instant death awaits those travelling today, pack your sunscreen!',
    icon:weatherIcons[0].src
    },
    {
    min:0,
    max:23,
    humid:70,
    precip:100,
    wind:3,
    gust:8,
    conditions:'snow showers likely',
    desc:'between 3-5 inches of snow',
    icon:weatherIcons[8].src
    },
    {
    min:25,
    max:65,
    humid:6,
    precip:0,
    wind:2,
    gust:10,
    conditions:'mostlysunny',
    desc:'sunny miday with storms forming in the afternoon.',
    icon:weatherIcons[0].src
    },
    {
    min:25,
    max:65,
    humid:6,
    precip:0,
    wind:2,
    gust:10,
    conditions:'mostlysunny',
    desc:'sunny miday with storms forming in the afternoon.',
    icon:weatherIcons[0].src
    },
    {
    min:25,
    max:65,
    humid:6,
    precip:0,
    wind:2,
    gust:10,
    conditions:'mostlysunny',
    desc:'sunny miday with storms forming in the afternoon.',
    icon:weatherIcons[0].src
    },
]
export default weeklyForecast;