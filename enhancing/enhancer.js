module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	item.enhancement !== 20 ? (item.enhancement += 1) : item.level;

	return {
		name: item.name,
		enhancement: item.enhancement,
		durabilty: item.durabilty
	};
}

function fail(item) {
	return { ...item };
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
