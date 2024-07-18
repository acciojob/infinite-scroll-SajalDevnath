document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");
  const addListItems = (num) => {
    for (let i = 0; i < num; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `List Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  };
  addListItems(10);
  list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addListItems(2);
    }
  });
});
