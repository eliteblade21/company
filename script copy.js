document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");
const submitButton = document.getElementById("submitButton");

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent = "Sending...";
  submitButton.disabled = true;

  const formData = new FormData(quoteForm);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      formMessage.textContent = data.error || "Something went wrong.";
      return;
    }

    formMessage.textContent = "Quote request sent successfully.";
    quoteForm.reset();
  } catch (error) {
    formMessage.textContent = "Could not send quote request.";
  } finally {
    submitButton.disabled = false;
  }
});
