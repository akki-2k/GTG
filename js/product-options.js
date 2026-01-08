// Product Options and Cart Link Management
const fragranceRadios = document.querySelectorAll('input[name="fragrance"]');
const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
const addToCartBtn = document.getElementById('addToCart');
const currentPriceEl = document.getElementById('currentPrice');
const singleDetails = document.getElementById('singleDetails');
const doubleDetails = document.getElementById('doubleDetails');

function updateCartLink() {
    const fragrance = document.querySelector('input[name="fragrance"]:checked').value;
    const purchase = document.querySelector('input[name="purchase"]:checked').value;
    
    // Update price display
    const prices = {
        'single': '$99.99',
        'double': '$169.99',
        'onetime': '$146'
    };
    currentPriceEl.textContent = prices[purchase];
    
    // Generate cart link (9 possible combinations)
    const cartLink = `https://example.com/cart?fragrance=${fragrance}&type=${purchase}`;
    addToCartBtn.href = cartLink;
    
    // Update subscription details visibility
    singleDetails.classList.toggle('active', purchase === 'single');
    doubleDetails.classList.toggle('active', purchase === 'double');
}

fragranceRadios.forEach(radio => {
    radio.addEventListener('change', updateCartLink);
});

purchaseRadios.forEach(radio => {
    radio.addEventListener('change', updateCartLink);
});
