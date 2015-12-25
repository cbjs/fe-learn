System.register(['lodash', 'bootstrap', 'bootstrap/css/bootstrap.min.css!'], function(exports_1) {
    var _;
    function hello(s) {
        console.log("hello, " + s);
    }
    function foo() {
        console.log('haha');
    }
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (_2) {},
            function (_3) {}],
        execute: function() {
            hello('typescript');
            _.each([12, "123"], function (e) { return console.log(e); });
            console.log('hi, browsersycn watch..');
            foo();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLnRzIl0sIm5hbWVzIjpbImhlbGxvIiwiZm9vIl0sIm1hcHBpbmdzIjoiOztJQU1BLGVBQWUsQ0FBUztRQUN2QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBVUEsQ0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBSUQ7UUFDQ0MsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDckJBLENBQUNBOzs7Ozs7Ozs7WUFKRCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFNcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7WUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImhlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MhJztcblxuZnVuY3Rpb24gaGVsbG8oczogc3RyaW5nKSB7XG5cdGNvbnNvbGUubG9nKGBoZWxsbywgJHtzfWApO1xufVxuXG5oZWxsbygndHlwZXNjcmlwdCcpO1xuXG5mdW5jdGlvbiBmb28oKSB7XG5cdGNvbnNvbGUubG9nKCdoYWhhJyk7XG59XG5cbl8uZWFjaChbMTIsIFwiMTIzXCJdLCAoZSkgPT4gY29uc29sZS5sb2coZSkpO1xuXG5jb25zb2xlLmxvZygnaGksIGJyb3dzZXJzeWNuIHdhdGNoLi4nKTtcbmZvbygpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
