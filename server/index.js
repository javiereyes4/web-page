const nodemailer = require('nodemailer');
var express = require('express');

var app = express();

var auth = {
  type: 'OAuth2',
  user: process.env.USUARIO,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken,
  accessToken: process.env.accessToken
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
  // eslint-disable-next-line no-undef
  // response = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   message: req.body.message
  // }

  var mailOptions = {
      from: req.query.mail,
      to: req.query.mail,
      subject: 'Solicitud de Información de ' + req.query.name,
      html: 'Mensaje' + req.query.messaje,
  };
var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
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


// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   console.log("Javier Reyes");
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);