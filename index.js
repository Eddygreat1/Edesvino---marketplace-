
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* =========================
   HOMEPAGE
========================= */


app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Edesvino Marketplace</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px 20px;
          background: #f5f5f5;
        }

        .box {
          max-width: 600px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
        }

        button {
          padding: 15px 25px;
          margin: 10px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .shop {
          background: #222;
          color: white;
        }

        .seller {
          background: green;
          color: white;
        }
      </style>
    </head>

    <body>
      <div class="box">
        <h1>Edesvino Marketplace</h1>

        <p>Buy and sell products online</p>

        <p>
          A marketplace where sellers can list products
          and customers can shop online.
        </p>

        <button
          class="shop"
          onclick="window.location.href='/products'"
        >
          Shop Products
        </button>

        <button
          class="seller"
          onclick="window.location.href='/seller/register'"
        >
          Become a Seller
        </button>

        <h3>Products Coming Soon</h3>
      </div>
    </body>
    </html>
  `);
});

   

     
   

   


/* =========================
   SELLER REGISTRATION PAGE
========================= */

app.get("/seller/register", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Seller Registration - Edesvino Marketplace</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 20px;
          }

          .form-box {
            max-width: 500px;
            margin: 30px auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          h1 {
            text-align: center;
          }

          label {
            font-weight: bold;
          }

          input {
            width: 100%;
            padding: 12px;
            margin-top: 6px;
            margin-bottom: 18px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 6px;
          }

          button {
            width: 100%;
            padding: 14px;
            background: #008000;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
          }

          a {
            display: block;
            text-align: center;
            margin-top: 20px;
          }
        </style>
      </head>

      <body>

        <div class="form-box">

          <h1>Become a Seller</h1>

          <form method="POST" action="/seller/register">

            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
            />

            <label>Store / Business Name</label>
            <input
              type="text"
              name="storeName"
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              required
            />

            <button type="submit">
              Create Seller Account
            </button>

          </form>

          <a href="/">
            ← Back to Marketplace
          </a>

        </div>

      </body>
    </html>
  `);
});


/* =========================
   SELLER REGISTRATION
========================= */

app.post("/seller/register", (req, res) => {

  const {
    fullName,
    email,
    phone,
    storeName,
    password
  } = req.body;

  if (
    !fullName ||
    !email ||
    !phone ||
    !storeName ||
    !password
  ) {
    return res.send(`
      <h1>Registration Error</h1>
      <p>Please fill in all seller registration fields.</p>
      <a href="/seller/register">
        Go back
      </a>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Seller Registration Successful</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>

      <body>

        <h1>Seller Registration Successful!</h1>

        <p>
          Welcome to Edesvino Marketplace,
          ${fullName}.
        </p>

        <p>
          Your store
          <strong>${storeName}</strong>
          has been registered.
        </p>

        <p>
          Email:
          ${email}
        </p>

        <p>
          Phone:
          ${phone}
        </p>

        <a href="/">
          Return to Marketplace
        </a>

      </body>
    </html>
  `);
});


/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(
    `Edesvino Marketplace is running on port ${PORT}`
  );
});

