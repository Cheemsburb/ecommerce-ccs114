document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('Header-bag');
    const user = document.getElementById('Header-user');

    const bag = document.getElementById('Handbag');
    const clutch = document.getElementById('Clutch');
    const sling = document.getElementById('Sling');
    const earring = document.getElementById('Earring');
    const necklace = document.getElementById('Necklace');
    const bracelet = document.getElementById('Bracelet');
  
    cart.addEventListener('click', function () {
      window.location.href = 'cart.html'; // Replace with your actual filename
    });

    user.addEventListener('click', function () {
        window.location.href = 'userAccount.html'; // Replace with your actual filename
      });

    bag.addEventListener('click', function () {
      window.location.href = 'Categories/Handbag.html'; // Replace with your actual filename
    });

    clutch.addEventListener('click', function () {
      window.location.href = 'Categories/Clutchbag.html'; // Replace with your actual filename
    });

    sling.addEventListener('click', function () {
      window.location.href = 'Categories/Slingbag.html'; // Replace with your actual filename
    });

    earring.addEventListener('click', function () {
      window.location.href = 'Categories/Earring.html'; // Replace with your actual filename
    });

    necklace.addEventListener('click', function () {
      window.location.href = 'Categories/Necklace.html'; // Replace with your actual filename
    });

    bracelet.addEventListener('click', function () {
      window.location.href = 'Categories/bracelet.html'; // Replace with your actual filename
    });

    const bannerButton = document.getElementById("banner-button");
    bannerButton.addEventListener("click", function (){
       document.getElementById("Categories").scrollIntoView();
    })
  });
