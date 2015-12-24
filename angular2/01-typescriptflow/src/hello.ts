/// <reference path="../typings/tsd.d.ts" />

import * as _ from 'lodash';
function hello(s: string) {
	console.log(`hello, ${s}`);
}

hello('typescript');

function foo() {
}

_.each([12, "123"], (e) => console.log(e));