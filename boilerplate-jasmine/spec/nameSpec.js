var jsdom = require("jsdom");

describe("My Name", function() {

  it("should read my full name", function() {
    var a = "Justin";
    var b = "Strayhorn";
    var c = a + b
    
    function add(a, b) {
      return a + b;
    }

    expect(add(a, b)).toBe(c);
  })
})
