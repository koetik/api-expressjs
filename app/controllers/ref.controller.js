const db = require("../models");
const controller = require("./controller");
const {
    body,
    validationResult
} = require('express-validator')
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

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var data = controller.apiResponse(errors.array()[0], false)
        res.status(422).send(data);
        return;
    }

    const refData = {
        id_ref_group: req.body.id_ref_group,
        ref_desc: req.body.ref_desc,
    };

    Ref.create(refData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
}

exports.validate = (method) => {
    switch (method) {

        case 'createRef': {
            return [
                body('id_ref_group', 'ID Ref Tidak boleh kosong').exists().isLength({
                    min: 1,
                }),
                body('id_ref_group', 'ID Ref Harus berupa nomer').isNumeric(),
                body('ref_desc', 'Deskripsi tidak boleh kosong').exists().isLength({
                    min: 1,
                }),
            ]
        }
    }
}