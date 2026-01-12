// const express = require('express');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// router.get('/produk', authMiddleware, (req, res) => {
//   res.json({
//     message: "Data produk berhasil diakses",
//     user: req.user
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/produk', authMiddleware, (req, res) => {
  res.json({
    message: 'Produk berhasil diambil',
    user: req.user
  });
});

module.exports = router;
