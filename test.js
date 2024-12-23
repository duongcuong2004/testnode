var Animal = /** @class */ (function () {
    function Animal(name) {
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        // Getter: Trả về giá trị của thuộc tính _name
        get: function () {
            return this._name;
        },
        // Setter: Gán giá trị mới cho thuộc tính _name
        set: function (newName) {
            if (newName.length > 2) {
                this._name = newName; // Gán giá trị mới nếu hợp lệ
            }
            else {
                console.log("Name is too short!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var animal = new Animal("Lion");
console.log(animal.name); // Output: "Lion" (Truy xuất qua Getter)
animal.name = "Ti"; // Output: "Name is too short!" (Kiểm tra trong Setter)
animal.name = "Tiger";
console.log(animal.name); // Output: "Tiger" (Gán giá trị qua Setter)
