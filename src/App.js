const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const { accounts } = require("./mongo");
const { gymAccounts } = require("./mongo");
const { userdetails } = require("./mongo");
// const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", cors(), (req, res) => {});

app.listen(8000, () => {
  console.log("port connected");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./components/gymCenter/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/gym/registerGym", upload.single("photo"), async (req, res) => {
  const data = req.body;
  data["photo"] = req.file.filename;
  try {
    await gymAccounts.insertMany([data]);
    res.json("ok");
  } catch (e) {
    res.send({ data: "no" });
  }
});

app.get("/gym/getGyms", async (req, res) => {
  try {
    const data = await gymAccounts.find({});
    res.send({ data: data });
  } catch (e) {
    console.log(e);
  }
});

app.post("/gym/register", upload.single("photo"), async (req, res) => {
  const data = req.body;
  data["photo"] = req.file.filename;
  try {
    await userdetails.insertMany([data]);
    res.json("ok");
  } catch (e) {
    if (e.code === 11000) {
      // Duplicate key error, handle accordingly
      // console.log("Duplicate key error:", e.keyValue);
      res.json("Duplicate key error");
    } else {
      // Other validation errors
      // console.error(e);
      res.status(400).json({ error: "Validation error" });
    }
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  // const { phone, password } = req.body;
  const check = await userdetails.findOne({
    phone: req.body.phone,
    password: req.body.password,
  });
  if (check) {
    res.json("data found");
  } else {
    res.json("data not found");
  }
});
