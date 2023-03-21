//Stockage ou recuparation des donnés
const fs = require("fs");

const fichier = "./data/customers.json";

let dataLayer = {

    getAllCustomers : function (){
        //read json file
        const data = fs.readFileSync(filename);

        //parse to object
        const customers= JSON.parse(data);

        //return cutomers
        return customers;
    },


    getUsers : function (number, page) {
        {

         //read json file
         let test =fs.readFileSync(fichier);

         //parse to object 
         let tableau = JSON.parse(test);

         const total = tableau.length;

         //filter by number and page
         if(number && page){
            tableau = tableau.slice((page- 1) * number, page* number);
         }
         
         //create object with total count and result
         const result ={
            total: total,
            result: tableau

         };
         
         //return customers
         return result;

        }
    }

};



module.exports =dataLayer;