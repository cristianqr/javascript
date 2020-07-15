// Publisher
class Observable {
    private baseObserver;
    private observers: any[] = [];

    constructor(observer?) {
        this.baseObserver = observer;
    }

    subscribe(subscriber: any){
        this.observers.push(subscriber);
        if(this.baseObserver) {
            this.baseObserver(this);
        }
        return subscriber;
    }

    unsubscribe(subscriber: any){
        this.observers = this.observers.filter(s => s !== subscriber);
    }

    next(data) {
        this.observers.forEach(s => s(data));
    }
}

class HttpClient {
    get(url: string): Observable {
        const client = new XMLHttpRequest();
        return new Observable((observer) => {
            client.onreadystatechange = () => {
                observer.next(client.response);
            }
            client.open('GET', url);
            client.send();
        });
    }
}

class UserRepository {
    static getUsers(): Observable {
        return new HttpClient().get('https://reqres.in/api/users');
    }
}

UserRepository.getUsers().subscribe((result) => {
    console.log(result);
})