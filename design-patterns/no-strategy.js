var InformationDialog = /** @class */ (function () {
    function InformationDialog(cdb) {
        this.closeDialogBehabior = cdb;
    }
    InformationDialog.prototype.close = function () {
        this.closeDialogBehabior.close();
    };
    return InformationDialog;
}());
var ErrorDialog = /** @class */ (function () {
    function ErrorDialog(cdb) {
        this.closeDialogBehabior = cdb;
    }
    ErrorDialog.prototype.close = function () {
        this.closeDialogBehabior.close();
    };
    return ErrorDialog;
}());
var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(cdb) {
        this.closeDialogBehabior = cdb;
    }
    ConfirmDialog.prototype.close = function () {
        this.closeDialogBehabior.close();
    };
    return ConfirmDialog;
}());
var DefaultCloseDialogBehabior = /** @class */ (function () {
    function DefaultCloseDialogBehabior() {
    }
    DefaultCloseDialogBehabior.prototype.close = function () {
        console.log('Default close');
    };
    return DefaultCloseDialogBehabior;
}());
var ConfirmCloseDialogBehabior = /** @class */ (function () {
    function ConfirmCloseDialogBehabior() {
    }
    ConfirmCloseDialogBehabior.prototype.close = function () {
        console.log('Are you sure you want delete?');
    };
    return ConfirmCloseDialogBehabior;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.main = function () {
        var dialogs = [
            new InformationDialog(new DefaultCloseDialogBehabior()),
            new ErrorDialog(new DefaultCloseDialogBehabior()),
            new ConfirmDialog(new ConfirmCloseDialogBehabior()),
        ];
        for (var _i = 0, dialogs_1 = dialogs; _i < dialogs_1.length; _i++) {
            var dialog = dialogs_1[_i];
            dialog.close();
        }
    };
    return Application;
}());
new Application().main();
