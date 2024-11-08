import jsonData from './../userData.json' assert { type: 'json' };
import { expect } from 'chai';
import axios from 'axios';
//import dotenv from 'dotenv';
//import storeToken from './../setEnvVar.js';
import dotenv from 'dotenv';
//import fs from 'fs';

dotenv.config();





const length = jsonData.length;
const customer2 = jsonData[length-2].phone_number ;

describe("transaction", async () => {

 it("System can deposit to agent successfully", async ()=> {
   // const agentAccount = jsonData[jsonData.length - 1];
        const { data } = await axios.post(`${process.env.base_url}/transaction/deposit`, {

            "from_account":"SYSTEM",
           // "to_account": agentAccount,
          "to_account": jsonData[length-1].phone_number , // Agent Account
            "amount": 2000
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${process.env.token}`,
                    "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                }
            });
        console.log(data);
        expect(data.message).to.contains("Deposit successful");




        
         
    });



    it("Deposit 1500 tk to a customer from the agent account", async ()=> {
        // const agentAccount = jsonData[jsonData.length - 1];
             const { data } = await axios.post(`${process.env.base_url}/transaction/deposit`, {
     
                 "from_account":jsonData[length-1].phone_number , // Agent Account,
                // "to_account": agentAccount,
               "to_account": jsonData[length-3].phone_number , // First customer Account
                 "amount": 1500
             },
                 {
                     headers: {
                         'Content-Type': 'application/json',
                         "Authorization": `Bearer ${process.env.token}`,
                         "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                     }
                 });
             console.log(data);
             expect(data.message).to.contains("Deposit successful");
     
     
     
     
             
              
         });





         it("Withdraw 500 tk by the customer to the agent", async ()=> {
            // const agentAccount = jsonData[jsonData.length - 1];
                 const { data } = await axios.post(`${process.env.base_url}/transaction/withdraw`, {
         
                     "from_account":jsonData[length-3].phone_number , // First customer Account
                    // "to_account": agentAccount,
                   "to_account": jsonData[length-1].phone_number , // Agent Account,
                     "amount": 500
                 },
                     {
                         headers: {
                             'Content-Type': 'application/json',
                             "Authorization": `Bearer ${process.env.token}`,
                             "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                         }
                     });
                 console.log(data);
                 expect(data.message).to.contains("Withdraw successful");
         
         
         
         
                 
                  
             });




             it("Send 500 TK to another customer", async ()=> {
                // const agentAccount = jsonData[jsonData.length - 1];
                     const { data } = await axios.post(`${process.env.base_url}/transaction/sendmoney`, {
             
                         "from_account":jsonData[length-3].phone_number , // First customer Account
                        // "to_account": agentAccount,
                       "to_account": jsonData[length-2].phone_number , // Second  Account,
                         "amount": 500
                     },
                         {
                             headers: {
                                 'Content-Type': 'application/json',
                                 "Authorization": `Bearer ${process.env.token}`,
                                 "X-AUTH-SECRET-KEY":`${process.env.secretKey}`,
                             }
                         });
                     console.log(data);
                     expect(data.message).to.contains("Send money successful");
             
             
             
             
                     
                      
                 });




                 it("Second Customer Pay 100 tk to the Marchent", async ()=> {
                    // const agentAccount = jsonData[jsonData.length - 1];
                         const { data } = await axios.post(`${process.env.base_url}/transaction/payment`, {
                 
                             "from_account":jsonData[length-2].phone_number , // Second  customer Account
                            // "to_account": agentAccount,
                           "to_account": "01565636779 ", // Marchent  Account,
                             "amount": 100
                         },
                             {
                                 headers: {
                                     'Content-Type': 'application/json',
                                     "Authorization": `Bearer ${process.env.token}`,
                                     "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                                 }
                             });
                         console.log(data);
                         expect(data.message).to.contains("Payment successful");
                 
                 
                 
                 
                         
                          
                     });





                     it("Second Customer Pay 100 tk to the Marchent", async ()=> {
                        // const agentAccount = jsonData[jsonData.length - 1];
                             const { data } = await axios.post(`${process.env.base_url}/transaction/payment`, {
                     
                                 "from_account":jsonData[length-2].phone_number , // Second  customer Account
                                // "to_account": agentAccount,
                               "to_account": "01565636779 ", // Marchent  Account,
                                 "amount": 100
                             },
                                 {
                                     headers: {
                                         'Content-Type': 'application/json',
                                         "Authorization": `Bearer ${process.env.token}`,
                                         "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                                     }
                                 });
                             console.log(data);
                             expect(data.message).to.contains("Payment successful");
                     
                     
                     
                     
                             
                              
                         });

                 
                         it("Check balance of the Second  customer", async ()=> {
                            // const agentAccount = jsonData[jsonData.length - 1];
                                 const { data } = await axios.get(`${process.env.base_url}/transaction/balance/${customer2}`, 
                                     {
                                         headers: {
                                             'Content-Type': 'application/json',
                                             "Authorization": `Bearer ${process.env.token}`,
                                             "X-AUTH-SECRET-KEY":`${process.env.secretKey}`
                                         }
                                     });
                                 console.log(data);
                                 expect(data.message).to.contains("User balance");
                         
                         
                         
                         
                                 
                                  
                             });




                              //delay 1000 ms
     afterEach(async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
    });
                    
        
    
    





    
});