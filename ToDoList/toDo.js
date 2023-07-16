const textarea = document.getElementById("textarea");
const list = document.getElementById("list");

const addItemToList = () => {
  if (textarea.value === "") {
    alert("Please fill out the text..");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = textarea.value;
    list.appendChild(listItem);
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "\u00d7";
    listItem.appendChild(closeButton);
  }
  textarea.value = "";
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("data", list.innerHTML);
};

const handleListClick = (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
  updateLocalStorage();
};

textarea.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList();
  }
});

list.addEventListener("click", handleListClick, false);

const dataNotRefresh = () => {
  list.innerHTML = localStorage.getItem("data");
};
dataNotRefresh();
