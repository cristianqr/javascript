interface Observer {
    update(data: any);
}

class Publisher {
    observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
        return observer;
    }

    unsubscribe(observer: Observer){
        this.observers = this.observers.filter(o => o !== observer);
    }

    next(data: any) {
        this.observers.forEach(o => o.update(data));
    }
}

class Customer1 implements Observer{
    update(data: any){
        console.log('Customer 1: ', data);
    }
}

class Customer2 implements Observer{
    update(data: any){
        console.log('Customer 2: ', data);
    }
}



const storePublisher = new Publisher();
const customer1 = new Customer1();
const customer2 = new Customer2();

storePublisher.subscribe(customer1);
storePublisher.subscribe(customer2);

storePublisher.next('Arrived the iPhone 20');

storePublisher.unsubscribe(customer2);

storePublisher.next('Arrived the iPhone 21');