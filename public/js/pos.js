
// public/js/pos.js

// Scan Product Button
document.getElementById('scanButton').addEventListener('click', async () => {
  console.log("Scan Product button clicked"); // Debugging statement
  const barcode = document.getElementById('barcodeInput').value;

  if (!barcode) {
    alert("Please enter a barcode.");
    return;
  }

  const response = await fetch('/checkout/scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ barcode })
  });

  const data = await response.json();
  if (response.ok) {
    alert(`Product added: ${data.productName}`);
  } else {
    alert(data.message || "Error scanning product.");
  }
});

// Apply Discount Button
document.getElementById('discountButton').addEventListener('click', async () => {
  console.log("Apply Discount button clicked"); // Debugging statement
  const discountCode = document.getElementById('discountInput').value;

  if (!discountCode) {
    alert("Please enter a discount code.");
    return;
  }

  const response = await fetch('/checkout/apply-discount', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ discountCode })
  });

  const data = await response.json();
  if (response.ok) {
    alert(`Discount applied: ${data.discountPercentage}%`);
  } else {
    alert(data.message || "Error applying discount.");
  }
});

// Complete Checkout Button
document.getElementById('checkoutButton').addEventListener('click', async () => {
  console.log("Complete Checkout button clicked"); // Debugging statement
  const response = await fetch('/checkout/total', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  if (response.ok) {
    alert(`Checkout complete. Total: $${data.total}`);
  } else {
    alert(data.message || "Error completing checkout.");
  }
});
