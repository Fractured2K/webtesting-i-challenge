const { succeed, fail, repair, get } = require('./enhancer.js');

describe('Enhancer tests', () => {
	// Succeed
	test('accepts item (object) and returns new item (object) modified defined by the client for enhancement success', () => {
		// check to see if item enhancement level goes up by 1
		expect(
			succeed({ name: 'Staff', enhancement: 6, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 7,
			durabilty: 20
		});

		// check to see if item enhancement level stays at 20
		expect(
			succeed({ name: 'Staff', enhancement: 20, durabilty: 20 })
		).toEqual({
			name: 'Staff',
			enhancement: 20,
			durabilty: 20
		});
	});

	// Repair
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
