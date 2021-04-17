const mongoose = require('mongoose');

const rescueCountSchema = mongoose.Schema({
	date: {type: Date, required: true },
	startday: {type: Date},
	endday: {type: Date},
	amplitude: {type: Number},
	effectif: {type: Number},
    lunch_break: {type: Boolean},
    public_holiday: {type: Boolean},
    permanence: {type: Boolean},
    holidays: {type: Boolean},
    sick_leave: {type: Boolean},
    observations: {type: String},
});

module.exports = mongoose.model('rescueCount', rescueCountSchema);