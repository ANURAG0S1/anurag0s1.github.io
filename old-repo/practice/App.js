require("dotenv/config");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var imgModel = require("./models");
var fs = require("fs");
var path = require("path");
var multer = require("multer");
var upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
});
var port = process.env.PORT || "3000";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("connected");
  }
);

app.get("/", async (req, res) => {
  await imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);

      res.send(err);
    } else {
      res.send({ items: items });
    }
  });
});

app.post("/", upload.single("image"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/");
    }
  });
});
{
  /* <div>
<% items.forEach(function(image) { %>
<div>
    <div>
        <img src="data:image/<%=image.img.contentType%>;base64,
             <%=image.img.data.toString('base64')%>">
        <div>
            <h5><%= image.name %></h5>
             


<p><%= image.desc %></p>



        </div>
    </div>
</div>
<% }) %>
</div> */
}

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port", port);
});
