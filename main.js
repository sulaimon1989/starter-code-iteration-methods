// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


//const kata1results =12345
const newArray = users.filter(user => user.isActive === true)

printKata(1,newArray)

const map1 = users.map(user=> user.email)

printKata(2,map1)

const some1 = users.some(user=> user.company === "OVATION")

printKata(3,some1)


const found = users.find(user => user.age > 38)

printKata(4,found)

const newbalance = users.filter(user => user.isActive).find(user => user.age > 38)

printKata(5,newbalance)

const balance1 = users.filter(user => user.company === "ZENCO").map(user => user.balance)

printKata(6,balance1)

const ageUser = users.filter(user => user.tags.includes("fugiat")).map(user=> user.age)
printKata(7, ageUser)












