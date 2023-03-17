import fs from 'fs';

export async function load({ params }) {
	const topic = fs.readFileSync('./static/knowledge-base/' + params.topic + '.md', 'utf8');
	return {
		topic
	};
}
