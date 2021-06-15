module.exports = (sequelize, Sequelize) => {
    const Ref = sequelize.define("t_ref", 
    {        
        id_ref_group: {
            type: Sequelize.STRING
        },
        ref_desc: {
            type: Sequelize.STRING
        },
    }, 
    {
        tableName: 't_ref',
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
    
    return Ref;
}