const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {

  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const id = (Math.random() * 10000).toFixed(0);
    const activity = {id, amount, type};
    return activity;
  },

  deposit(amount) {
    account.balance += amount;
    account.transactions.push(account.createTransaction(amount, Transaction.DEPOSIT));    
  },

  withdraw(amount) {
    if (amount > account.balance) {
      return 'Cнятие такой суммы не возможно, недостаточно средств.';
    }
    account.balance -= amount;
    account.transactions.push(account.createTransaction(amount, Transaction.WITHDRAW));        
  },

  getBalance() {
    return account.balance;
  },

  getTransactionDetails(id) {
    for (const objActivity of account.transactions) {
      if (objActivity.id === id) {
        return objActivity;
      }
    }
    return false;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const objActivity of account.transactions) {      
      if (objActivity.type === type) {
        total += objActivity.amount;
      }
    }
    return total;
  },
};


account.deposit(20)
console.group('Test deposit')
console.log('account.balance === 20', account.balance === 20);
console.log('account.transaction', account.transactions[0].amount === 20 && account.transactions[0].type === Transaction.DEPOSIT)
console.groupEnd()

account.withdraw(4)
console.group('Test WITHDRAW')
console.log('account.balance === 20', account.balance === 20);
console.log('account.transaction', account.transactions[1].amount === 4 && account.transactions[1].type === Transaction.WITHDRAW)
console.groupEnd()

console.log('account.getBalance()', account.getBalance() === 16)

console.log('getTransactionDetails()', account.getTransactionDetails('1').amount === 20 && account.getTransactionDetails('1').type === Transaction.DEPOSIT)


account.withdraw(10)
console.log('getTransactionTotal()', account.getTransactionTotal(Transaction.WITHDRAW) === 14)