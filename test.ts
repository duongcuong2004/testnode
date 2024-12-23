class Multiplier {
    private _name: string;  // Thuộc tính private
  
    constructor(name: string) {
      this._name = name;
    }
  
    // Getter: Trả về giá trị của thuộc tính _name
    get name(): string {
      return this._name;
    }
  
    // Setter: Gán giá trị mới cho thuộc tính _name
    set name(newName: string) {
      if (newName.length > 2) {
        this._name = newName;  // Gán giá trị mới nếu hợp lệ
      } else {
        console.log("Name is too short!");
      }
    }
  }
  
  const animal = new Animal("Lion");
  console.log(animal.name);  // Output: "Lion" (Truy xuất qua Getter)
  
  animal.name = "Ti";  // Output: "Name is too short!" (Kiểm tra trong Setter)
  animal.name = "Tiger";
  console.log(animal.name);  // Output: "Tiger" (Gán giá trị qua Setter)
  