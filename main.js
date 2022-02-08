const shopping = [
    'Apples',
    'Bannanas',
    'Pears',
    'Oranges',
];

async function main() {
    console.log('Here is your shopping list');
    console.log('==========================');
    shopping.forEach(element => console.log( '- ' + element));
}

main();