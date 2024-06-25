"use strict";
/**
 * START: Follow the instructions below.
 */
// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.
function identity(value) {
    return value;
}
let value1 = identity("France");
let value2 = identity(67413000);
// ----
async function fetchData(url) {
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
}
// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.
(async () => {
    try {
        let user = await fetchData("https://jsonplaceholder.typicode.com/users/1");
        console.log(user.name);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
})();
// ----
