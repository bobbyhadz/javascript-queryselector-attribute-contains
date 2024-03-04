console.log('bobbyhadz.com');

const boxes = document.querySelectorAll('[title*="box"]');
console.log(boxes); // 👉️ [div, div]

const box = document.querySelector('[title*="box"]');
console.log(box); // 👉️ div
