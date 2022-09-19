const randomNum = num => { 
    return Math.floor(Math.random() * num)
}

const motivator = { 
    inspMessage: ['We cannot solve problems with the kind of thinking we employed when we came up with them.', 'Learn as if you will live forever, live like you will die tomorrow.', 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.', 'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.', 'When you change your thoughts, remember to also change your world.'],

    cars: ['Porsche 911 Turbo S', 'Ferrari 458', 'Lamborghini STO'],

    countries: ['the Bahamas', 'Saint-Tropez', ' the Maldvies']
}

let newArray = []; 

for (let item in motivator) { 

    let itemIndex = randomNum(motivator[item].length);

    switch (item) { 
        case 'inspMessage': 
        newArray.push(`Your motivational quote for the day is: ${motivator[item][itemIndex]}`)
        break
        case 'cars': 
        newArray.push(`You will one day drive a: ${motivator[item][itemIndex]}!`)
        break
        case 'countries': 
        newArray.push(`One day you will be relaxing on a beach in ${motivator[item][itemIndex]}!`)
        break
    default: 
        newArray.push('Oops... Something went wrong!')
    }
}


console.log(newArray.join('\n \n'))
