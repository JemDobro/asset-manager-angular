import { Request } from './models';
// import { User } from './models';


export const REQUESTS: Request[] = [
  {
    quantity : 1,
    status : "checked out",
    type : "Virtual Machine",
    model : "2",
    version: "",
    start : "2018-10-17",
    end : "2018-11-5",
    userId : 1        
  },
  {
    quantity : 3,
    status : "checked out",
    type : "USB Board",
    model : "2222",
    version : "RAM",
    start : "2018-10-22",
    end : "2018-10-29",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connectors",
    model : "4343",
    version : "male",
    start : "2018-10-29",
    end : "2018-11-5",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connector",
    model : "4343",
    version : "male",
    start : "2018-11-13",
    end : "2018-11-20",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connector",
    model : "4343",
    version : "female",
    start : "2018-10-29",
    end : "2018-11-5",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "USB Board",
    model : "2222",
    version : "1",
    start : "2018-10-29",
    end : "2018-11-5",
    userId : 1    
  },
  { 
    quantity : 2,
    status : "cancelled",
    type : "Laptop",
    model : "MacBook Pro",
    version : "2015",
    start : "2018-10-17",
    end : "2018-11-5",
    userId : 1    
  }
]

// export const USERS: User[] = [
//   {
//     firstName : "Tester",
//     lastName : "Testing",
//     username : "testertesting",
//     badgeId : "1234",
//     email : "tester@testing.com",
//     password : "$2a$10$i/fPSubi6/UbffSV2l2nc.yWyzf6MUAdIARS3gT5gJt9dw8z.oXjy"
//   },
//   {
//     firstName : "Bob",
//     lastName : "User",
//     username : "bobuser",
//     badgeId : "5678",
//     email : "bob@user.com",
//     password : "$2a$10$G15Iqp1kmc/4ZjYXubJKH.DZ.yzL6RG0ETzkLrffTwrl19KQ3DSge"
//   },
//   {
//     firstName : "Jane",
//     lastName : "User",
//     username : "janeuser",
//     badgeId : "1111",
//     email : "jane@user.com",
//     password : "$2a$10$.3iXdEXdPhkC/5vbtS9tTukPtytOC.RQg.OhJwmQxV0aMMyABcrFK"
//   }
