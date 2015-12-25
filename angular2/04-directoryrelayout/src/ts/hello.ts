/// <reference path="../../typings/tsd.d.ts" />

import * as _ from 'lodash';

import 'bootstrap';
import 'bootstrap/css/bootstrap.min.css!';

function hello(s: string) {
	console.log(`hello, ${s}`);
}

hello('typescript');

function foo() {
	console.log('haha');
}

_.each([12, "123"], (e) => console.log(e));

console.log('hi, browsersycn watch..');
foo();