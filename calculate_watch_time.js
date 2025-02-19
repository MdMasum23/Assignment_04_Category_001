function calculateWatchTime(times) {

    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let time of times) {
        totalSeconds += time;
    }

    let hour = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    let minute = Math.floor(remainingSeconds / 60);
    let second = remainingSeconds % 60;

    return { hour, minute, second };
}

console.log(calculateWatchTime([100, 99, 119, 300])); 
console.log(calculateWatchTime([1000, 2000, 725])); 
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600]));
console.log(calculateWatchTime([100, 3800, "90"]));
