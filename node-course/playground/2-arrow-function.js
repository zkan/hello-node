// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

const square = x => x * x

console.log(square(3))

// This one below canNOT access name (arrow functions don't bind their own this value
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

// This one below can access name
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name)
//     }
// }

// This one below can access name but cannot access this.name in for loop
// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name)

//         this.guestList.forEach(function(guest) {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()