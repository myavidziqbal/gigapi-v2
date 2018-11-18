const models = require("../models");

exports.getAll = (req, res) => {
  models.hosts
    .findAll({ limit: 10 })
    .then(hosts => {
      if (hosts === []) {
        res.send("data not found");
      } else {
        res.send(hosts);
      }
    })
    .catch(error => res.send(error));
};

exports.post = (req, res) => {
  models.hosts
    .create(req.body)
    .then(host => {
      console.log(hosts);
      res.send({
        message: "insert data success",
        data: host
      });
    })
    .catch(err => res.send(err));
};

exports.delete = (req, res) => {
  models.hosts
    .findOne({ where: { id: req.params.id } })
    .then(host =>
      host
        .destroy()
        .then(host =>
          res.send({
            message: `delete host id : ${req.params.id} success`,
            data: host
          })
        )
        .catch(err => res.send(err))
    )
    .catch(err => res.send(err));
};

exports.deleteAll = (req, res) => {
  models.hosts
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
  models.hosts
    .findAll({ where: req.query })
    .then(hosts => res.send(hosts))
    .catch(err => res.send(err));
};

// module.exports.deleteAll = (req, res) => {
//   models.hosts
//     .findAll({ limit: 10 })
//     .then(host =>
//       host
//         .destroy()
//         .then(host =>
//           res.send({
//             message: `delete all hosts success`
//           })
//         )
//         .catch(err => res.send(err))
//     )
//     .catch(err => res.send(err));
// };

module.exports.update = (req, res) => {
  models.hosts
    .update(req.body, { where: { id: req.params.id } })
    .then(res => res.send(res))
    .catch(err => res.send(err));
};

// module.exports.search = (req, res) => {
//   models.hosts
//     .findAll({ where: { name: req.query.name } })
//     .then(hosts => {
//       if (hosts === []) {
//         res.send("data not found");
//       } else {
//         res.send(hosts);
//       }
//     })
//     .catch(error => res.send(error));
// };