"use strict";
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter((com) => com.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Saving user: ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Deleting user: ${userId}`);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReciever(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller = new Controller();
controller.addReciever(new UserService());
controller.run();
