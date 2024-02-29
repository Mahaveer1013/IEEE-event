console.log("admin.js");

let searchInput = document.getElementById("search");
let table_row = document.querySelectorAll("table tr .eventName");

searchInput.addEventListener("input", () => {
  let value = searchInput.value;
  table_row.forEach((row) => {
    let rowData = row.innerHTML;
    if (rowData.toLowerCase().includes(value.toLowerCase())) {
      row.parentElement.style.display = "";
    } else {
      row.parentElement.style.display = "none";
    }
  });
});
