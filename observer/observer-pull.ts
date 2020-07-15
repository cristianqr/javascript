// @ts-ignore-start
interface Observer {
    update(): void;
}

interface IPublisher {
    getSport(): string;

    getTechnology(): string;
}

// Publisher
class ElComercio implements IPublisher{
    observers: Observer[] = [];
    state: any;

    addObserver(observer: Observer) {
        this.observers.push(observer);
        return observer;
    }

    removeObserver(observer: Observer){
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObserver(data: any) {
        this.state = data;
        this.observers.forEach(o => o.update());
    }

    getSport(): string{
        return this.state.sport;
    }

    getTechnology(): string {
        return this.state.technology;
    }
}

class Customer1 implements Observer{
    constructor(private publisher: IPublisher) {
    }
    update(){
        console.log('Customer 1: ', this.publisher.getSport());
    }
}

class Customer2 implements Observer{
    constructor(private publisher: IPublisher) {
    }
    update(){
        console.log('Customer 2: ', this.publisher.getTechnology());
    }
}



const elComercio = new ElComercio();
const customer1 = new Customer1(elComercio);
const customer2 = new Customer2(elComercio);

elComercio.addObserver(customer1);
elComercio.addObserver(customer2);

elComercio.notifyObserver({
    sport: 'How does coronavirus affect fall sports schedule?',
    technology: 'iOS 14 beta: how to get access to the new iPhone software'
});

console.log('======================================================================>');

setTimeout(() => {
    elComercio.notifyObserver({
        sport: 'Auston Matthews confirms he had COVID-19',
        technology: `Linux founder tells Intel to stop inventing 'magic instructions' and 'start fixing real problems'`
    });
}, 5000);

// @ts-ignore-end
