const db = require("../models");
const controller = require("./controller");
const Ref = db.ref;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        ref_desc: {
            [Op.like]: `%${title}%`
        }
    } : null;
    
    Ref.findAll({
            where: condition
        })
        .then(data => {
            if (data.length > 0) {
                data = controller.apiResponse(data, true)
                res.send(data);
                return
            }
            data = controller.apiResponse('data tidak ditemukan', false)
            res.status(404).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving t_ref."
            });
        });
};
