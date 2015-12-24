System.register(['lodash'], function(exports_1) {
    var _;
    function hello(s) {
        console.log("hello, " + s);
    }
    function foo() {
    }
    return {
        setters:[
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            hello('typescript');
            _.each([12, "123"], function (e) { return console.log(e); });
            console.log('hi, browsersycn watch');
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLnRzIl0sIm5hbWVzIjpbImhlbGxvIiwiZm9vIl0sIm1hcHBpbmdzIjoiOztJQUdBLGVBQWUsQ0FBUztRQUN2QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBVUEsQ0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBSUQ7SUFDQUMsQ0FBQ0E7Ozs7Ozs7WUFIRCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFLcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7WUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDIiwiZmlsZSI6ImhlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5mdW5jdGlvbiBoZWxsbyhzOiBzdHJpbmcpIHtcblx0Y29uc29sZS5sb2coYGhlbGxvLCAke3N9YCk7XG59XG5cbmhlbGxvKCd0eXBlc2NyaXB0Jyk7XG5cbmZ1bmN0aW9uIGZvbygpIHtcbn1cblxuXy5lYWNoKFsxMiwgXCIxMjNcIl0sIChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG5cbmNvbnNvbGUubG9nKCdoaSwgYnJvd3NlcnN5Y24gd2F0Y2gnKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
