import fs from 'fs';
export const load = () => {
	let topics = [];
	fs.readdirSync('./static/knowledge-base/').forEach((file) => {
		if (!file.startsWith('.') && file != 'LICENSE') {
			topics.push(file.substring(0, file.length - 3));
		}
	});
	return { topics };
};
