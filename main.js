let shareBtn = document.querySelector(".share-btn");
let sharePanel = document.querySelector(".share-panel");

shareBtn.addEventListener("click", () => {
  sharePanel.classList.toggle("hidden");
  sharePanel.classList.contains("hidden")
    ? shareBtn.setAttribute("aria-expanded", "false")
    : shareBtn.setAttribute("aria-expanded", "true");
});

document.addEventListener("click", (e) => {
  if (
    !sharePanel.classList.contains("hidden") &&
    !sharePanel.contains(e.target) &&
    !shareBtn.contains(e.target)
  ) {
    sharePanel.classList.add("hidden");
    shareBtn.setAttribute("aria-expanded", "false");
  }
});
