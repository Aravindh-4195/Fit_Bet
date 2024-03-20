const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const { accounts } = require("./mongo");
const { gymAccounts } = require("./mongo");
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
