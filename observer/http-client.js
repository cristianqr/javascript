// Publisher
var Observable = /** @class */ (function () {
    function Observable(observer) {
        this.observers = [];
        this.baseObserver = observer;
    }
    Observable.prototype.subscribe = function (subscriber) {
        this.observers.push(subscriber);
        if (this.baseObserver) {
            this.baseObserver(this);
        }
        return subscriber;
    };
    Observable.prototype.unsubscribe = function (subscriber) {
        this.observers = this.observers.filter(function (s) { return s !== subscriber; });
    };
    Observable.prototype.next = function (data) {
        this.observers.forEach(function (s) { return s(data); });
    };
    return Observable;
}());
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url) {
        var client = new XMLHttpRequest();
        return new Observable(function (observer) {
            client.onreadystatechange = function () {
                observer.next(client.response);
            };
            client.open('GET', url);
            client.send();
        });
    };
    return HttpClient;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.getUsers = function () {
        return new HttpClient().get('https://reqres.in/api/users');
    };
    return UserRepository;
}());
UserRepository.getUsers().subscribe(function (result) {
    console.log(result);
});
