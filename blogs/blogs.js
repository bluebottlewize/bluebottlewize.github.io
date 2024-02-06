////////// dark - light button

document.getElementById("dark-light-button").addEventListener("click", (e) => {
  document.getElementsByTagName("body")[0].classList.toggle("light");
  e.currentTarget.firstElementChild.classList.toggle(
    "dark-mode-toggle__icon--moon",
  );
});

Array.from(document.getElementsByClassName("like-button")).forEach((item) => {
  item.addEventListener("click", (e) => {
    var now = item.innerHTML;
    console.log(now);

    var likes = Number(item.parentNode.childNodes[3].innerText);
    console.log(likes);

    if (now == "G") {
      ++likes;
      item.innerText = "L";
    } else {
      --likes;
      item.innerText = "G";
    }

    item.parentNode.childNodes[3].innerText = likes;
  });
});
