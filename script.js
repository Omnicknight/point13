
const slides = [
    new Slide(
    1,
    'Poo 1',
    'https://memepedia.ru/wp-content/uploads/2019/06/images-you-can-hear.png',
    'Content 1',
),
new Slide(
    2,
    'Poo 2',
    'https://memepedia.ru/wp-content/uploads/2019/06/images-you-can-hear.png',
    'Content 2'
),
new Slide(
    3,
    'Poo 3',
    'https://memepedia.ru/wp-content/uploads/2019/06/images-you-can-hear.png',
    'Content 3'
),];



slides.forEach(({title}) => {
    console.log({title});
});

// const listOfUsers = [
//     {
//         id: 1,
//         name: 'Petya',
//         avatar: '',
//         about: '...',
//         taxesPayed: true,
//         debt: 0,
//     },
//     {
//         id: 2,
//         name: 'Vasya',
//         avatar: '',
//         about: '...',
//         taxesPayed: false,
//         debt: 1000,
//     },
//     {
//         id: 3,
//         name: 'Vasya',
//         avatar: '',
//         about: '...',
//         taxesPayed: false,
//         debt: 35000,
//     },
// ];

// console.log(JSON.stringify(listOfUsers));

// const newArr = slides.map((slide) => `${slide.title}-${slide.content}`);
// console.log(newArr);

// const listOfSlidesFromUsers = listOfUsers.map(
//     (user) => new Slide(user.id, user.name, user.avatar, user.about)
// );

// const userWithAvatar = listOfUsers.filter((user) => !!user.avatar);
// // listOfSlidesFromUsers[0].toggle();

// console.log(listOfSlidesFromUsers);
// console.log(userWithAvatar);

// const atLeastOne = listOfUsers.some((user) => !user.taxesPayed);
// const allOfUsers = listOfUsers.every((user) => !user.taxesPayed);

// console.log(atLeastOne);
// console.log(allOfUsers);

// const debt = listOfUsers.reduce((acc,next) => acc + next.debt, 0);

// console.log(debt);


