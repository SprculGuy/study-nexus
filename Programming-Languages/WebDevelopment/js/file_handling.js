import fs from 'fs';


fs.readFile('./file.txt', function(err, data) {
	if (err) {
		console.error('Error reading file', err);
		return;
	}
	console.log(data.toString());
});