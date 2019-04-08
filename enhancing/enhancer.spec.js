const { succeed, fail, repair, get } = require('./enhancer.js');

describe('Enhancer tests', () => {
	test('accepts item (obect) and returns new item (object) with the durability restored to 100', () => {
		expect(
			repair({ name: 'Staff', enhancement: 6, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 6,
			durabilty: 100
		});
	});
});
