// Clic sur l'adresse : copie dans le presse-papiers, le mailto reste en secours.
const mail = document.querySelector("[data-copy]");

if (mail && navigator.clipboard) {
  mail.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(mail.dataset.copy);
      mail.setAttribute("data-copied", "");
      setTimeout(() => mail.removeAttribute("data-copied"), 1600);
    } catch {
      // pas d'accès au presse-papiers : on ouvre le client mail
      window.location.href = mail.href;
    }
  });
}
