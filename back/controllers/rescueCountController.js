const report = require('../models/rescueCount');

const getAllReports = (request, response) => {
	report.find()
		.then(report => response.status(200).json(report))
		.catch(error => response.status(400).json({ error }));
};

const addReport = (request, response) => {
	delete request.body._id;
	const Product = new report({
		...request.body
	});
	console.log(Product);
	Product.save()
		.then(product => response.status(201).json({ product }))
		.catch(error => response.status(400).json({ error }));
};

module.exports.getAllReports = getAllReports;
module.exports.addReport = addReport;