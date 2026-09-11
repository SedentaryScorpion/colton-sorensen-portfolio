const sliderPhotos = {
  fly: ["0af54558b305205e", "1f94674ce2850eac", "411ef5d4138b6727", "f129dd773c574dcb", "b0467a8664af9099", "70323dfa0bf28cd7", "ff49481433d370fb", "ec2aea86b0931a65", "5f8cde78183b15c5", "fcc55e1e2e99c256", "77c2a7583b981f7f", "aa5da938a5900524", "311f89474d8bba68"],
  stage: ["4925b12cab3e7fe8", "29e39bd9c80733e5", "9392ebe624a63cd2", "232c9290d3c63ffe", "ca41d6127123c97e", "58dcccd829cfbd97", "4b248e36798ccbd8", "4a161b54ff83ffb6", "8bc4b82679964309", "844509340b25440f", "db06042baa0bc0df", "396f28b557bb6d0b", "a5efe1603ceeeb9b", "73676032daf35bb2", "ef533ab0e2e85bf6", "c297eb651554bc18", "f2cae46138f350c2", "257f73197498c354", "54f022db22f6c87a", "cfb3c8025211a951", "2c9e3f159f6601ce", "2a76a0ecb2c7b02c", "deaaf1dc0c91ada5", "8703efaa5d89ce47", "7ebc5630c5f5c2bf", "a5516c6f876ee023", "32a9e8cfa4bda316", "6ed57370fda4d675"],
  music: ["0868ba6d25071b17", "d979aa154dcd518c", "64e455962f4649ce", "2ec18e5163c4b686"]
};

document.querySelectorAll("[data-gallery-slider]").forEach((slider) => {
  const gallery = slider.dataset.gallerySlider;
  const photos = sliderPhotos[gallery] || [];
  if (!photos.length) return;
  const label = slider.dataset.galleryLabel || "Portfolio";
  let index = 0;
  slider.innerHTML = `<div class="slider-frame"><img alt="${label} photograph"></div><div class="slider-controls"><button type="button" class="slider-button" data-direction="previous" aria-label="Previous ${label} photograph">←</button><span class="slider-count" aria-live="polite"></span><button type="button" class="slider-button" data-direction="next" aria-label="Next ${label} photograph">→</button></div>`;
  const image = slider.querySelector("img");
  const count = slider.querySelector(".slider-count");
  const render = () => {
    image.src = `${gallery}-${photos[index]}.jpg`;
    image.alt = `${label} photograph ${index + 1} of ${photos.length}`;
    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;
  };
  slider.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    index = button.dataset.direction === "next" ? (index + 1) % photos.length : (index - 1 + photos.length) % photos.length;
    render();
  }));
  image.addEventListener("click", () => {
    const dialog = document.querySelector(".image-lightbox") || document.body.appendChild(Object.assign(document.createElement("dialog"), { className: "image-lightbox" }));
    dialog.innerHTML = `<button aria-label="Close image">×</button><img src="${image.src}" alt="${image.alt}">`;
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }, { once: true });
    dialog.showModal();
  });
  render();
});
