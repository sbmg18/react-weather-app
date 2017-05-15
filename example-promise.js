function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(21);
            reject("Location not found");
        }, 1000);
    });
}

getTempPromise("Kota").then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Invalid arguments.");
            }
        }, 1000)
    });
}

addPromise(10, 5).then((data) => {
    console.log("Result:", data);
}, (err) => {
    console.log("Error:", err);
});

function getTempCallback(location, callback) {
    callback("Location not found");

    setTimeout(function() {
        callback(undefined, 241);
    }, 2000);
    
}

getTempCallback('Kota', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
    
})