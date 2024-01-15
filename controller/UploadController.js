import multer from 'multer';

//admin
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

//review
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/review/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single('file');
const imageUpload2 = multer({ storage: storage2 }).single('file');

export function upload(req, res) {
  imageUpload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json(res.req.file.path);
    }
  });
}

export function upload2(req, res) {
  imageUpload2(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json(res.req.file.path);
    }
  });
}
