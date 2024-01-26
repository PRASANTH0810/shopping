 
        let cartCount = 0;

        function addToCart(productName, productPrice) {
           
            cartCount++;
            updateCartCount();
            
        }

        function decreaseCart() {
            if (cartCount > 0) {
                cartCount--;
                updateCartCount();
            }
        }

        function increaseCart() {
            cartCount++;
            updateCartCount();
        }

        function updateCartCount() {
            document.getElementById("cart-count").innerText = cartCount;
        }

       function toggleProducts() {
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                product.style.display = product.style.display === "none" || product.style.display === "" ? "inline-block" : "none";
            });
        }
    
