interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;
  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }
  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

const userHistory = new UserHistory("email.com", "name");

const clone = userHistory.clone();
console.log(userHistory);
console.log(clone);
