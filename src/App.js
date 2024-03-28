const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const { accounts } = require("./mongo");
const { gymProfiles } = require("./mongo");
const { userdetails } = require("./mongo");
const { trainerDetails } = require("./mongo");
const { register } = require("./mongo");

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
  const data_gymReg = req.body;
  console.log(req.body);
  data_gymReg["photo"] = req.file.filename;
  // console.log(data);
  try {
    await gymProfiles.insertMany([data_gymReg]);
    res.json("ok");
  } catch (e) {
    res.send({ data: "no" });
  }
});

app.get("/gym/getGyms", async (req, res) => {
  try {
    const data_getGym = await gymProfiles.find({}).exec();
    res.send({ data: data_getGym });
  } catch (e) {
    console.log(e);
  }
});

app.post("/gym/register", upload.single("photo"), async (req, res) => {
  const data_gymReg = req.body;
  data_gymReg["photo"] = req.file.filename;
  try {
    await userdetails.insertMany([data_gymReg]);
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
  const check_exist = await userdetails.findOne({ phone: req.body.phone });
  if (check_exist) {
    const check = await userdetails.findOne({
      phone: req.body.phone,
      password: req.body.password,
    });
    if (check) {
      res.json("data found");
    } else {
      res.json("combo false");
    }
  } else {
    res.json("data not found");
  }
});

// trianer registration
const storage_trainer = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./components/trainer/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload_trainer = multer({ storage: storage_trainer });

app.post(
  "/trainer/trainerReg",
  upload_trainer.single("photo"),
  async (req, res) => {
    // console.log(req.body);
    const data_trainerReg = req.body;
    data_trainerReg.photo = req.file.filename;
    // console.log(data);
    try {
      await trainerDetails.create(data_trainerReg);
      res.json("inserted");
    } catch (e) {
      if (e.code === 11000) {
        res.json("duplicate key");
      }
      console.log(e);
      res.json("not inserted");
    }
  }
);
app.get("/trainer/getTrainers", async (req, res) => {
  try {
    const data_getTrainers = await trainerDetails.find({});
    // console.log(data);
    res.send({ data: data_getTrainers });
  } catch (e) {
    console.log(e);
  }
});

app.post("/gym/gymCenter", async (req, res) => {
  const date = new Date();
  const timeStamp =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date_reg =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const reg_data = {
    ...req.body,
    time: timeStamp,
    date: date_reg,
    status: true,
  };
  // console.log(reg_data);
  try {
    const check_reg = await register.findOne(req.body);
    if (check_reg) {
      res.json("already registered");
    } else {
      await register.create(reg_data);
      res.json("registered");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/user", async (req, res) => {
  console.log(req.body);
  const { formData, phone, output } = req.body;
  // console.log(req.body);
  // console.log(output);
  // console.log(phone);
  // console.log(user_id, output);
  // console.log()
  // console.log(phone);
  console.log(output);
  try {
    if (output) {
      const data_userAccount = await userdetails.findOne({ phone: phone });
      res.send({ data: data_userAccount });
    } else {
      // console.log({ input });

      console.log(phone);
      console.log(formData);
      await userdetails.findByIdAndUpdate({ phone: phone }, formData, {
        runValidators: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});
