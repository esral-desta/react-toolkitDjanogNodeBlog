const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    writer: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blogs", blogSchema);

const app = express();
app.use(express.urlencoded({ extended: true })); // to get   req.body
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send("error");
    });
  // res.json({ user: 'tobi' })
});

app.get("/create", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
//   Blog.findByIdAndUpdate(id, { title: "updated title",body:"updated body" })
  Blog.findByIdAndUpdate(id, req.body)
    .then((respon) => {res.send(respon)})
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log("server running on port", process.env.PORT);
  }
});

const dbURI =
  "mongodb+srv://someone:0914003139@cluster0.m8juvd1.mongodb.net/project1?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("can't connect to db", error);
  });
