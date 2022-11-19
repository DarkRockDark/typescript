const button = document.querySelector('button');

function add(n1: number, n2: number) {
    // no implicit returns, must be declared,
    if (n1+n2 > 16) {
        return n1 + n2;
    }
    return;
};

function clickHandler(message: String) {
    console.log('Clicked' + message);
};

button?.addEventListener('click', () => {
    console.log('Button Clicked!', clickHandler.bind(null));
});