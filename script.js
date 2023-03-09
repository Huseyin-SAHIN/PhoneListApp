const todoForm = document.querySelector(".todo-form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listElement = document.querySelector(".phone-body ul");
const midleButton = document.querySelector(".midle-button");

let todoFormActiveControl = false
let timer;

btn.addEventListener("click", () => {
    if (!todoFormActiveControl) {
        todoForm.classList.add("active");
        input.focus();
        todoFormActiveControl = true;
    } else {
        addList();
    }
});

input.addEventListener("blur", () => {
    timer = setTimeout(() => {
        todoForm.classList.remove("active");
        todoFormActiveControl = false;
    }, 1000);
});

input.addEventListener("focus", () => {
    clearTimeout(timer);
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addList();
});

listElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-solid", "fa-xmark")) {
        e.target.parentNode.remove();
        indexList();
    }
})

midleButton.addEventListener("click", () => {
    if (listElement.children.length !== 0) {
        const confirmResult = confirm("Bütün liste silinsin mi gerçekten?");
        if (confirmResult) {
            listElement.innerHTML = "";
        };
    };
});

document.addEventListener('dblclick', function (event) {
    event.preventDefault();
}, false);

// Fonksiyonlar

function addList() {
    const li = `
                    <li>
                        <div class="list-body">
                            <div class="list-number"><b></b></div>
                            <div class="list-value">
                                ${input.value.toUpperCase()}
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark"></i>
                    </li>
                `;

    if (input.value !== "") {
        listElement.insertAdjacentHTML('beforeend', li);
        indexList();
        input.value = "";
        input.focus();
    };
}

function indexList() {
    const listIndexNumber = document.querySelectorAll(".list-number b");
    let indexListNumber = 1;
    for (let i of listIndexNumber) {
        i.textContent = indexListNumber + ")"
        indexListNumber++;
    }
}

indexList();