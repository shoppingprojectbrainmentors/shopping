const express = require("express");
var router = express.Router();
const admin = require("../../models/admin/adminRegister");
const companydetails = require("../../models/admin/companydetails");
const financialdetails=require("../../models/admin/financialdetails");
const cardDetails=require("../../models/admin/cardDetails")
//const adminOperations = require("../../db/crud/admin/adminCrud");
router.post("/register",(request,response)=>{
    var name=request.body.name;
    var userid=request.body.userid;
    var password=request.body.password;
    var reenterpassword=request.body.reenterpassword;
    var phoneno=request.body.phoneno;
    var dob=request.body.dob;
  //  console.log("Inside router.post"+phone_no+""+dob+""+signature);    
    var adminObject=new admin(name,userid,password,reenterpassword,phoneno,dob);
   // console.log("Inside router.post"+adminObject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.register(adminObject,response);
    });

    router.post("/companydetails",(request,response)=>{
    console.log("Inside router.post method with request object :")
    console.log(request.body);
    var companyname=request.body.companyname;
    var description=request.body.description;
    var tagline=request.body.tagline;
    var logo=request.body.logo;
    var line1=request.body.line1;
    var line2=request.body.line2;
    var city=request.body.city;
    var state=request.body.state;
    var country=request.body.country;
    var zipcode=request.body.zipcode;
    var longitude=request.body.longitude;
    var latitude=request.body.latitude;
    var phoneno=request.body.phoneno;
    var officeno=request.body.officeno;
    var emailid=request.body.emailid;
    var fax=request.body.fax;
    //console.log("Inside router.post"+companyname+""+description+""+phoneno);
    var companydetailsobject=new companydetails(companyname,description,tagline,logo,line1,line2,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax);
    console.log("Inside router.post");
    console.log(companydetailsobject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.companydetails(companydetailsobject,response);
    });
    router.post("/financialdetails",(request,response)=>{
    var accountno=request.body.accountno;
    var accounttype=request.body.accounttype;
     var holdername=request.body.holdername;
    var bankname=request.body.bankname;
    var branch=request.body.branch;
    var ifsc=request.body.ifsc;
    var financialdetailsobject=new financialdetails(accountno,accounttype,holdername,bankname,branch,ifsc);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.financialdetails(financialdetailsobject,response);
    console.log("Inside router.post");
    console.log(financialdetailsobject);
    });
    router.post("/cardDetails",(request,response)=>{
      var cardno = request.body.cardno;
      var cardholdername = request.body.cardholdername;
      var cvv = request.body.cvv;
      var cardtype = request.body.cardtype;
      var expirydate=request.body.expirydate;
      var cardprovider=request.body.cardprovider;
      var bank=request.body.bank;
      var branch=request.body.branch;
      var cardDetailsObject=new cardDetails(cardno,cardholdername,cvv,cardtype,expirydate,cardprovider,bank,branch);
      const adminOperations=require('../../db/crud/admin/adminCrud');
      
      console.log("Inside router.post");
    console.log(cardDetailsObject);
    })
  
     module.exports = router;
