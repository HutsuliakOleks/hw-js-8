// Завдання 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < friends.length; i = i + 1) {
    string = string + friends[i];
    if (i != friends.length - 1) {
        string += ", ";
    }
}
console.log(string);

let textString = friends.join(", ");
console.log(textString);
