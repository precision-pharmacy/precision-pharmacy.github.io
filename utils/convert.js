const csv = require('csvtojson');
const fs = require('fs');

csv({
	noheader: false,
	headers: [
		'Location',
		'Distance',
		'Total_Travel_Time',
		'Where_to_stay',
		'What_to_do',
		'Accommodation_Link'
	]
}).fromFile('./trip-data.csv')
	.then(data => {
		console.log(data);

		fs.writeFile('output.json', JSON.stringify(data, null, 2), (err) => {
			if (err) return err;

			console.log('done');
		});
	});

