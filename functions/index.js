const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JE7SzL7N8Fyn3oI5xAGttQryp9UlbJERUPDQfzTjrxCDf7ciI6vEjK6xd94UQ7ClzChkXWhwsXvt0Kr86p3fxya00dQlf7QlQ"
);

//API

//app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received, Amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/ecom-challenge-b60f0/us-central1/api
