describe('Test the exercise solution for Destructuring Exercise', () => {
	it('creates and returns correct values of a and b after object destructuring', () => {
		expect(a).toBe(1);
		expect(b).toBe(2);
	});

	it('correctly swaps the values inside arr', () => {
		expect(arr[0]).toBe(2);
		expect(arr[1]).toBe(1);
	});

	it('returns an object with the keys first, second, thrid and rest on raceResults([first, second, third, ...rest])', () => {
		expect(
			raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
		).toEqual({
			first: 'Tom',
			second: 'Margaret',
			third: 'Allison',
			rest: ['David', 'Pierre'],
		});
	});
});
