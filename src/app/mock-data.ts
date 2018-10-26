import { Request } from './models';

export const REQUESTS: Request[] = [
  {
    quantity : 1,
    status : "checked out",
    type : "Virtual Machine",
    model : "2",
    version: "",
    start : "October 21, 2018",
    end : "November 21, 2018",
    userId : 1        
  },
  {
    quantity : 3,
    status : "checked out",
    type : "USB Board",
    model : "2222",
    version : "RAM",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connectors",
    model : "4343",
    version : "male",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connector",
    model : "4343",
    version : "male",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "RF Connector",
    model : "4343",
    version : "female",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 1,
    status : "pending",
    type : "USB Board",
    model : "2222",
    version : "1",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 1,
    status : "cancelled",
    type : "test",
    model : "test",
    version : "3",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  {
    quantity : 3,
    status : "cancelled",
    type : "g",
    model : "g",
    version : "d",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  },
  { 
    quantity : 2,
    status : "cancelled",
    type : "Laptop",
    model : "MacBook Pro",
    version : "2015",
    start : "ISODate(2018-09-18T00:00:00Z)",
    end : "ISODate(2018-09-21T00:00:00Z)",
    userId : 1    
  }
];