module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	let { name, enhancement, durabilty } = item;

	enhancement !== 20 ? (enhancement += 1) : enhancement;

	return {
		name,
		enhancement,
		durabilty
	};
}

function fail(item) {
	let { name, enhancement, durabilty } = item;

	if (enhancement < 15) durabilty -= 5;
	if (enhancement >= 15 && enhancement < 17) durabilty -= 10;
	if (enhancement > 16) enhancement -= 1;

	return {
		name,
		enhancement,
		durabilty
	};
}

function repair(item) {
	return {
		name: item.name,
		enhancement: item.enhancement,
		durabilty: 100
	};
}

function get(item) {
	return { ...item };
}
