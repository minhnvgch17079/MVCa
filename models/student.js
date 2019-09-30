const Sequelize = require('./pg').S
const sequelize = require('./pg').s

const Student = sequelize.define('students', {
    student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    last_name: {
        type: Sequelize.STRING(50)
    },
    first_name: {
        type: Sequelize.STRING(50)
    },
    enrollment_date: {
        type: Sequelize.DATE
    }
}, {timestamps: false})

module.exports = Student