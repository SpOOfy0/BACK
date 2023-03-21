const pres= require("./presentation/consolePress");
const apiServ= require("./presentation/apiPres");
const express = require('express');
const app = express();
const port =3001;

function main(){
    app.use(express.static('public'));
    apiServ.start(port);
    console.log("its functionning");
    pres.start();
}
main();



//For the Data server use http://localhost:3001/api/customers
//For the Liste in internet server use http://localhost:3001/api/customers/liste

