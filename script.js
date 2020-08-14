const a = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
];
const b = [];

const sum = (value, i) => {
    console.log(value*2);
};

const multiple = (value, i) => {
    return (value%2);
};


const forEach = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i);
    };
};

forEach(a, sum);
console.log(a);


const map = (arr, cb) => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2[i] = cb(arr[i], i, arr);
    };
    return arr2;
};


const filter = (arr, cb) => {
    var arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)){
        arr2.push(arr[i]);
        };
    };
    return arr2;
};

const qwer = filter(a, multiple);
console.log(qwer);


const some = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            return true;
        };
    };
    return false;
};

const asdf = some(a, (value) => {
    return value > 10;
});
console.log(asdf);


const every = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(!cb(arr[i], i, arr)) {
            return false;
        };
    };
    return true;
};

const fg = every(a, (value) => {
    return value < 10;
});
console.log(fg);


const reduce = (arr, cb, startValue) => {
    var result = startValue;
    for(let i = 0; i < arr.length; i++) {
        result = cb.call(null, result, arr[i], i, arr);
    };
    return result;
};

const res = reduce(a, (result, num) => {
    return result + num;
}, 0);
console.log(res);


const find = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            return arr[i];
        };
    };
    return undefined;
};

const retro = (age) => {
    return age > 4;
};
console.log(find(a, retro));
