const cookieBanner = document.querySelector(".cookieBanner");
const schließen = document.querySelector(".schließen");
const annehmen = document.querySelector(".annehmen");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cookieDecision") === "accepted") {
    cookieBanner.style.display = "none";
  } else {
    cookieBanner.style.display = "flex";
  }
});

annehmen.addEventListener("click", () => {
  localStorage.setItem("cookieDecision", "accepted"); // Entscheidung speichern
  cookieBanner.style.display = "none"; // Banner ausblenden
});

schließen.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cookieDecision") === "accepted") {
    cookieBanner.style.display = "none";
  }
});
