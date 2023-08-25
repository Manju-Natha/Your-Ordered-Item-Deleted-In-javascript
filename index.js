let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  },
  {
    itemName: "Chicken",
    uniqueNo: 4,
  },
  {
    itemName: "Veg",
    uniqueNo: 5,
  },
  {
    itemName: "palav",
    uniqueNo: 6,
  },
];

let itemListConatinerEl = document.getElementById("itemListConatiner");

function onCancelButton(itemid) {
  let itemEl = document.getElementById(itemid);
  itemListConatinerEl.removeChild(itemEl);
}

function creaetAndAppendItem(item) {
  let itemid = "item" + item.uniqueNo;
  let buttonid = "button" + item.uniqueNo;
  let itemEl = document.createElement("li");
  itemEl.id = itemid;
  itemEl.classList.add("ordered-item");
  itemEl.textContent = item.itemName;
  itemListConatinerEl.appendChild(itemEl);

  let buttonEl = document.createElement("button");
  buttonEl.classList.add("btn", "btn-danger", "ml-3");
  buttonEl.textContent = "Cancel";
  buttonEl.id = itemid;
  buttonEl.onclick = function () {
    onCancelButton(itemid);
  };
  itemEl.appendChild(buttonEl);
}

for (let item of itemList) {
  creaetAndAppendItem(item);
}
