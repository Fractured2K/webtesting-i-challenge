module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	let { enhancement } = item;

	enhancement !== 20 ? (enhancement += 1) : enhancement;

	return {
		...item,
		enhancement
	};
}

function fail(item) {
	let { enhancement, durabilty } = item;

	if (enhancement < 15) durabilty -= 5;
	if (enhancement >= 15) durabilty -= 10;
	if (enhancement > 16) enhancement -= 1;

	return {
		...item,
		enhancement,
		durabilty
	};
}

function repair(item) {
	let { name, enhancement, durabilty } = item;

	durabilty = 100;

	return {
		name,
		enhancement,
		durabilty
	};
}

function get(item) {
	let { name, enhancement, durabilty } = item;

	name = `[+${enhancement}] ${name}`;

	return {
		name,
		enhancement,
		durabilty
	};
}
