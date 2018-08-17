var importcrypt = require('cryptr');
var selectclass = new importcrypt('myTotalySecretKey');
const sendmail = require('sendmail')();

var msg = "hi sriram";
console.log("Before Encryption(cryptr):"+msg);

var protectedmsg = selectclass.encrypt(msg);
console.log("After Encrytion:"+protectedmsg);


var deprotectedmsg = selectclass.decrypt(protectedmsg);
console.log(deprotectedmsg);



 var oneclass = new importcrypt('cipher');
 var secondclass = new importcrypt('aes256');
 var inputmsg="";
 var secondencrypt="";
 var onedecrypt;
 var twodecrypt;

//  password encryption
var pwd = "abc@123"
var passwordhash = require('password-hash');

var test = passwordhash.generate(pwd);
var isa = passwordhash.verify(pwd,test);
console.log("password:"+isa);
console.log(pwd+" "+test);


// 

console.log(inputmsg+" "+secondencrypt);
var fs = require('fs');
fs.readFile('ram.txt',function(err,data){
    if(!err)
    {
        if(!undefined)
        console.log("=============================================================================================");
        console.log("Buffer:"+data);
        console.log("=============================================================================================");
        console.log(data.toString());
        console.log("=============================================================================================");

         inputmsg = oneclass.encrypt(data);
         secondencrypt = secondclass.encrypt(data);
        //creating and writing a file
        //  fs.writeFileSync('write.txt',inputmsg,function(err){
        //     if(err)
        //     {
        //     throw err;
        //     }
        // });


//mailconcept
 
// sendmail({
//     from: 'no-reply@yourdomain.com',
//     to: 'Sriramprasath.s@mnw.co.in,Arumugam.k@mnw.co.in,desingraja.r@mnw.co.in',
//     subject: "encryption",
//     html:inputmsg,
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });
//
         onedecrypt = oneclass.decrypt(inputmsg);
         twodecrypt = secondclass.decrypt(secondencrypt);
         console.log("=============================================================================================");
         console.log("1. Encrypted Message(ciper): "+inputmsg);
         console.log("2. Encrypted Message(aes256):"+secondencrypt);
         console.log("=============================================================================================");
         console.log("1. decrypted Message(ciper): "+onedecrypt);
         console.log("2. decrypted Message(aes256):"+twodecrypt);
    }
});




