// Switch between tabs
function showSection(sectionId) {
    document.getElementById('cashierSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    if (sectionId === 'cashierSection') {
        document.getElementById('cashierSection').style.display = 'block';
        document.querySelector('.tabs .tab:nth-child(1)').classList.add('active');
    } else {
        document.getElementById('productsSection').style.display = 'block';
        document.querySelector('.tabs .tab:nth-child(2)').classList.add('active');
        loadProducts();
    }
}

// Load all products from the server
async function loadProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - $${product.price.toFixed(2)} (Stock: ${product.stock})`;
        productList.appendChild(productItem);
    });
}

// Add a new product
async function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const barcode = document.getElementById('productBarcode').value;

    const response = await fetch('/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, stock, barcode })
    });

    const data = await response.json();
    document.getElementById('addProductResult').textContent = data.message;
    loadProducts(); // Refresh product list
}
