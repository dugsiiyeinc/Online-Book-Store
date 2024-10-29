const faqs = [
  {
    question: "What types of books does BookNest offer?",
    answer:
      "BookNest offers a diverse selection of books, including fiction, non-fiction, children's books, and more. We curate our collection to ensure there’s something for every reader.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can easily place an order through our website. Browse our collection, add your desired books to the cart, and proceed to checkout. We offer secure payment options for a smooth shopping experience.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally! Shipping costs and times vary based on your location. You'll see shipping options and fees during checkout.",
  },
  {
    question: "Can I return or exchange a book?",
    answer:
      "Yes, we accept returns and exchanges within 30 days of purchase. Please ensure that the book is in its original condition. Visit our Returns page for more information.",
  },
];

const accordion = document.querySelector(".accordion");

faqs.forEach((faq) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  accordionItem.innerHTML = `
      <h3 class="accordion-question">${faq.question}</h3>
      <p class="accordion-content" style="display: none;">${faq.answer}</p>
    `;

  const accordionQuestion = accordionItem.querySelector(".accordion-question");

  accordionQuestion.addEventListener("click", () => {
    // Close all open answers first
    const allContents = document.querySelectorAll(".accordion-content");
    allContents.forEach((content) => {
      content.style.display = "none";
    });

    // Open the clicked answer
    const accordionContent = accordionItem.querySelector(".accordion-content");
    accordionContent.style.display = "block";
  });

  accordion.appendChild(accordionItem);
});
