'use strict'


// const getTotalBalanceByGender = (users, gender) => {
//   // Фільтруємо масив користувачів
//   const filteredUsers = users.filter(user => user.gender === gender);
  
//   // обчислення загального балансу користувачів з відфільтрованого масиву
//   const totalBalance = filteredUsers.reduce((total, user) => total + user.balance, 0);
  
//   // Повертаємо загальний баланс
//       return totalBalance;
    

// };

// const getTotalBalanceByGender = (users, gender) => {
    
//     const balans = users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
    
//     return balans;
// };

const getTotalBalanceByGender = (users, gender) => {
    
    return users  
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
    
};


const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863