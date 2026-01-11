// JavaScript for subscription selection and dynamic cart link
 
    // Subscription toggle functionality
    const singleRadio = document.getElementById('single');
    const doubleRadio = document.getElementById('double');
    const singleDetails = document.getElementById('singleDetails');
    const doubleDetails = document.getElementById('doubleDetails');

    function toggleSubscription() {
      if (singleRadio.checked) {
        singleDetails.classList.add('active');
        doubleDetails.classList.remove('active');
      } else {
        singleDetails.classList.remove('active');
        doubleDetails.classList.add('active');
      }
      updateCartLink();
    }

    singleRadio.addEventListener('change', toggleSubscription);
    doubleRadio.addEventListener('change', toggleSubscription);

    // Dynamic Add to Cart link
    function updateCartLink() {
      const purchaseType = document.querySelector('input[name="purchase"]:checked').value;
      let fragrance1 = '';
      let fragrance2 = '';

      if (purchaseType === 'single') {
        fragrance1 = document.querySelector('input[name="fragrance-single"]:checked').value;
        const url = `https://example.com/cart?type=${purchaseType}&fragrance=${fragrance1}`;
        document.getElementById('addToCartBtn').href = url;
        console.log('Cart URL:', url);
      } else {
        fragrance1 = document.querySelector('input[name="fragrance-double-1"]:checked').value;
        fragrance2 = document.querySelector('input[name="fragrance-double-2"]:checked').value;
        const url = `https://example.com/cart?type=${purchaseType}&fragrance1=${fragrance1}&fragrance2=${fragrance2}`;
        document.getElementById('addToCartBtn').href = url;
        console.log('Cart URL:', url);
      }
    }

    // Add listeners to all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', updateCartLink);
    });

    // Initialize
    updateCartLink();