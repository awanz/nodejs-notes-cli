// const pangkat2 = function (number) {
//     return number * number
// }

// const pangkat2 = (number) => {
//     return number * number
// }

// const pangkat2 = (x) => x * x

// console.log(pangkat2(3));

const events = {
    name: "Guest",
    guestList: ['awan', 'dina', 'rai'],
    printGuest(){
        console.log("List " + this.name);
        const that = this

        this.guestList.forEach(function (guest){
            console.log(guest+" "+that.name);
        });
        console.log("=============");
        this.guestList.forEach(guest => {
            console.log(guest+" "+this.name);
        });
    }
}

events.printGuest()