// 1-Masala
// class Book {
//     constructor(title,author,genre,available){
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.available = available;
//     }

//     getDetails(){
//         return `Kitob nomi:${this.title}, Kitob avtori:${this.author}, Kitob janri:${this.genre}, Kitob mavjudmi:${this.available}`
//     }
//     markAsBorrowed(available){
//         if(this.available == false){
//             return this.available="Kitobni o‘qishga olib ketilgan";
//         }else{
//             return this.available="Kitob qaytarilgan";
//         }
//     }
// }
// const book1 = new Book("Otgan Kunlar", "Abdulla Qodiriy","Baadiy asar",true);
// console.log(book1.markAsBorrowed());
// console.log(book1.getDetails())

// 2-masala
// class Library {
//     constructor() {
//         this.books = []; 
//     }

//     addBook(book){

//     }
// }



// 3-masala
class Bus {
    constructor(id,route,seats){
        this.id = id;
        this.route = route;
        this.seats = seats;
        this.reservedSeats = 0;
    }

    getDetails(){
        return `Id:${this.id}, Yonalish:${this.route}, O'rindiqlar soni:${this.seats}, Band orindiqlar:${this.reservedSeats}`
    }

    reserveSeat() {
        if (this.reservedSeats < this.seats) {
          this.reservedSeats++;
          return `O'rin band qilindi. Hozirgi band qilingan o'rinlar: ${this.reservedSeats}`;
        } else {
          return "Barcha o'rinlar band qilingan.";
        }
      }
    cancelReservation(){
        if(this.reservedSeats>0){
            this.reservedSeats--;
            return `Orindiq boshatildi, hozir band orindiqlar soni ${this.reservedSeats}`
        }
        else{
            return "Band qilingan o'rinlar mavjud emas.";
        }
    }
}



const bus1 = new Bus(1, "Toshkent-Beruniy",42)
console.log(bus1.getDetails());
console.log(bus1.reserveSeat());
console.log(bus1.reserveSeat());
console.log(bus1.cancelReservation());
console.log(bus1.getDetails());


// 5-masala

class Product{
    constructor(id, name, price,stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getDetails(){
        console.log(`Id:${this.id}, Nomi${this.name}, Narxi:${this.price}, Omborda bor:${this.stock},`);
        
    }
}

class OrderItem extends Product{
    constructor(id, name, price,stock,quantity){
        super(id, name, price,stock)
        this.quantity = quantity
    }


    getFullDetails(){
        console.log(`Id:${this.id}, Nomi:${this.name}, Narxi:${this.price}, Omborda bor:${this.stock}kg, Buyurtma miqdori:${this.quantity}`);
    }
    calculatePrice(){
        console.log(this.stock*this.price+"sum");
        
    }

}

const newOrder = new OrderItem(1,"Olma",5000,100,"150kg")
newOrder.getFullDetails()
newOrder.calculatePrice()