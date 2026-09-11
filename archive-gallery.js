const galleries = {
  "bright-star-gallery": { photos: ["24ffa5c6ea25e344","82666471733c0518","9a44b51348e3d484"], label: "Bright Star production" },
  "all-my-sons-gallery": { photos: ["018068128feb3cd8","38b140562d4267fc","8f57c7be94444474","c2400db9bdc3ca49"], label: "All My Sons production" }
};
for (const [id, gallery] of Object.entries(galleries)) {
  const container = document.getElementById(id);
  if (!container) continue;
  gallery.photos.forEach((photo, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = `gallery/performance/${photo}.jpg`;
    image.alt = `${gallery.label} photograph ${index + 1}`;
    image.loading = "lazy";
    figure.append(image);
    figure.addEventListener("click", () => {
      const dialog = document.querySelector(".image-lightbox") || document.body.appendChild(Object.assign(document.createElement("dialog"), { className: "image-lightbox" }));
      dialog.innerHTML = `<button aria-label="Close image">×</button><img src="${image.src}" alt="${image.alt}">`;
      dialog.querySelector("button").addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }, { once: true });
      dialog.showModal();
    });
    container.append(figure);
  });
}
