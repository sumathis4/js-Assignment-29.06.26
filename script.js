// 1. Employee Salary


function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}
console.log("Yearly Salary : ₹" + yearlySalary(45000));


// 2. Student Pass or Fail


function checkResult(mark) {
    return mark >= 35 ? "Pass" : "Fail";
}
console.log("Result :", checkResult(72));


// 3. Food Bill


function totalBill(price, quantity) {
    return price * quantity;
}
console.log("Total Bill : ₹" + totalBill(180, 3));


// 4. Welcome Employee

function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}
welcomeEmployee("Naveen", "Development");


// 5. Shopping Discount


function finalAmount(price, discount) {
    return price - discount;
}
console.log("Final Amount : ₹" + finalAmount(5000, 500));


// 6. Company Login (Callback Function)


function login(callback) {
    console.log("Login Successful");
    callback();
}

function dashboard() {
    console.log("Loading Dashboard...");
}

login(dashboard);


// 7. Food Delivery (Higher Order Function)


function deliveryStep(message) {
    console.log(message);
}

function foodDelivery(callback) {
    callback("Order Received");
    callback("Preparing Food");
    callback("Out for Delivery");
    callback("Delivered");
}

foodDelivery(deliveryStep);


// 8. Lucky Draw (Generator Function)


function* coupons() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let coupon = coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// 9. Employee Bonus (Currying)


function bonus(salary) {

    return function (bonusAmount) {
        console.log("Total Salary :", salary + bonusAmount);
    };
}
bonus(50000)(5000);


// 10. Merge Employee Details (Spread Operator)


const employeePersonal = {
    name: "Naveen",
    age: 25
};

const employeeOffice = {
    department: "Development",
    salary: 50000
};

const employee = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employee);


// 11. Shopping Cart Merge


const cart1 = ["Mobile", "Laptop"];
const cart2 = ["Headphone", "Mouse"];

const mergedCart = [...cart1, ...cart2];
console.log(mergedCart);


// 12. Student Marks (Rest Operator)


function student(name, ...marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

student("Naveen", 90, 85, 88, 95);


// 13. Product Details (Object Destructuring)


const product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

const { name, price } = product;
console.log("Name :", name);
console.log("Price :", price);


// 14. Customer Details (Array Destructuring)


const customer = [101, "Naveen", "Chennai", 9876543210];

const [id, customerName, city] = customer;

console.log("ID :", id);
console.log("Name :", customerName);
console.log("City :", city);


// 15. Add Product using push()


let cart = ["Mobile", "Laptop"];
cart.push("Headphone");
console.log(cart);


// 16. Remove Last Product


let cartItems = ["Mobile", "Laptop", "Headphone"];
cartItems.pop();
console.log(cartItems);


// 17. Replace Employee using splice()


let employees = ["Rahul", "Arun", "John", "David"];
employees.splice(2, 1, "Naveen");
console.log(employees);


// 18. Search Product using includes()


let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];
console.log(products.includes("Laptop"));


// 19. Employee Ranking (Sort Salaries)


let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log(salaries);


// 20. Reverse Chat Messages


let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
console.log(messages.reverse());