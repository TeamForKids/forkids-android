// import axios from "axios";

// const mongoose = require("mongoose");

// // MongoDB에 연결
// mongoose.connect("mongodb://localhost/my-app");

// // Todo 모델을 정의
// const TodoSchema = new mongoose.Schema({
//   text: String,
//   completed: Boolean,
// });

// // Todo 모델을 생성
// const Todo = mongoose.model("Todo", TodoSchema);

// // 새 Todo를 생성
// const todo = new Todo({
//   text: "My first Todo",
//   completed: false,
// });

// // Todo를 저장
// todo.save((err, todo) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Todo created!");
//   }
// });
// mongoose
//   .connet("mongoURI", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("MongoDB Connected.."))
//   .catch((err) => console.log(err));

// const getMessages = () => {
//   return axios.get("/messages");
// };

// const sendMessages = (message) => {
//   return axios.post("/messages", message);
// };
