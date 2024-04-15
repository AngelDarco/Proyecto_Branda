/* eslint-disable linebreak-style */
export default function slider() {
  const slider = document.getElementById("slider");
  if (slider == null) return;

  const sliderSection = document.querySelectorAll(".slider__section");
  const sliderSectionLast = sliderSection[sliderSection.length - 1];
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-right");
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);
  function Next() {
    const sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  function Prev() {
    const sliderSection = document.querySelectorAll(".slider__section");
    const sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    slider.style.transition = "ease-in-out";
    setTimeout(function () {
      slider.style.transition = "none";
      if (slider && sliderSectionLast)
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  btnRight.addEventListener("click", function () {
    Next();
  });

  btnLeft.addEventListener("click", function () {
    Prev();
  });

  setInterval(function () {
    Next();
  }, 5000);
}
slider();
