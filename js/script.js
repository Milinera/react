const objs = {
    name: 'tiny',
    size: 'medd',
    lvl: 3,
    form: {
        first: 2,
        sec: 3
    },
    calcs: function(num) {
        return num * 3;
    }
}

// console.log(objs.calcs(2));

console.log(Object.keys(objs).length)