const path = require("path");
const router = require("express").Router();

// =================WHAT IS THE DIFF BETWEEN THIS====================
// module.exports = function(app) {
//   app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

//   app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });

//   app.get("/excercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
// };
// ==================================================================

// ==========================AND THIS================================
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/excercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// ==================================================================