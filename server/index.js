const nodemailer = require('nodemailer');
var express = require('express');

var app = express();

var auth = {
  user: process.env.USUARIO,
  pass: process.env.PASSWORD
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/api/send', function(req, res) {

  console.log(req.query.name);
  console.log(req.query.mail);
  console.log(req.query.messaje);

  var mailOptions = {
      from: req.query.mail,
      to: req.query.mail,
      subject: 'Solicitud de Información de ' + req.query.name,
      html: 'Mensaje :' + req.query.messaje,
  };
var transporter = nodemailer.createTransport({
      host: 'mail.aagbolsasplasticas.com.co',
      port: 465,
      secure: true,
      auth: auth
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
  });
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);