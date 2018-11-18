const models = require("../models");

exports.getAll = (req, res) => {
  models.artists
    .findAll({ limit: 10 })
    .then(artists => {
      if (artists === []) {
        res.send("data not found");
      } else {
        res.send(artists);
      }
    })
    .catch(error => res.send(error));
};

exports.post = (req, res) => {
  models.artists
    .create(req.body)
    .then(artist => {
      console.log(artists);
      res.send({
        message: "insert data success",
        data: artist
      });
    })
    .catch(err => res.send(err));
};

exports.delete = (req, res) => {
  models.artists
    .findOne({ where: { id: req.params.id } })
    .then(artist =>
      artist
        .destroy()
        .then(artist =>
          res.send({
            message: `delete artist id : ${req.params.id} success`,
            data: artist
          })
        )
        .catch(err => res.send(err))
    )
    .catch(err => res.send(err));
};

exports.deleteAll = (req, res) => {
  models.artists
    .destroy({
      where: {},
      truncate: true
    })
    .then(result => {
      res.send("success");
    })
    .catch(err => res.send(err));
};

exports.search = (req, res) => {
  console.log(req.query);
  models.artists
    .findAll({ where: req.query })
    .then(artists => res.send(artists))
    .catch(err => res.send(err));
};

// module.exports.deleteAll = (req, res) => {
//   models.artists
//     .findAll({ limit: 10 })
//     .then(artist =>
//       artist
//         .destroy()
//         .then(artist =>
//           res.send({
//             message: `delete all artists success`
//           })
//         )
//         .catch(err => res.send(err))
//     )
//     .catch(err => res.send(err));
// };

module.exports.update = (req, res) => {
  models.artists
    .update(req.body, { where: { id: req.params.id } })
    .then(res => res.send(res))
    .catch(err => res.send(err));
};

// module.exports.search = (req, res) => {
//   models.artists
//     .findAll({ where: { name: req.query.name } })
//     .then(artists => {
//       if (artists === []) {
//         res.send("data not found");
//       } else {
//         res.send(artists);
//       }
//     })
//     .catch(error => res.send(error));
// };