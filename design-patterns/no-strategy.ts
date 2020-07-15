interface Dialog {
    close();
}

class InformationDialog implements Dialog {
    closeDialogBehabior: CloseDialogBehabior;
    constructor(cdb: CloseDialogBehabior) {
        this.closeDialogBehabior = cdb;
    }
    close() {
        this.closeDialogBehabior.close();
    }
}

class ErrorDialog implements Dialog {
    closeDialogBehabior: CloseDialogBehabior;
    constructor(cdb: CloseDialogBehabior) {
        this.closeDialogBehabior = cdb;
    }
    close() {
        this.closeDialogBehabior.close();
    }
}

class ConfirmDialog implements Dialog {
    closeDialogBehabior: CloseDialogBehabior;
    constructor(cdb: CloseDialogBehabior) {
        this.closeDialogBehabior = cdb;
    }
    close() {
        this.closeDialogBehabior.close();
    }
}

interface CloseDialogBehabior {
    close();
}

class DefaultCloseDialogBehabior implements CloseDialogBehabior {
    close() {
        console.log('Default close');
    }
}

class ConfirmCloseDialogBehabior implements CloseDialogBehabior {
    close() {
        console.log('Are you sure you want delete?');
    }
}

class Application {
    main() {
        const dialogs: Dialog[] = [ 
            new InformationDialog(new DefaultCloseDialogBehabior()),
            new ErrorDialog(new DefaultCloseDialogBehabior()),
            new ConfirmDialog(new ConfirmCloseDialogBehabior()),
        ];

        for(const dialog of dialogs) {
            dialog.close();
        }
    }
}

new Application().main();