import { describe, expect, it } from "vitest";

import { hello } from "./hello.ts";

describe(`hello`, () => {
	it.each([
		[undefined, `Hello, world!`],
		[``, `Hello, world!`],
		[`foo`, `Hello, foo!`],
		[` `, `Hello,  !`], // TODO: Consider trimming (but leave for now)
	])(`should map [%s] to [%s]`, (input, expected) => {
		expect(hello(input)).toStrictEqual(expected);
	});

	it(`does not require an argument`, () => {
		expect(hello()).toBe(`Hello, world!`);
	});
});
