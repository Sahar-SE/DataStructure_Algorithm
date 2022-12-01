/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
 var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    var arriveAlice = "";
    var leaveAlice = "";
    var arriveBob = "";
    var leaveBob = "";

    res = [
    new Date(arriveAlice),
    new Date(leaveAlice),
    new Date(arriveBob),
    new Date(leaveBob)
    ];

    return res;
};
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));

/**
 * A=[15, 18] B=[16, 19]
 * join these 2 arrays join=[15,18,16,19]
 * if the array is not sorted first sort the array and then find the subtruction or difference between the 2 elements which
 * sorted now and then add one to it.
 * else if the array was already sorted return zero 
 */