/** @type {import('./[topic]').RequestHandler} */
export async function get({ params }) {
	const topic = params.topic;

	if (topic) {
		return {
			body: { topic }
		};
	}

	return {
		status: 404
	};
}
