const url = "https://api.adviceslip.com/advice";

const advices = document.querySelector(".advice-slip");

function getAdvice() {
  fetch(url)
    .then((res) => res.json())
    .then(
      (data) =>
        (advices.innerHTML = `<p class="id"> advice#${data.slip.id}
    </p>. <h2 class="id">"${data.slip.advice}"
    </h2>.`)
    );
}
getAdvice();

btn.addEventListener("click",getAdvice)