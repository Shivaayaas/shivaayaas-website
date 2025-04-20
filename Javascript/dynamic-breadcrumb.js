document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("product");

  const current = productData.find(p => p.slug === slug);
  if (current) {
    const breadcrumb = document.querySelector("ol li.text-gray-800");
    if (breadcrumb) breadcrumb.textContent = current.name;
  }
});
