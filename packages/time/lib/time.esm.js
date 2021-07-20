var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };

var time = {
    delay: delay
};

export { time };
