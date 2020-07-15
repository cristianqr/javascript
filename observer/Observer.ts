interface Observer {
    update(data: any): void;
}

//Publisher
class Ishop {
    observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers(data: any) {
        this.observers.forEach(o => o.update(data));
    }
}

class Customer1 implements Observer {
    update(data: any): void {
        console.log('Customer 1: ', data)
    }
}

class Customer2 implements Observer {
    update(data: any): void {
        console.log('Customer 2: ', data)
    }
}

const ishop = new Ishop();
const customer1 = new Customer1();
const customer2 = new Customer2();

ishop.addObserver(customer1);
ishop.addObserver(customer2);

ishop.notifyObservers('Arrive iPhone 20');

console.log('=====================================>')

ishop.removeObserver(customer2);

setTimeout(() => {
ishop.notifyObservers('Arrive iPhone 21');
}, 5000);