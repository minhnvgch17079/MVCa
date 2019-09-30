const sequelize = require('./pg').s
const Sequelize = require('./pg').S
const Course = require('./course')
const Student = require('./student')
const Enrollment = sequelize.define('enrollments', {
    enrollment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    grade: {
        type: Sequelize.INTEGER
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'course_id'
        }
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'student_id'
        }
    }
}, {timestamps: false})

module.exports = Enrollment