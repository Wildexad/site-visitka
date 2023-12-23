 function copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      alert("Скопировано!");
    }
function toggleTheme() {
    document.body.classList.toggle('red-theme');
    }
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
    function toggleTheme() {
        document.body.classList.toggle('red-theme');
        const currentTheme = document.body.classList.contains('red-theme') ? 'red-theme' : '';
        localStorage.setItem('theme', currentTheme);
    }
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    });



    document.addEventListener('DOMContentLoaded', function () {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartItemsList = document.getElementById('cart-items');
        const totalDisplay = document.getElementById('total');
        const checkoutButton = document.getElementById('checkout');
      
        let cartTotal = 0;
      
        addToCartButtons.forEach(button => {
          button.addEventListener('click', () => {
            const price = parseInt(button.dataset.price);
            const itemName = button.parentElement.querySelector('h3').textContent;
      
            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} - ${price}р`;
            cartItemsList.appendChild(cartItem);
      
            cartTotal += price;
            totalDisplay.textContent = `Итого: ${cartTotal}р`;
          });
        });
      
        checkoutButton.addEventListener('click', () => {
          alert('Оплата проведена!');
          cartItemsList.innerHTML = '';
          cartTotal = 0;
          totalDisplay.textContent = 'Итого: 0р';
        });
      });