const modalBtn = document.querySelectorAll('[data-modal-btn]');
modalBtn.forEach(function (item) {
   item.addEventListener('click', function () {
           const modalWindow = document.querySelector('#' + this.dataset.modalBtn)
           modalWindow.classList.toggle('mobile-active');
           item.classList.toggle('active');

           // clicked fade
           modalWindow.addEventListener('click', function () {
               this.classList.remove('mobile-active')
               modalBtn.forEach((item) => {
                   item.classList.remove('active');
               })
           })

           modalWindow.querySelector('.new-active').addEventListener('click', function (e) {
               e.stopPropagation();
           })
           
   })
})
