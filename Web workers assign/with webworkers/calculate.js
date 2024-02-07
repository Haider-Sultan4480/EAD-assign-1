// calculate.js
self.onmessage = function(event) {
    calculate(event.data);
};

function calculate(data) {
    var output;
    for (var i = 0; i <= data; i++) {
        output = i;
        if (i % 20000000 === 0) {
            console.log(i + ' iterations over');
        }
    }
    self.postMessage('All iterations over');
}
