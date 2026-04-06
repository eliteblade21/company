document.getElementById("quote-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    location: form.location.value,
    details: form.details.value,
  };

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Quote request sent!");
      form.reset();
    } else {
      alert(result.error || "Failed to send.");
    }
  } catch (err) {
    alert("Something went wrong.");
    console.error(err);
  }
});
