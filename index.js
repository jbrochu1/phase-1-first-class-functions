function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function namedFunct(){

    };
}

function returnsAnAnonymousFunction() {
    return function () {};
}