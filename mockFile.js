// mock file
function MockFile() { };

MockFile.prototype.create = function (name, size, mimeType) {
    name = name || "mock.txt";
    size = size || 1024;
    mimeType = mimeType || 'plain/txt';

    function range(count) {
        var output = "";
        for (var i = 0; i < count; i++) {
            output += "a";
        }
        return output;
    }

    var blob = new Blob([range(size)], { type: mimeType });
    blob.lastModifiedDate = new Date();
    blob.name = name;

    return blob;
};



// mock file test harness
describe("Mock file for file upload testing", function () {
    it("should be defined", function() {
        var file = new MockFile();
        expect(file).not.toBeNull();
    });

    it("should have default values", function() {
        var mock = new MockFile();
        var file = mock.create();
        expect(file.name).toBe('mock.txt');
        expect(file.size).toBe(1024);
    });

    it("should have specific values", function () {
        var size = 1024 * 1024 * 2;
        var mock = new MockFile();
        var file = mock.create("pic.jpg", size, "image/jpeg");
        expect(file.name).toBe('pic.jpg');
        expect(file.size).toBe(size);
        expect(file.type).toBe('image/jpeg');
    });
});