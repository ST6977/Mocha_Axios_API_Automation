import { expect } from 'chai';
import axios from 'axios';
import dotenv from 'dotenv';
import storeToken from './../setEnvVar.js';
import { faker } from '@faker-js/faker';
import generateRandomId from './../Utils.js';
import jsonData from './../userData.json' assert { type: 'json' };
import fs from 'fs';

dotenv.config();

describe("Admin Login", async () => {

    it("Admin can login by valid creds", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/login`, {
            "email": "admin@roadtocareer.net",
            "password": "1234",
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        // console.log("Login response data:", data);
        expect(data.message).to.equal("Login successful");
        storeToken('token', data.token);
    });

    it("Admin can create first Customer", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/create`, {
            "name": `Axios user ${faker.person.firstName()}`,
            "email": `${faker.internet.email()}`,
            "password": "1234",
            "phone_number": `01502${generateRandomId(100000, 999999)}`,
            "nid": "123456789",
            "role": "Customer"
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${process.env.token}`,
                    "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
                }
            });

        // console.log("User creation response data:", data);
        jsonData.push(data.user);
        // console.log("User creation response data 2:", jsonData);
       // fs.writeFile('./userData.json', JSON.stringify(jsonData, null, 2)  , 'utf8');
       const jsonString = JSON.stringify(jsonData, null, 2);

        fs.writeFile('./userData.json', jsonString, 'utf8', (err) => {
            if (err) {
                console.error("An error occurred while writing the JSON file:", err);
                return;
            }
            console.log("JSON file has been saved successfully.");
        });
       // console.log("Updated jsonData:", jsonData);
    });




    it("Admin can create second  Customer", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/create`, {
            "name": `sumaiya ${faker.person.firstName()}`,
            "email": `${faker.internet.email()}`,
            "password": "1234",
            "phone_number": `01502${generateRandomId(100000, 999999)}`,
            "nid": "123456789",
            "role": "Customer"
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${process.env.token}`,
                    "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
                }
            });

        // console.log("User creation response data:", data);
        jsonData.push(data.user);
        // console.log("User creation response data 2:", jsonData);
       // fs.writeFile('./userData.json', JSON.stringify(jsonData, null, 2)  , 'utf8');
       const jsonString = JSON.stringify(jsonData, null, 2);

        fs.writeFile('./userData.json', jsonString, 'utf8', (err) => {
            if (err) {
                console.error("An error occurred while writing the JSON file:", err);
                return;
            }
            console.log("JSON file has been saved successfully.");
        });
       // console.log("Updated jsonData:", jsonData);
    });



    it("Admin can create Agent", async () => {
        const { data } = await axios.post(`${process.env.base_url}/user/create`, {
            "name": `tanha ${faker.person.firstName()}`,
            "email": `${faker.internet.email()}`,
            "password": "1234",
            "phone_number": `01502${generateRandomId(100000, 999999)}`,
            "nid": "123456789",
            "role": "Agent"
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${process.env.token}`,
                    "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
                }
            });

        // console.log("User creation response data:", data);
        jsonData.push(data.user);
        // console.log("User creation response data 2:", jsonData);
       // fs.writeFile('./userData.json', JSON.stringify(jsonData, null, 2)  , 'utf8');
       const jsonString = JSON.stringify(jsonData, null, 2);

        fs.writeFile('./userData.json', jsonString, 'utf8', (err) => {
            if (err) {
                console.error("An error occurred while writing the JSON file:", err);
                return;
            }
            console.log("JSON file has been saved successfully.");
        });
       // console.log("Updated jsonData:", jsonData);
    });




     //delay 1000 ms
     afterEach(async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
    });







});
