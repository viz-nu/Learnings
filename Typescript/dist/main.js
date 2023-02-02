var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
