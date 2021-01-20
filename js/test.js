const next = document.getElementById("next");
const previous = document.getElementById("previous");

const toogle = (btn) => {
  const users = document.querySelectorAll(
    '[class$="--tanya"],[class$="--john"]'
  );

  btn.addEventListener("click", () => {
    users.forEach((user) => user.classList.toggle("show"));
  });
};

toogle(next);
toogle(previous);
